import React from 'react';
import PageShell from '@/components/common/PageShell';

const MissionPoolModel = () => (
  <PageShell
    eyebrow="Governance"
    title="Mission Pool Model"
    description="How the Mission Pool incentivizes ecosystem contributions and aligns community goals."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Funding streams and eligibility.</li>
        <li>Proposal lifecycle and approvals.</li>
        <li>Measuring impact and ongoing accountability.</li>
      </ul>
    </div>
  </PageShell>
);

export default MissionPoolModel;
