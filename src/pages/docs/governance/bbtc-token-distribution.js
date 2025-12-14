import React from 'react';
import PageShell from '@/components/common/PageShell';

const BbtcTokenDistribution = () => (
  <PageShell
    eyebrow="Governance"
    title="BBTC Token Distribution"
    description="Overview of BBTC allocation, release schedules, and governance participation."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Foundational allocations and vesting.</li>
        <li>Community, validator, and developer pools.</li>
        <li>Emission and sustainability considerations.</li>
      </ul>
    </div>
  </PageShell>
);

export default BbtcTokenDistribution;
