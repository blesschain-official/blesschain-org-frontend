import React from 'react';
import Button from '@/components/common/Button';

const featureList = [
  {
    title: 'AI Menu Creation',
    description: 'Upload food photos and BlessMenu detects names, descriptions, allergens, and categories instantly.',
  },
  {
    title: 'Auto Pricing & Cost',
    description: 'AI suggests prices using cost, margin targets, and market signals so teams stay profitable.',
  },
  {
    title: 'Multi-Language Generation',
    description: 'Instant translations for English, Chinese, French, and Spanish to serve every market.',
  },
  {
    title: 'Digital Menu Display',
    description: 'Publish beautiful menus across websites, tablets, kiosks, and QR ordering with one click.',
  },
  {
    title: 'Ingredient & Allergen Detection',
    description: 'AI flags allergens, ingredients, and nutrition estimates to keep guests informed.',
  },
  {
    title: 'Multi-Store Menu Sync',
    description: 'All locations stay synchronized in seconds across BlessAI System and every channel.',
  },
];

const channelList = ['POS', 'QR Code menus', 'Online ordering pages', 'Delivery platforms', 'Restaurant tablets', 'BlessOrder sales system'];

const industryUseCases = [
  { title: 'Restaurants', points: ['AI auto-generate menus from photos', 'Multi-language tourist menus'] },
  { title: 'Cafes', points: ['Price updates across multiple stores'] },
  { title: 'Retail / Grocery', points: ['Product tagging & classification', 'Ingredient list automation'] },
  { title: 'Cloud Kitchens / Delivery', points: ['Sync menu → order → delivery → feedback'] },
];

const screenshotPlaceholders = [
  'Photo-to-menu generator',
  'Digital menu display',
  'Category editing',
  'POS menu sync screen',
];

const BlessMenuPage = () => {
  return (
    <main className="bg-[#0E0E12] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0E12] via-[#0C101C] to-[#0B0E19] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-60 blur-3xl">
          <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-amber-400/30" />
          <div className="absolute right-10 top-28 h-48 w-48 rounded-full bg-amber-200/20" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">BlessMenu — AI Smart Menu & Retail Management</p>
            <h1 className="text-4xl font-semibold text-[#f6f0dd] sm:text-5xl">AI Smart Menu & Retail Management</h1>
            <p className="max-w-3xl text-lg text-[#d6d0c0]">
              Transform menu creation, item management, pricing, and retail operations using powerful AI automation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/blessai/menu">Try BlessMenu</Button>
            <Button href="/blessai" variant="secondary">Explore BlessAI System</Button>
            <Button href="/blessai/order" variant="ghost">Connect With BlessOrder</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Menu cards', 'AI scans food photos', 'Golden glow behind food icons'].map((item) => (
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

      {/* What is BlessMenu */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">What Is BlessMenu?</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Your Menu, Reimagined with AI</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessMenu is an AI-driven menu and product management system for restaurants, cafes, retail shops, and multi-branch businesses.
              It creates, updates, and synchronizes menus across POS, delivery apps, websites, and internal systems.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Menu creation', 'Price updates', 'Ingredient tracking', 'Item categorization', 'Multi-language display'].map((item) => (
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

      {/* Key Features */}
      <section className="bg-[#0E0E12] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Key Features</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">AI + Menu System Capabilities</h2>
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

      {/* AI Vision */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">AI Vision</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Turn Photos Into Complete Menus</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessMenu’s AI Vision engine analyzes food images and automatically generates names, descriptions, tags, allergens, suggested
              pricing, and inventory links. Upload images → AI detects items → Auto menu generated → Sync to BlessOrder & POS.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Item names', 'Descriptions', 'Tags & categories', 'Allergens', 'Suggested pricing', 'Inventory linkage'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#e7e1d3]"
              >
                {item}
              </span>
            ))}
          </div>
          <div>
            <Button href="/blessai/menu" variant="secondary">Try Photo-to-Menu Demo</Button>
          </div>
        </div>
      </section>

      {/* Multi-Channel */}
      <section className="bg-[#0E0E12] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Multi-Channel Sync</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">One Menu. Everywhere. Instantly.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {channelList.map((channel) => (
              <div key={channel} className="rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]">
                {channel}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#c9c5b6]">Every update syncs globally in seconds.</p>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Integration with BlessAI System</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Perfectly Connected to BlessOrder & BlessShipping</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessMenu works as part of the full BlessAI System: sends menu items and product data to BlessOrder, syncs stock and ingredients
              with BlessERP, sends orders directly to BlessShipping, and tracks customer behavior inside BlessCRM. BlessMenu becomes a complete
              AI business engine for restaurants and retail.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Sends menu items & product data to BlessOrder',
              'Syncs stock and ingredients with BlessERP',
              'Sends orders directly to BlessShipping for delivery',
              'Tracks customer behavior inside BlessCRM',
            ].map((item) => (
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
              <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">See BlessMenu in Action</h2>
              <p className="text-sm text-[#c9c5b6] max-w-2xl">
                Preview the key workflows — from photo-to-menu generation to synchronized digital displays. Replace each placeholder below with your product UI.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact" variant="secondary">Request Demo</Button>
              <Button href="/blessai/menu" variant="ghost">Download Spec</Button>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Hero Highlight</p>
                  <p className="mt-2 text-sm text-[#c9c5b6]">Use this wide slot for your marquee screenshot or a short looping demo.</p>
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
          <p className="text-xs text-[#8f8b7f]">(如果你需要，我可以生成 BlessMenu UI mockups)</p>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="bg-[#0B0E19] py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Industry Use Cases</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Where BlessMenu Delivers</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industryUseCases.map((block) => (
              <div key={block.title} className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{block.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-[#d6d0c0]">
                  {block.points.map((point) => (
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
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Create Smarter Menus With AI</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-4xl">Create Smarter Menus With AI</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/blessai/menu">Try BlessMenu</Button>
            <Button href="/blessai/order" variant="secondary">Explore BlessOrder</Button>
            <Button href="/blessai/menu" variant="ghost">Try Photo-to-Menu Generator</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlessMenuPage;
