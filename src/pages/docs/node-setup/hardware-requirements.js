import React from 'react';
import PageShell from '@/components/common/PageShell';

const HardwareRequirements = () => (
  <PageShell
    eyebrow="Node Setup"
    title="Hardware Requirements"
    description="Baseline specs for running a BlessChain node reliably in testnet and mainnet environments."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>CPU, RAM, storage, and bandwidth guidance.</li>
        <li>Recommended OS versions and security hardening tips.</li>
        <li>Energy-efficient configuration suggestions.</li>
      </ul>
    </div>
  </PageShell>
);

export default HardwareRequirements;
