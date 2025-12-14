import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessPanel = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessPanel"
    description="Control panel for managing BlessChain nodes, monitoring, and deployments through a simple UI."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Node lifecycle management and metrics.</li>
        <li>Access controls and audit logs.</li>
        <li>One-click upgrades with version pinning.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessPanel;
