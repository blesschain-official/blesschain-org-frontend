import React from 'react';
import PageShell from '@/components/common/PageShell';

const JoinTestnet = () => (
  <PageShell
    eyebrow="Node Setup"
    title="Join Testnet"
    description="Instructions for connecting to the BlessChain testnet, syncing, and participating as a community validator."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ol className="list-decimal space-y-2 pl-5">
        <li>Download testnet genesis and peer list.</li>
        <li>Configure bootnodes and telemetry endpoints.</li>
        <li>Start the node and confirm block synchronization.</li>
        <li>Join the community channels for updates.</li>
      </ol>
    </div>
  </PageShell>
);

export default JoinTestnet;
