import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessWallet = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessWallet"
    description="Self-custody wallet for BlessChain with built-in recovery options and multi-device sync."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-2">
      <p>Stay in control of keys while keeping everyday flows simple.</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Multi-sig and social recovery options for team accounts.</li>
        <li>Biometric unlock on mobile with hardware key fallback.</li>
        <li>Portfolio view with real-time balance alerts.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessWallet;
