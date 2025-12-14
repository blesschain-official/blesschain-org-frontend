import React from 'react';
import PageShell from '@/components/common/PageShell';

const ChapterOne = () => (
  <PageShell
    eyebrow="Whitepaper"
    title="Chapter 1 – Vision"
    description="BlessChain&apos;s mission, north star, and the problems it solves for sustainable, AI-ready blockchain infrastructure."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Outline:</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>Purpose of BlessChain and BlessAI System.</li>
        <li>Design principles: sustainability, accessibility, verifiable AI workloads.</li>
        <li>Real-world utility focus with community-driven governance.</li>
      </ul>
    </div>
  </PageShell>
);

export default ChapterOne;
