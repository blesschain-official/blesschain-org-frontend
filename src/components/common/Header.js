"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import SearchIcon from '../icons/SearchIcon';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import LanguageIcon from '../icons/LanguageIcon';
import UserLoginSection from './UserLoginSection';

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const dummyData = ['Learn', 'Use', 'Build', 'Participate', 'Research', 'About', 'Contact'];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filteredResults = dummyData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm pt-20"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pr-12 bg-transparent focus:outline-none text-lg text-blesschain-primary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="absolute top-1/2 right-4 -translate-y-1/2 text-blesschain-primary cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {results.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700">
            <ul className="py-2">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [userName, setUserName] = useState('');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'info', visible: false });
  const toastTimer = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const readUser = () => {
      if (typeof window === 'undefined') return;
      const stored = window.localStorage.getItem('bc_user');
      setUserName(stored || '');
    };
    readUser();

    const handleAuthChange = () => readUser();
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('bc-auth-change', handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('bc-auth-change', handleAuthChange);
    };
  }, []);

  useEffect(() => {
    const handleToast = (event) => {
      const detail = event.detail || {};
      setToast({ message: detail.message || '', type: detail.type || 'info', visible: true });
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
    };
    window.addEventListener('bc-toast', handleToast);
    return () => {
      window.removeEventListener('bc-toast', handleToast);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    {
      href: '/blessai',
      label: 'BlessAI System',
      children: [
        { href: '/blessai/erp', label: 'BlessERP' },
        { href: '/blessai/menu', label: 'BlessMenu' },
        { href: '/blessai/order', label: 'BlessOrder' },
        { href: '/blessai/shipping', label: 'BlessShipping' },
      ],
    },
    { href: '/docs', label: 'Docs' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/community', label: 'Community' },
  ];

  const isActiveLink = (href) =>
    pathname ? pathname === href || pathname.startsWith(`${href}/`) : false;

  const isParentActive = (link) =>
    isActiveLink(link.href) ||
    (link.children || []).some((child) => isActiveLink(child.href));

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0E0E12] border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Blesschain logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center section */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = isParentActive(link);
                if (link.children) {
                  return (
                    <div key={link.href} className="relative group">
                      <Link
                        href={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`font-medium transition-colors flex items-center gap-1 ${
                          isActive
                            ? 'text-blesschain-primary'
                            : 'text-gray-300 hover:text-blesschain-primary'
                        }`}
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      <div className="absolute left-0 mt-3 hidden w-48 rounded-lg border border-gray-800 bg-[#0E0E12] shadow-lg group-hover:block group-focus-within:block">
                        <div className="py-2">
                          {link.children.map((child) => {
                            const isChildActive = isActiveLink(child.href);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                aria-current={isChildActive ? 'page' : undefined}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isChildActive
                                    ? 'text-blesschain-primary'
                                    : 'text-gray-300 hover:text-blesschain-primary'
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-medium transition-colors ${
                      isActive
                        ? 'text-blesschain-primary'
                        : 'text-gray-300 hover:text-blesschain-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right section */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  aria-label="Open search"
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 p-2 text-blesschain-primary hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
                <UserLoginSection userName={userName} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className={`min-w-[240px] rounded-xl border px-4 py-3 text-sm shadow-[0_12px_28px_rgba(0,0,0,0.35)] ${
              toast.type === 'success'
                ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100'
                : 'border-amber-300/50 bg-amber-300/10 text-amber-100'
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
