export default function Hero({ onShopClick, onCartOpen }) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(25,159,255,.18),transparent)]" />
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-black text-xl tracking-tight">
          <span className="text-brand-600">Ryan’s</span> Land
        </a>
        <div className="flex gap-4">
          <a href="#categories" className="text-sm hover:text-brand-600">Categories</a>
          <a href="#featured" className="text-sm hover:text-brand-600">Featured</a>
          <a href="#story" className="text-sm hover:text-brand-600">How it’s built</a>
          <button onClick={onCartOpen} className="rounded-lg bg-brand-600 text-white px-3 py-2 text-sm shadow-glow hover:bg-brand-700">Cart</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            A clean, modern storefront for <span className="text-brand-600">budget-smart</span> shopping.
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Built with React + Tailwind. Smooth scroll-driven reveals, category browsing,
            featured products, and a mock cart — perfect for showcasing your e-commerce chops.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#featured" className="px-5 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700 shadow-glow">Shop Featured</a>
            <button onClick={onShopClick} className="px-5 py-3 rounded-lg border border-slate-300 hover:border-brand-600 hover:text-brand-700">Browse All</button>
          </div>
        </div>

        <div className="reveal">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-glow grid md:grid-cols-2 gap-4 items-center">
            {/* store image */}
            <div>
              <img alt="Store preview" src="/images/store.jpg" className="rounded-xl w-full h-44 object-cover" />
            </div>
            {/* store info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">Ryan’s Land - Demo Store</div>
                  <div className="text-sm text-slate-600">Convenience • Snacks • Home goods</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-brand-600">4.5 ★</div>
                  <div className="text-xs text-slate-500">(1.2k reviews)</div>
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="text-slate-600">Open · 8am–10pm</div>
                <div className="text-slate-600">•</div>
                <div className="text-slate-600">123 Demo Ave, Suite 100</div>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#categories" className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm">Shop this store</a>
                <button onClick={onCartOpen} className="px-4 py-2 rounded-lg border border-slate-200 text-sm">View cart</button>
              </div>
              <div className="text-xs text-slate-500 mt-1">This is a mock preview of a real storefront — no real orders processed.</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
