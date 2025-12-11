import React from 'react';

const WhatIsBlessShipping = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">What Is BlessShipping?</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Smart Logistics for a Faster, More Efficient Business</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessShipping is an AI-enhanced logistics management system that connects orders, inventory, warehouse operations, and delivery tasks.
            It ensures packages move to the right place, at the right time, with minimum manual effort.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-[#e7e1d3]">
          {['Retailers', 'Restaurants', 'Warehouses', 'Delivery companies', 'Multi-location businesses'].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsBlessShipping;
