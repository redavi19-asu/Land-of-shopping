import React, { useEffect, useState } from 'react';

export default function Header({ onCartOpen }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('site-theme') || 'light';
    } catch (e) { return 'light'; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark-theme'); else root.classList.remove('dark-theme');
    try { localStorage.setItem('site-theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <header className="site-header w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="logo text-xl font-extrabold">Ryan's Land</a>
          <nav className="hidden sm:flex gap-4 text-sm text-slate-700">
            <a href="#categories" className="hover:underline">Categories</a>
            <a href="#featured" className="hover:underline">Featured</a>
            <a href="#story" className="hover:underline">How it’s built</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <label className="relative hidden sm:block">
            <input aria-label="Search" placeholder="Search products" className="search-input px-3 py-2 rounded-lg border text-sm" />
          </label>
          <button onClick={onCartOpen} className="px-3 py-2 rounded-lg border hover:bg-slate-50">Cart</button>

          <button
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            className="ml-2 px-3 py-2 rounded-lg border bg-white/40 hover:bg-white/60 text-sm"
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </header>
  );
}
