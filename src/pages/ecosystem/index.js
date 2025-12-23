import React from 'react';
import Link from 'next/link';
import PageShell from '@/components/common/PageShell';

const linkClass = 'block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3] hover:border-amber-300';

const EcosystemIndex = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessChain Ecosystem"
    description="Discover products and services built around BlessChain, spanning hosting, management, and AI-powered media."
  >
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { href: '/ecosystem/blesshosting', label: 'BlessHosting' },
        { href: '/ecosystem/blesspanel', label: 'BlessPanel' },
        { href: '/ecosystem/blessvoice', label: 'BlessVoice' },
        { href: '/ecosystem/blessvideo', label: 'BlessVideo' },
        { href: '/ecosystem/blessaivideo', label: 'BlessAIVideo' },
        { href: '/ecosystem/blesswallet', label: 'BlessWallet' },
        { href: '/ecosystem/blessanalytics', label: 'BlessAnalytics' },
      ].map((item) => (
        <Link key={item.href} href={item.href} className={linkClass}>
          {item.label}
        </Link>
      ))}
    </div>
  </PageShell>
);

export default EcosystemIndex;
