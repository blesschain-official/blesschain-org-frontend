import React from 'react';

const WorkflowSection = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">End-to-End Delivery Workflow</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">From Order Creation to Final Delivery — Fully Automated</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <pre className="whitespace-pre-wrap font-mono text-sm text-[#e7e1d3]">
{`New Order (from BlessOrder)
     ↓
Warehouse Pick & Pack
     ↓
Task Created in BlessShipping
     ↓
AI Assigns Driver Automatically
     ↓
Route Optimization Engine
     ↓
Delivery in Progress (Live Tracking)
     ↓
Completion & Customer Notification
     ↓
Data Sync Back to BlessOrder Dashboard`}
          </pre>
          <p className="mt-3 text-sm text-[#c9c5b6]">
            BlessShipping removes manual steps and ensures smooth order fulfillment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
