import React from 'react';
import PageShell from '@/components/common/PageShell';

const PalletsDocumentation = () => (
  <PageShell
    eyebrow="Developer"
    title="Pallets Documentation"
    description="Reference for core and custom pallets available in the BlessChain runtime."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Functionality overview and storage items.</li>
        <li>Events, errors, and extrinsics.</li>
        <li>Configuration parameters and hooks.</li>
      </ul>
    </div>
  </PageShell>
);

export default PalletsDocumentation;
