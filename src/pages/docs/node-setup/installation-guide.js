import React from 'react';
import PageShell from '@/components/common/PageShell';

const InstallationGuide = () => (
  <PageShell
    eyebrow="Node Setup"
    title="Installation Guide"
    description="Step-by-step walkthrough for installing and configuring a BlessChain node."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ol className="list-decimal space-y-2 pl-5">
        <li>Prepare your environment and dependencies.</li>
        <li>Install binaries or build from source.</li>
        <li>Configure node keys, ports, and sync settings.</li>
        <li>Validate connectivity and monitor logs.</li>
      </ol>
    </div>
  </PageShell>
);

export default InstallationGuide;
