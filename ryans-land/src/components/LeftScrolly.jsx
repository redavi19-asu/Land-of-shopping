import { useEffect, useState } from 'react';

export default function LeftScrolly() {
  const items = [
    { id: 'categories', label: 'Categories' },
    { id: 'featured', label: 'Featured' },
    { id: 'store', label: 'Store' },
    { id: 'story', label: 'How it’s built' },
  ];

  const [active, setActive] = useState(items[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { threshold: 0.45 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <button
        type="button"
        aria-controls="site-left-scrolly"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(v => !v)}
        className="md:hidden fixed left-4 top-1/4 z-50 bg-white/95 p-2 rounded-full shadow-md"
      >
        <span className="sr-only">Toggle navigation</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700">
          {mobileOpen ? (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <aside id="site-left-scrolly" className={`left-scrolly ${mobileOpen ? 'fixed' : 'hidden'} md:flex flex-col items-start gap-3 fixed top-1/3 left-6 z-40`}>
        {items.map(it => (
          <button
            key={it.id}
            className={`left-scrolly__item ${active === it.id ? 'active' : ''}`}
            onClick={() => { document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setMobileOpen(false); }}
            aria-current={active === it.id}
          >
            <span className="dot" aria-hidden />
            <span className="label">{it.label}</span>
          </button>
        ))}
      </aside>
    </>
  );
}
