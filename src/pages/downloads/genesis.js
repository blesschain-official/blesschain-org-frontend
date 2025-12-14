import React from 'react';
import PageShell from '@/components/common/PageShell';

const GenesisDownloads = () => (
  <PageShell
    eyebrow="Downloads"
    title="Genesis Config Files"
    description="Download genesis configuration files for BlessChain testnet and mainnet."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Testnet genesis JSON and peer list.</li>
        <li>Mainnet genesis (available at launch).</li>
        <li>Instructions for verifying hashes.</li>
      </ul>
    </div>
  </PageShell>
);

export default GenesisDownloads;
