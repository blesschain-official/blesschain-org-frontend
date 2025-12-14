import React from 'react';
import PageShell from '@/components/common/PageShell';

const faqs = [
  {
    q: 'What makes BlessChain energy-efficient?',
    a: 'Optimized consensus, hardware profiles, and Sabbath mode reduce energy use while maintaining security.',
  },
  {
    q: 'How does BlessChain integrate AI?',
    a: 'AI workloads anchor to the chain for verification and credits, while apps like BlessAI leverage on-chain data.',
  },
  {
    q: 'Where do I get support?',
    a: 'Join the community channels (Telegram, Discord) or contact the team via the contact page.',
  },
];

const FAQPage = () => (
  <PageShell eyebrow="Docs" title="FAQ" description="Answers to common questions about BlessChain, nodes, and the BlessAI System.">
    <div className="space-y-4">
      {faqs.map((item) => (
        <div key={item.q} className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{item.q}</p>
          <p className="mt-2">{item.a}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default FAQPage;
