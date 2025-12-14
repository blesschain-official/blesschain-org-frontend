import React from 'react';
import Link from 'next/link';
import PageShell from '@/components/common/PageShell';

const linkClass = 'block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3] hover:border-amber-300';

const DownloadsIndex = () => (
  <PageShell
    eyebrow="Downloads"
    title="BlessChain Downloads"
    description="Grab node binaries, genesis files, whitepapers, and CLI tools to build and operate on BlessChain."
  >
    <div className="grid gap-3 sm:grid-cols-2">
      <Link href="/downloads/node" className={linkClass}>
        BlessChain Node (binary releases)
      </Link>
      <Link href="/downloads/genesis" className={linkClass}>
        Genesis Config files
      </Link>
      <Link href="/downloads/whitepaper" className={linkClass}>
        BlessChain Whitepaper PDF
      </Link>
      <Link href="/downloads/cli-tools" className={linkClass}>
        CLI tools
      </Link>
    </div>
  </PageShell>
);

export default DownloadsIndex;
