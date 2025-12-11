import React from 'react';

const points = [
  'Syncs orders from BlessOrder',
  'Syncs inventory & warehouse data from BlessERP',
  'Provides customer delivery updates to BlessCRM',
  'Supports AI-powered menu logistics from BlessMenu (for food delivery)',
];

const IntegrationSection = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Integration with BlessAI System</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Connected with the Entire BlessAI Ecosystem</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessShipping is deeply integrated into the BlessAI System:
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
        <p className="text-sm text-[#c9c5b6]">
          This unified connection provides a full operational pipeline.
        </p>
      </div>
    </section>
  );
};

export default IntegrationSection;
