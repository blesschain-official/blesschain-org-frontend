import React from 'react';
import PageShell from '@/components/common/PageShell';

const VotingCommunityGovernance = () => (
  <PageShell
    eyebrow="Governance"
    title="Voting / Community Governance"
    description="Processes for proposals, voting, and community decision-making on BlessChain."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Proposal submission and review stages.</li>
        <li>Voting mechanisms and quorum rules.</li>
        <li>Transparency, accountability, and dispute handling.</li>
      </ul>
    </div>
  </PageShell>
);

export default VotingCommunityGovernance;
