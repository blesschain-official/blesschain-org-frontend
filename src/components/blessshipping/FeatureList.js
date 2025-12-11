import React from 'react';

const features = [
  { title: 'Automatic Driver Assignment', copy: 'AI detects available drivers, workload, and proximity to assign tasks instantly.' },
  { title: 'Route Optimization', copy: 'Smart routing reduces travel time and fuel costs while improving customer satisfaction.' },
  { title: 'Real-Time Package Tracking', copy: 'Monitor the status, current location, and ETA of every parcel.' },
  { title: 'AI Delivery Predictions', copy: 'Estimate delays, identify risks, and generate delivery-time forecasts.' },
  { title: 'Warehouse → Driver Automation', copy: 'Automatically creates routes based on orders processed in BlessOrder.' },
  { title: 'Customer Notifications', copy: 'Automatically sends SMS or email updates for package status.' },
];

const FeatureList = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Key Features</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">AI-Driven Logistics Capabilities</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
              <p className="text-lg font-semibold text-[#f6f0dd]">{item.title}</p>
              <p className="mt-2 text-sm text-[#d9d4c6]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
