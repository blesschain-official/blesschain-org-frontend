import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessHosting = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessHosting"
    description="Managed hosting tailored for BlessChain nodes and services, with reliability and energy-aware profiles."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Pre-configured node images and monitoring.</li>
        <li>Auto-updates with safe rollbacks.</li>
        <li>Support for testnet and mainnet environments.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessHosting;
