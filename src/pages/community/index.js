import React from 'react';
import Link from 'next/link';
import PageShell from '@/components/common/PageShell';

const linkClass = 'block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3] hover:border-amber-300';

const CommunityIndex = () => (
  <PageShell
    eyebrow="Community"
    title="Join the BlessChain Community"
    description="Connect with us across Telegram, X, Discord, and YouTube for updates, support, and events."
  >
    <div className="grid gap-3 sm:grid-cols-2">
      <Link href="/community/telegram" className={linkClass}>
        Telegram
      </Link>
      <Link href="/community/x" className={linkClass}>
        X (Twitter)
      </Link>
      <Link href="/community/discord" className={linkClass}>
        Discord
      </Link>
      <Link href="/community/youtube" className={linkClass}>
        YouTube
      </Link>
    </div>
  </PageShell>
);

export default CommunityIndex;
