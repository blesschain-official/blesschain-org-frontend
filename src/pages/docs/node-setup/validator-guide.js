import React from 'react';
import PageShell from '@/components/common/PageShell';

const ValidatorGuide = () => (
  <PageShell
    eyebrow="Node Setup"
    title="Validator Guide"
    description="Operational best practices for running a validator on BlessChain with uptime, security, and reward guidance."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Key management, backups, and rotation strategies.</li>
        <li>Monitoring metrics and alerting thresholds.</li>
        <li>Slashing avoidance and upgrade procedures.</li>
      </ul>
    </div>
  </PageShell>
);

export default ValidatorGuide;
