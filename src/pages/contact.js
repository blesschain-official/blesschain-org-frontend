import React from 'react';
import Button from '@/components/common/Button';

const contactMethods = [
  {
    title: 'Partnerships',
    detail: 'Integrations, pilots, and validator partners.',
    badge: 'Ecosystem',
    action: 'partners@blesschain.org',
  },
  {
    title: 'Product & Support',
    detail: 'Questions about BlessAI apps or roadmap.',
    badge: 'Product',
    action: 'product@blesschain.org',
  },
  {
    title: 'Press & Media',
    detail: 'Press kits, interviews, and speaking.',
    badge: 'Media',
    action: 'press@blesschain.org',
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 12% 18%, rgba(255,191,87,0.08), transparent 30%), radial-gradient(circle at 88% 10%, rgba(92,167,255,0.1), transparent 32%)',
          }}
        />

        <section className="relative container mx-auto px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-300/70" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Contact</p>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#f6f0dd]">
                  Speak with the BlessChain team
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl">
                  We work directly with builders, operators, and partners to deploy AI + blockchain solutions for real
                  businesses. Tell us what you need — we will reply within one business day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:hello@blesschain.org" className="px-7">
                  Email us
                </Button>
                <Button href="/downloads" variant="secondary" className="px-7">
                  Download deck
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Response time', value: '< 24 hours' },
                  { label: 'Timezone', value: 'UTC + team distributed' },
                  { label: 'Support', value: 'Dedicated onboarding' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-[#f6f0dd]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a]/70 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur lg:mb-0">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(92,167,255,0.12),transparent_40%)]" />
              <form className="relative space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 mb-2">
                  <label className="space-y-3">
                    <span className="text-sm text-[#e7e1d3] mb-2">Full name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-amber-300 focus:outline-none"
                    />
                  </label>
                  <label className="space-y-3">
                    <span className="text-sm text-[#e7e1d3] mb-2">Work email</span>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-amber-300 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="space-y-3">
                    <span className="text-sm text-[#e7e1d3] mb-2">Company / Project</span>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-amber-300 focus:outline-none"
                    />
                  </label>
                  <label className="space-y-3">
                    <span className="text-sm text-[#e7e1d3] mb-2">Topic</span>
                    <select
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-amber-300 focus:outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0b0f1a] text-gray-400">
                        Choose a topic
                      </option>
                      <option className="bg-[#0b0f1a]">Partnership</option>
                      <option className="bg-[#0b0f1a]">Product question</option>
                      <option className="bg-[#0b0f1a]">Validator</option>
                      <option className="bg-[#0b0f1a]">Press / Media</option>
                    </select>
                  </label>
                </div>
                <label className="space-y-3">
                  <span className="text-sm text-[#e7e1d3]">What do you want to achieve?</span>
                  <textarea
                    rows="4"
                    placeholder="Share a bit about your goals and timelines."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-amber-300 focus:outline-none"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" className="px-7">
                    Send message
                  </Button>
                  <p className="text-sm text-gray-400">We respond within one business day.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 pb-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Direct Lines</p>
              <h2 className="text-2xl font-semibold text-[#f6f0dd]">Choose the right path</h2>
              <div className="space-y-3">
                {contactMethods.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_16px_38px_rgba(0,0,0,0.35)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">{item.badge}</p>
                        <h3 className="text-lg font-semibold text-[#f6f0dd]">{item.title}</h3>
                      </div>
                      <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                        Priority lane
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">{item.detail}</p>
                    <div className="mt-3 text-sm font-semibold text-[#f6f0dd]">{item.action}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,87,0.08),transparent_38%)] pointer-events-none" />
              <div className="absolute top-4 left-4 z-10 rounded-full border border-white/10 bg-[#0b0f1a]/80 px-3 py-1 text-xs font-semibold text-[#f6f0dd]">
                Find us
              </div>
              <div className="relative h-[420px] w-full overflow-hidden">
                <iframe
                  title="BlessChain HQ Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991337044!2d-74.2598655!3d40.6971494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1717632000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute bottom-4 left-4 z-10 space-y-1 rounded-2xl border border-white/10 bg-[#0b0f1a]/80 px-4 py-3 text-sm text-gray-300 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  Global remote, core in NYC
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Onsite meetings by request
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
