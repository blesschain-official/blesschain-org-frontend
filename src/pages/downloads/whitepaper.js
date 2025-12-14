import React from 'react';
import PageShell from '@/components/common/PageShell';

const WhitepaperDownload = () => (
  <PageShell
    eyebrow="Downloads"
    title="BlessChain Whitepaper PDF"
    description="Access the latest BlessChain whitepaper as a downloadable PDF."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Download link will appear here. For now, refer to the in-browser chapters in the Docs section.</p>
    </div>
  </PageShell>
);

export default WhitepaperDownload;
