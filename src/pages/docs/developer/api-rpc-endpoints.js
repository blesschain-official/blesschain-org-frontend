import React from 'react';
import PageShell from '@/components/common/PageShell';

const ApiRpcEndpoints = () => (
  <PageShell
    eyebrow="Developer"
    title="API & RPC Endpoints"
    description="Catalog of RPC, REST, and websocket endpoints for building on BlessChain."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <ul className="list-disc space-y-2 pl-5">
        <li>Public RPC endpoints and rate guidance.</li>
        <li>Key queries for blocks, state, and logs.</li>
        <li>API examples for integrating with BlessAI apps.</li>
      </ul>
    </div>
  </PageShell>
);

export default ApiRpcEndpoints;
