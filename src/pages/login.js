import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === 'admin' && password === 'admin') {
      window.localStorage.setItem('bc_user', 'Admin');
      window.dispatchEvent(new Event('bc-auth-change'));
      window.dispatchEvent(
        new CustomEvent('bc-toast', { detail: { message: 'Logged in successfully', type: 'success' } }),
      );
      router.push('/');
    } else {
      setError('Invalid credentials. Use admin / admin.');
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070910] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-10%] h-72 w-72 rounded-full bg-[#2f2b52] blur-[120px] opacity-70" />
        <div className="absolute right-[-10%] top-1/4 h-80 w-80 rounded-full bg-[#c68d38] blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(198,141,56,0.12),transparent_40%),linear-gradient(145deg,rgba(22,22,28,0.92),rgba(9,11,18,0.95))]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-1 lg:px-6 py-16 lg:flex lg:min-h-screen lg:items-center lg:justify-center">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-16">
          <section className="space-y-6 lg:w-1/2">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_0_8px_rgba(255,201,91,0.08)]" />
              BlessChain Access
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Sign in to your secured
                <span className="block text-amber-200">BlessChain workspace</span>
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
                Connect to your dashboard, manage tokens, and keep your activity in sync across the BlessChain
                network with enterprise-grade protection.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#161b2b] to-[#0c0f1a] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.14em] text-gray-400">Instant access</p>
                <p className="mt-2 text-2xl font-semibold text-white">Single-step login</p>
                <p className="mt-1 text-sm text-gray-400">Use admin / admin to preview</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-xl lg:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur-lg">
              <div className="mb-6 space-y-2">
                <p className="text-sm uppercase tracking-[0.16em] text-gray-400">Account login</p>
                <p className="text-lg text-gray-300">Continue with your credentials to access the console.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-[0.14em] text-gray-400">Email / Username</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/15 bg-[#0b0e17] px-4 py-3.5 text-white placeholder:text-gray-500 outline-none ring-0 transition focus:border-amber-300 focus:bg-[#0f1320] focus:shadow-[0_0_0_4px_rgba(255,201,91,0.15)]"
                    placeholder="admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-[0.14em] text-gray-400">Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-white/15 bg-[#0b0e17] px-4 py-3.5 text-white placeholder:text-gray-500 outline-none ring-0 transition focus:border-amber-300 focus:bg-[#0f1320] focus:shadow-[0_0_0_4px_rgba(255,201,91,0.15)]"
                    placeholder="admin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="rounded-lg border border-red-400/30 bg-red-900/30 px-3 py-2 text-sm text-red-300">{error}</p>
                )}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c68d38] to-[#f2c861] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b0d14] shadow-[0_20px_40px_rgba(198,141,56,0.35)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300/70 focus:ring-offset-2 focus:ring-offset-[#070910]"
                >
                  Login to console
                </button>
              </form>

              <div className="mt-6 flex flex-col gap-3 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/forgot-password" className="transition hover:text-amber-200">
                  Forgot password?
                </Link>
                <Link href="/signup" className="font-semibold text-amber-200 transition hover:text-amber-100">
                  Create an account
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

LoginPage.noChrome = true;

export default LoginPage;
