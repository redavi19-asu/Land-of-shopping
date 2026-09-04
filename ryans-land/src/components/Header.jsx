import React, { useEffect, useState } from 'react';

const logoLetters = [
  ['L','#5b1727'],['a','#171614'],['n','#687064'],['d','#8d887e'],
  ['o','#5b1727'],['f','#687064'],
  ['S','#171614'],['h','#5b1727'],['o','#687064'],['p','#8d887e'],['p','#171614'],['i','#5b1727'],['n','#687064'],['g','#8d887e']
];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 min-w-0">
          <a href="#" aria-label="Land of Shopping home" className="logo flex items-center text-lg sm:text-xl font-extrabold tracking-[-0.045em] whitespace-nowrap">
            <span aria-hidden="true">
              {logoLetters.map(([letter,color], index) => (
                <React.Fragment key={`${letter}-${index}`}>
                  {(index === 4 || index === 6) && <span className="inline-block w-[0.28em]" />}
                  <span style={{ color }}>{letter}</span>
                </React.Fragment>
              ))}
            </span>
          </a>
          <nav className="hidden md:flex gap-4 text-sm text-[#4d4942]">
            <a href="#categories" className="hover:underline">Categories</a>
            <a href="#featured" className="hover:underline">Featured</a>
            <a href="#story" className="hover:underline">How it’s built</a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <label className="relative hidden lg:block">
            <input aria-label="Search" placeholder="Search products" className="search-input px-3 py-2 rounded-lg border border-[#8d887e] bg-[#f8f5ef] text-sm" />
          </label>
          <button onClick={onCartOpen} className="px-3 py-2 rounded-full border border-[#171614] bg-[#171614] text-[#f8f5ef] text-xs font-bold hover:bg-[#5b1727] transition-colors">Cart</button>

          <button
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            className="px-3 py-2 rounded-full border border-[#8d887e] bg-[#eee9df] text-[#171614] text-xs font-bold hover:bg-[#d8d1c5] transition-colors"
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </header>
  );
}
