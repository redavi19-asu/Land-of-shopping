import { useEffect, useState } from 'react';

export default function LeftScrolly() {
  const items = [
    { id: 'categories', label: 'Categories' },
    { id: 'featured', label: 'Featured' },
    { id: 'store', label: 'Store' },
    { id: 'story', label: 'How it’s built' },
  ];

  const [active, setActive] = useState(items[0].id);

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
    <aside className="left-scrolly hidden md:flex flex-col items-start gap-3 fixed top-1/3 left-6 z-40">
      {items.map(it => (
        <button
          key={it.id}
          className={`left-scrolly__item ${active === it.id ? 'active' : ''}`}
          onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          aria-current={active === it.id}
        >
          <span className="dot" aria-hidden />
          <span className="label">{it.label}</span>
        </button>
      ))}
    </aside>
  );
}
