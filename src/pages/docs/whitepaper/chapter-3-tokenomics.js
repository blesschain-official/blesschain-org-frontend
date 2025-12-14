import React from 'react';
import PageShell from '@/components/common/PageShell';

const ChapterThree = () => (
  <PageShell
    eyebrow="Whitepaper"
    title="Chapter 3 – Tokenomics"
    description="Economic model of BBTC and ecosystem incentives powering validators, developers, and AI services."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Outline:</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>BBTC distribution and emission schedules.</li>
        <li>Mission Pool model and community rewards.</li>
        <li>AI service credits and on-chain settlement.</li>
      </ul>
    </div>
  </PageShell>
);

export default ChapterThree;
