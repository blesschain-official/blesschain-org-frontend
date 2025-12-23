import React from 'react';
import PageShell from '@/components/common/PageShell';

const BlessAnalytics = () => (
  <PageShell
    eyebrow="Ecosystem"
    title="BlessAnalytics"
    description="Observability and intelligence for BlessChain apps with real-time dashboards and alerts."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-2">
      <p>Ship faster with live metrics and proactive insights.</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Trace transactions end-to-end with latency breakdowns.</li>
        <li>Health checks with anomaly detection and pager hooks.</li>
        <li>Usage analytics by network, device, and geography.</li>
      </ul>
    </div>
  </PageShell>
);

export default BlessAnalytics;
