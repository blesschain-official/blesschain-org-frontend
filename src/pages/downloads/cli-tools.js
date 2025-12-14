import React from 'react';
import PageShell from '@/components/common/PageShell';

const CliTools = () => (
  <PageShell
    eyebrow="Downloads"
    title="CLI Tools"
    description="Command-line utilities for interacting with BlessChain nodes and services."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>blesschain-cli for node management and queries.</li>
        <li>Checksum files and install scripts.</li>
        <li>Examples for staking, transfers, and diagnostics.</li>
      </ul>
    </div>
  </PageShell>
);

export default CliTools;
