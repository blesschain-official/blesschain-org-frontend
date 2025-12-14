import React from 'react';
import PageShell from '@/components/common/PageShell';

const ChapterTwo = () => (
  <PageShell
    eyebrow="Whitepaper"
    title="Chapter 2 – Architecture"
    description="Technical architecture of BlessChain, including consensus, networking, and runtime design."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Outline:</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>Consensus model and energy optimizations.</li>
        <li>Runtime modules and extensibility.</li>
        <li>AI workload anchoring and data availability considerations.</li>
      </ul>
    </div>
  </PageShell>
);

export default ChapterTwo;
