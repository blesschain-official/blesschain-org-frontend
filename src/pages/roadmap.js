import React from 'react';
import Button from '@/components/common/Button';

const timeline = [
  {
    period: 'Q2 2024',
    title: 'BlessChain MVP + Validator Alpha',
    status: 'Complete',
    focus: 'Blockchain',
    items: ['Testnet live with energy-aware blocks', 'Home-friendly validator kit', 'Block explorer preview'],
  },
  {
    period: 'Q4 2024',
    title: 'BlessAI Beta + Commerce Pilots',
    status: 'In Progress',
    focus: 'AI + Apps',
    items: ['BlessOrder beta with real merchants', 'Menu & logistics automation pilots', 'Data anchoring on BlessChain'],
  },
  {
    period: 'H1 2025',
    title: 'BlessOrder Launch & Chain Hardening',
    status: 'Planned',
    focus: 'AI + Blockchain',
    items: ['Public BlessOrder release', 'Performance tuning + dynamic block cadence', 'Security audits + bug bounty'],
  },
  {
    period: 'H2 2025',
    title: 'Mainnet Readiness & Governance',
    status: 'Planned',
    focus: 'Network',
    items: ['BlessChain mainnet candidate', 'Validator rewards + governance basics', 'Ecosystem partner onboarding'],
  },
  {
    period: '2026+',
    title: 'Scale, Automation, Enterprise',
    status: 'Future',
    focus: 'Growth',
    items: ['AI + blockchain automation kits', 'Enterprise integration blueprints', 'Global node footprint expansion'],
  },
];

const aiTrack = [
  {
    title: 'BlessAI Suite',
    period: '2024 → 2025',
    bullets: ['BlessOrder (ERP + Sales)', 'BlessShipping (logistics automation)', 'BlessMenu (retail + menu AI)'],
  },
  {
    title: 'Intelligence Layer',
    period: '2025',
    bullets: ['Predictive demand + routing', 'Agent workflows for ops teams', 'Unified data fabric across apps'],
  },
  {
    title: 'Automation Kits',
    period: '2026',
    bullets: ['No-code flows for SMBs', 'APIs for enterprise systems', 'AI guardrails + audit trails'],
  },
];

const chainTrack = [
  {
    title: 'Network Core',
    period: '2024',
    bullets: ['Energy-aware block production', 'Validator UX for home + data center', 'Sabbath-mode block pause'],
  },
  {
    title: 'Security & Incentives',
    period: '2025',
    bullets: ['Formal audits', 'Bug bounty + chaos testing', 'Reward mechanics with sustainability'],
  },
  {
    title: 'Ecosystem Scale',
    period: '2026',
    bullets: ['Partner validator hubs', 'Data availability & rollup options', 'Global monitoring + observability'],
  },
];

const principles = [
  { title: 'Energy-conscious by design', detail: 'Dynamic block cadence + Sabbath mode to lower footprint.' },
  { title: 'AI + Blockchain as one stack', detail: 'Apps anchor data and proofs directly to BlessChain.' },
  { title: 'Operator-friendly', detail: 'Validators and apps ship with real documentation and tooling.' },
  { title: 'Security-first shipping', detail: 'Independent audits, bounty programs, and staged launches.' },
];

const chipColors = {
  Complete: 'bg-emerald-400/15 text-emerald-200 border-emerald-300/30',
  'In Progress': 'bg-amber-400/15 text-amber-200 border-amber-300/30',
  Planned: 'bg-blue-400/15 text-blue-200 border-blue-300/30',
  Future: 'bg-white/10 text-[#f6f0dd] border-white/15',
};

const RoadmapPage = () => {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 15% 15%, rgba(255,191,87,0.08), transparent 28%), radial-gradient(circle at 85% 12%, rgba(92,167,255,0.09), transparent 30%)',
          }}
        />

        <section className="relative container mx-auto px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-300/70" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Roadmap</p>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#f6f0dd]">
                  Building the BlessChain + BlessAI stack with intent
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl">
                  A single view of how the blockchain foundation and AI application layer ship together — focused on
                  shipping production-ready tools, not hype.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/downloads" className="px-7">Download Deck</Button>
                <Button href="/contact" variant="secondary" className="px-7">
                  Talk to the team
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'AI + Blockchain releases', value: 'Dual track' },
                  { label: 'Focus', value: 'Real business ops' },
                  { label: 'Network stance', value: 'Energy-aware' },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">{card.label}</p>
                    <p className="mt-1 text-lg font-semibold text-[#f6f0dd]">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a]/70 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(92,167,255,0.12),transparent_40%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Now shipping</p>
                    <h2 className="text-2xl font-semibold text-[#f6f0dd]">Combined view</h2>
                  </div>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Updated weekly
                  </span>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    We run AI application sprints and chain milestones in lockstep. Each release includes a security
                    gate, observability checklist, and documentation.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {['Security gate before deploy', 'Data anchoring by default', 'Operator-first tooling', 'Progressive rollout'].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[#e7e1d3]"
                      >
                        <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 pb-14">
          <div className="relative rounded-3xl border border-white/5 bg-[#0b0f1a]/60 p-6 shadow-[0_28px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-amber-300/70 via-amber-300/15 to-transparent" />
            <div className="space-y-8">
              {timeline.map((phase, idx) => (
                <div key={phase.period} className="relative pl-10">
                  <div className="absolute left-5 top-2 flex h-2 w-2 -translate-x-1/2 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-300/20" />
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f6f0dd]">
                      <span className="text-amber-200">{idx + 1}.</span>
                      {phase.period}
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${chipColors[phase.status]}`}
                    >
                      {phase.status}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-amber-200">
                      {phase.focus}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-[#f6f0dd]">{phase.title}</h3>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {phase.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e7e1d3]"
                      >
                        <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-amber-300/25 bg-[#0d111b]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">AI Track</p>
                  <h3 className="text-2xl font-semibold text-[#f6f0dd]">BlessAI Delivery</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f6f0dd]">
                  Applications & Automation
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {aiTrack.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-[#f6f0dd]">{card.title}</h4>
                      <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">{card.period}</span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-gray-300">
                      {card.bullets.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-300/25 bg-[#0d111b]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Blockchain Track</p>
                  <h3 className="text-2xl font-semibold text-[#f6f0dd]">BlessChain Delivery</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f6f0dd]">
                  Network & Governance
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {chainTrack.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-[#f6f0dd]">{card.title}</h4>
                      <span className="text-xs uppercase tracking-[0.2em] text-amber-200/80">{card.period}</span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-gray-300">
                      {card.bullets.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 pb-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200 flex items-center justify-center">
                  QA
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Operating Principles</p>
                  <h3 className="text-2xl font-semibold text-[#f6f0dd]">How we ship every milestone</h3>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {principles.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-200/70">{item.title}</p>
                    <p className="mt-2 text-gray-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-amber-300/25 bg-[#0d111b]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Call to action</p>
              <h3 className="text-2xl font-semibold text-[#f6f0dd]">Want to validate or partner?</h3>
              <p className="text-gray-300">
                We are onboarding pilot partners for BlessOrder, as well as validator operators for the next phase of
                BlessChain. Get access to build guides, integration playbooks, and early support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">Book a session</Button>
                <Button href="/downloads" variant="secondary">
                  See validator guide
                </Button>
              </div>
              <div className="grid gap-2 text-sm text-gray-300">
                {['Dedicated onboarding manager', 'Shared observability dashboards', 'Clear SLAs for pilots'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RoadmapPage;
