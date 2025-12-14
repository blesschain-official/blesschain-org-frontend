import React from 'react';
import Button from '@/components/common/Button';

const featureList = [
  {
    title: 'Real-Time Inventory Tracking',
    description: 'See stock levels across every warehouse and store in one view with instant updates.',
  },
  {
    title: 'AI-Powered Cost Calculation',
    description: 'AI reads invoices, detects cost changes, and recalculates profit margins automatically.',
  },
  {
    title: 'Unified Accounting',
    description: 'Sales, expenses, invoices, and statements sync automatically for clean books.',
  },
  {
    title: 'Multi-Warehouse Inventory',
    description: 'Control transfers, warehouse buffers, and replenishment cycles without spreadsheets.',
  },
  {
    title: 'Supplier & Purchase Management',
    description: 'Track suppliers, purchase orders, and cost histories with audit-ready detail.',
  },
  {
    title: 'Auto Replenishment',
    description: 'AI predicts low stock and drafts or auto-creates purchase orders for you.',
  },
];

const integrationPoints = [
  'BlessOrder → Syncs sales → stock deductions → accounting entries',
  'BlessMenu → Syncs ingredients, costs, allergens, menu items',
  'BlessShipping → Syncs delivery stock, packaging materials, warehouse availability',
  'BlessCRM → Pulls customer-level cost & profitability data',
];

const blockchainAnchors = [
  'Invoices',
  'Purchase records',
  'Cost-change logs',
  'Accountant audits',
  'Tax statements',
];

const useCases = [
  { title: 'Retail', bullets: ['Multi-branch inventory', 'Supplier management'] },
  { title: 'Restaurants', bullets: ['Ingredient cost tracking', 'Menu cost analysis'] },
  { title: 'Warehousing', bullets: ['Centralized purchase → multi-store distribution'] },
  { title: 'Online Sellers', bullets: ['Stock sync with Blessed eCommerce (future)'] },
];

const screenshotPlaceholders = [
  'Inventory dashboard',
  'Profit analysis screen',
  'Supplier order management',
  'Accounting synchronization page',
];

const BlessERPPage = () => {
  return (
    <main className="bg-[#0E0E12] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0E12] via-[#0C101C] to-[#0B0E19] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-60 blur-3xl">
          <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-amber-400/30" />
          <div className="absolute right-10 top-24 h-52 w-52 rounded-full bg-amber-200/20" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">BlessERP — AI ERP for Modern Businesses</p>
            <h1 className="text-4xl font-semibold text-[#f6f0dd] sm:text-5xl">Intelligent Inventory & Accounting Management</h1>
            <p className="max-w-3xl text-lg text-[#d6d0c0]">
              Gain full control of stock, costs, suppliers, and accounting through an AI-powered, fully connected ERP platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/blessai/erp">Try BlessERP</Button>
            <Button href="/blessai" variant="secondary">Explore BlessAI System</Button>
            <Button href="/blessai/order" variant="ghost">Connect With BlessOrder</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Dashboard mockup', 'Cost analysis chart', 'Golden AI beam background'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#e7e1d3] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is BlessERP */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">What Is BlessERP?</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">A Complete AI ERP for Inventory, Costs, and Accounting</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessERP is the operational engine behind the BlessAI System. It manages inventory, accounting, suppliers, cost structures, and
              warehouse operations — all with AI automation and real-time synchronization.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Accurate stock', 'Clean accounting', 'Consistent margins', 'Predictable cashflow', 'Cross-store consistency'].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
              >
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Retail', 'Restaurants', 'Warehousing', 'Distribution', 'Cloud kitchens', 'Multi-location businesses'].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#0E0E12] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Key Features</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Inventory + Accounting, Reimagined</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureList.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{feature.title}</p>
                <p className="mt-2 text-sm text-[#d6d0c0]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Driven Cost & Profit */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">AI-Driven Cost & Profit Intelligence</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Know Your True Costs. Maximize Your Profit.</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessERP reads supplier invoices, detects cost changes, suggests optimal selling prices, and alerts hidden cost increases. It
              auto-updates menu cost in BlessMenu and margins in BlessOrder, keeping your financial picture predictable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'AI reads supplier invoices',
              'Detects changes in cost price',
              'Suggests optimal selling prices',
              'Alerts hidden cost increases',
              'Auto-updates menu cost in BlessMenu',
              'Auto-updates sales margins in BlessOrder',
            ].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#e7e1d3]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Warehouse */}
      <section className="bg-[#0E0E12] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Multi-Warehouse & Multi-Store</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Coordinate All Your Locations With Ease</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessERP brings unified management across every location. Manage multiple warehouses, branches, transfers, shared inventory,
              centralized purchasing, and branch-level restrictions without friction.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Multiple warehouses', 'Multiple store branches', 'Stock transfers', 'Shared inventory', 'Centralized purchasing', 'Branch-level restrictions'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Integration with BlessAI System</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">The Data Heart of BlessAI System</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessERP is the foundation that keeps every module accurate. It syncs sales, stock, ingredients, delivery materials, and
              profitability signals across the entire suite.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {integrationPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
              >
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Layer */}
      <section className="bg-[#0E0E12] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Optional Blockchain Layer</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Accounting Transparency With BlessChain</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessERP can anchor invoices, purchases, and audits into BlessChain for immutable verification — protecting against fraud and
              ensuring trusted audits.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {blockchainAnchors.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]">
                {item}
              </div>
            ))}
          </div>
          <div>
            <Button href="/" variant="secondary">Learn About BlessChain</Button>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0E12] to-[#0B0E19] py-16">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-amber-300/30" />
          <div className="absolute right-10 bottom-12 h-40 w-40 rounded-full bg-amber-200/25" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Screenshots / Demo</p>
              <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">See BlessERP in Action</h2>
              <p className="text-sm text-[#c9c5b6] max-w-2xl">
                Preview key workflows — inventory visibility, profit analysis, supplier orders, and accounting sync. Replace placeholders with your UI.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact" variant="secondary">Request Demo</Button>
              <Button href="/blessai/erp" variant="ghost">Download Spec</Button>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Hero Highlight</p>
                  <p className="mt-2 text-sm text-[#c9c5b6]">Use this wide slot for your marquee dashboard or a short looping demo.</p>
                </div>
                <span className="rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Recommended
                </span>
              </div>
              <div className="mt-4 h-64 rounded-xl border border-dashed border-white/15 bg-white/5" />
            </div>
            <div className="space-y-4">
              {screenshotPlaceholders.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-dashed border-white/15 bg-[#111525] p-5 text-sm text-[#c9c5b6] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{item}</p>
                  <p className="mt-2 text-[13px] text-[#a7a291]">Drop in a static screen or animated GIF for this flow.</p>
                  <div className="mt-3 h-32 rounded-xl border border-white/10 bg-white/5" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#8f8b7f]">(I can generate BlessERP UI mockups too if you choose)</p>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Industry Use Cases</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Where BlessERP Delivers</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{item.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-[#d6d0c0]">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1A1208] via-[#0E0E12] to-[#1A1208] py-16">
        <div className="absolute inset-0 opacity-50 blur-3xl">
          <div className="absolute left-12 top-4 h-40 w-40 rounded-full bg-amber-400/30" />
          <div className="absolute right-12 bottom-4 h-44 w-44 rounded-full bg-amber-200/25" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Take Control of Your Inventory & Accounting With AI</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-4xl">Take Control of Your Inventory & Accounting With AI</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/blessai/erp">Try BlessERP</Button>
            <Button href="/blessai" variant="secondary">Explore BlessAI System</Button>
            <Button href="/blessai/order" variant="ghost">Connect With BlessOrder</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlessERPPage;
