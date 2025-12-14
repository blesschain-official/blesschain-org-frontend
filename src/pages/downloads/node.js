import React from 'react';
import PageShell from '@/components/common/PageShell';

const NodeDownloads = () => (
  <PageShell
    eyebrow="Downloads"
    title="BlessChain Node Releases"
    description="Download stable and testnet binaries for BlessChain nodes."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Latest mainnet binary (coming soon).</li>
        <li>Latest testnet binary with checksum.</li>
        <li>Upgrade notes and changelog links.</li>
      </ul>
    </div>
  </PageShell>
);

export default NodeDownloads;
