import React from 'react';
import PageShell from '@/components/common/PageShell';

const IntroductionPage = () => (
  <PageShell
    eyebrow="Docs"
    title="Introduction to BlessChain"
    description="Learn the vision, core principles, and high-level architecture of BlessChain before diving into detailed guides."
  >
    <div className="space-y-3 rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Highlights:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Energy-efficient blockchain designed for real-world utility.</li>
        <li>Family-friendly validator nodes with Sabbath mode for reduced energy use.</li>
        <li>AI-integrated application layer through the BlessAI System.</li>
      </ul>
    </div>
  </PageShell>
);

export default IntroductionPage;
