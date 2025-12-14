import React from 'react';
import Link from 'next/link';
import PageShell from '@/components/common/PageShell';

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
    <h2 className="text-lg font-semibold text-[#f6f0dd]">{title}</h2>
    <div className="mt-2 space-y-2 text-sm text-[#d6d0c0]">{children}</div>
  </div>
);

const linkClass = 'block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3] hover:border-amber-300';

const DocsIndex = () => {
  return (
    <PageShell
      eyebrow="Docs"
      title="BlessChain Documentation Hub"
      description="Explore whitepapers, node setup, developer guides, governance, and FAQs for the BlessChain ecosystem."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Introduction">
          <Link href="/docs/introduction" className={linkClass}>
            Getting started overview
          </Link>
        </Card>

        <Card title="Whitepaper">
          <Link href="/docs/whitepaper/chapter-1-vision" className={linkClass}>
            Chapter 1 – Vision
          </Link>
          <Link href="/docs/whitepaper/chapter-2-architecture" className={linkClass}>
            Chapter 2 – Architecture
          </Link>
          <Link href="/docs/whitepaper/chapter-3-tokenomics" className={linkClass}>
            Chapter 3 – Tokenomics
          </Link>
        </Card>

        <Card title="Node Setup">
          <Link href="/docs/node-setup/hardware-requirements" className={linkClass}>
            Hardware Requirements
          </Link>
          <Link href="/docs/node-setup/installation-guide" className={linkClass}>
            Installation Guide
          </Link>
          <Link href="/docs/node-setup/join-testnet" className={linkClass}>
            Join Testnet
          </Link>
          <Link href="/docs/node-setup/validator-guide" className={linkClass}>
            Validator Guide
          </Link>
        </Card>

        <Card title="Developer">
          <Link href="/docs/developer/runtime-structure" className={linkClass}>
            Runtime Structure
          </Link>
          <Link href="/docs/developer/pallets-documentation" className={linkClass}>
            Pallets Documentation
          </Link>
          <Link href="/docs/developer/api-rpc-endpoints" className={linkClass}>
            API &amp; RPC Endpoints
          </Link>
          <Link href="/docs/developer/build-environment" className={linkClass}>
            Build Environment
          </Link>
        </Card>

        <Card title="Governance">
          <Link href="/docs/governance/bbtc-token-distribution" className={linkClass}>
            BBTC Token Distribution
          </Link>
          <Link href="/docs/governance/mission-pool-model" className={linkClass}>
            Mission Pool Model
          </Link>
          <Link href="/docs/governance/voting-community-governance" className={linkClass}>
            Voting / Community Governance
          </Link>
        </Card>

        <Card title="FAQ">
          <Link href="/docs/faq" className={linkClass}>
            Frequently Asked Questions
          </Link>
        </Card>
      </div>
    </PageShell>
  );
};

export default DocsIndex;
