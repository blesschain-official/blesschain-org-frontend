import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessVoice = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessVoice"
    description="Voice-driven interfaces and assistants powered by BlessChain data and AI inference."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Voice queries for blockchain stats and account insights.</li>
        <li>Integration with BlessAI apps for workflows.</li>
        <li>Secure authentication and audit trails.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessVoice;
