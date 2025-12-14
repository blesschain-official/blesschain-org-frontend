import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessAIVideo = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessAIVideo"
    description="AI-generated and AI-enhanced video experiences that integrate with BlessChain identity and rewards."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Automated video creation tailored to customer segments.</li>
        <li>On-chain verification of media provenance.</li>
        <li>Incentive hooks for creators and communities.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessAIVideo;
