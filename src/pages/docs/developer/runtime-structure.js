import React from 'react';
import PageShell from '@/components/common/PageShell';

const RuntimeStructure = () => (
  <PageShell
    eyebrow="Developer"
    title="Runtime Structure"
    description="Understand the runtime composition, core pallets, and upgrade pathways for BlessChain."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Runtime modules and dependency graph.</li>
        <li>Upgrade cadence and governance approvals.</li>
        <li>Patterns for extending functionality safely.</li>
      </ul>
    </div>
  </PageShell>
);

export default RuntimeStructure;
