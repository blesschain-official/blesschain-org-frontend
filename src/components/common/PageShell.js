import React from 'react';

const PageShell = ({ eyebrow, title, description, children }) => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <div className="space-y-3">
          {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">{eyebrow}</p>}
          {title && <h1 className="text-3xl font-semibold text-[#f6f0dd] sm:text-4xl">{title}</h1>}
          {description && <p className="text-[15px] leading-relaxed text-[#c9c5b6]">{description}</p>}
        </div>
        <div className="space-y-4">{children}</div>
      </section>
    </main>
  );
};

export default PageShell;
