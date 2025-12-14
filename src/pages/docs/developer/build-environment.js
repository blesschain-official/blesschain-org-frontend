import React from 'react';
import PageShell from '@/components/common/PageShell';

const BuildEnvironment = () => (
  <PageShell
    eyebrow="Developer"
    title="Build Environment"
    description="Set up your local and CI environments for developing on BlessChain."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Toolchains, compilers, and SDKs.</li>
        <li>Recommended testing frameworks and fixtures.</li>
        <li>CI/CD pipeline suggestions for runtime and dApps.</li>
      </ul>
    </div>
  </PageShell>
);

export default BuildEnvironment;
