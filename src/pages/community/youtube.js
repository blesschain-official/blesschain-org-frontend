import React from 'react';
import PageShell from '@/components/common/PageShell';

const YouTubePage = () => (
  <PageShell
    eyebrow="Community"
    title="YouTube"
    description="Watch tutorials, AMAs, and ecosystem updates on the BlessChain YouTube channel."
  >
    <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 text-sm text-[#d6d0c0] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      <p>Video playlists and live-stream schedule will be linked here.</p>
    </div>
  </PageShell>
);

export default YouTubePage;
