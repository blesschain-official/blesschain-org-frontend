import React from 'react';
import Button from '@/components/common/Button';

const points = [
  'Immutable delivery timestamps',
  'Verified handoff records',
  'BBTC-based micro-fees for AI processing',
  'Proof of route completion',
];

const BlockchainSection = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Optional Blockchain Integration</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Delivery Transparency Powered by BlessChain</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessShipping optionally anchors delivery logs, routes, and timestamps into BlessChain. This creates transparent proof of delivery and can reduce disputes.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {points.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
            >
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
              {item}
            </div>
          ))}
        </div>
        <div>
          <Button href="/">Learn About BlessChain</Button>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
