import { useEffect, useState } from 'react';
import './LeftScrolly.css';

export default function LeftScrolly() {
  const items = [
    { id: 'categories', label: 'Categories' },
    { id: 'featured', label: 'Featured' },
    { id: 'store', label: 'Store' },
    { id: 'story', label: 'How it’s built' },
  ];

  const [active, setActive] = useState(items[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

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

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(false), 3600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="mobile-menu-float md:hidden">
        <button
          type="button"
          aria-controls="site-left-scrolly"
          aria-expanded={mobileOpen}
          onClick={() => { setMobileOpen(v => !v); setShowHint(false); }}
          className={`mobile-menu-trigger ${mobileOpen ? 'is-open' : ''}`}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="mobile-menu-trigger__ring" aria-hidden="true" />
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <span className={`mobile-menu-hint ${showHint && !mobileOpen ? 'is-visible' : ''}`} aria-hidden="true">Menu</span>
      </div>

      <aside id="site-left-scrolly" className={`left-scrolly ${mobileOpen ? 'fixed' : 'hidden'} md:flex flex-col items-start gap-3 fixed top-1/3 left-6 z-30`}>
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
