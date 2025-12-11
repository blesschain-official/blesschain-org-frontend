import React from 'react';
import BlessShippingHero from '@/components/blessshipping/BlessShippingHero';
import WhatIsBlessShipping from '@/components/blessshipping/WhatIsBlessShipping';
import FeatureList from '@/components/blessshipping/FeatureList';
import WorkflowSection from '@/components/blessshipping/WorkflowSection';
import IntegrationSection from '@/components/blessshipping/IntegrationSection';
import BlockchainSection from '@/components/blessshipping/BlockchainSection';
import DemoSection from '@/components/blessshipping/DemoSection';
import UseCaseSection from '@/components/blessshipping/UseCaseSection';
import CTASection from '@/components/blessshipping/CTASection';

const BlessShippingPage = () => {
  return (
    <main className="bg-[#0E0E12] text-white">
      <BlessShippingHero />
      <WhatIsBlessShipping />
      <FeatureList />
      <WorkflowSection />
      <IntegrationSection />
      <BlockchainSection />
      <DemoSection />
      <UseCaseSection />
      <CTASection />
    </main>
  );
};

export default BlessShippingPage;
