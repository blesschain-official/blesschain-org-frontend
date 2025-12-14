import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessVideo = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessVideo"
    description="Video tools and streaming integrations aligned with BlessChain identity and analytics."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>On-chain verified streams and access control.</li>
        <li>Analytics tied to wallet identity and engagement.</li>
        <li>Support for AI-powered content tagging.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessVideo;
