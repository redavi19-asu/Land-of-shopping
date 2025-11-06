import { useEffect, useMemo, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ScrollySection from "./components/ScrollySection.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import StorePage from "./components/StorePage.jsx";
import { categories, products, featuredIds } from "./data/products.js";

export default function App() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add("show"); }
      });
    }, { threshold: 0.15 });
    els.forEach(el=> io.observe(el));
    return ()=> io.disconnect();
  }, []);

  const featured = useMemo(() => products.filter(p => featuredIds.includes(p.id)), []);
  const featuredRef = useRef(null);
  const categoryRefs = useRef({});
  const [featuredAtStart, setFeaturedAtStart] = useState(true);
  const [featuredAtEnd, setFeaturedAtEnd] = useState(false);
  const [categoryScroll, setCategoryScroll] = useState({});
  const [extraItems, setExtraItems] = useState(() => {
    // show some extra items initially for first/last categories and featured
    const init = { featured: 8 };
    if (categories && categories.length > 0) {
      const first = categories[0]?.id;
      const second = categories[1]?.id;
      const last = categories[categories.length - 1]?.id;
      const last2 = categories[categories.length - 2]?.id;
      if (first) init[first] = 8;
      if (second) init[second] = 8;
      if (last) init[last] = 8;
      if (last2) init[last2] = 8;
    }
    return init;
  });

  function scrollByOffset(el, dir = 1) {
    if (!el) return;
    const offset = Math.max(300, Math.round(el.clientWidth * 0.75));
    el.scrollBy({ left: dir * offset, behavior: 'smooth' });
  }

  function updateScrollStateForEl(el, setStart, setEnd) {
    if (!el) return;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    setStart(atStart);
    setEnd(atEnd);
  }

  // update featured scroll state
  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;
    const handler = () => updateScrollStateForEl(el, setFeaturedAtStart, setFeaturedAtEnd);
    handler();
    el.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      el.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);

  // autoplay featured carousel slowly (pauses on focus)
  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;
    let tid = null;
    const start = () => {
      if (tid) return;
      tid = setInterval(() => {
        if (!el) return;
        // only auto-scroll if not at end
        if (el.scrollLeft + el.clientWidth < el.scrollWidth - 2) {
          scrollByOffset(el, 1);
        } else {
          // snap back to start after reaching end
          el.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 4200);
    };
    const stop = () => { if (tid) { clearInterval(tid); tid = null; } };
    el.addEventListener('mouseenter', stop);
    el.addEventListener('focusin', stop);
    el.addEventListener('mouseleave', start);
    el.addEventListener('focusout', start);
    start();
    return () => { stop(); el.removeEventListener('mouseenter', stop); el.removeEventListener('focusin', stop); el.removeEventListener('mouseleave', start); el.removeEventListener('focusout', start); };
  }, []);

  // update categories scroll state
  useEffect(() => {
    const handlers = [];
    categories.forEach(c => {
      const el = categoryRefs.current[c.id];
      if (!el) return;
      const handler = () => {
        const atStart = el.scrollLeft <= 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        setCategoryScroll(prev => ({ ...prev, [c.id]: { atStart, atEnd } }));
      };
      handler();
      el.addEventListener('scroll', handler, { passive: true });
      window.addEventListener('resize', handler);
      handlers.push({ el, handler });
    });
    return () => {
      handlers.forEach(h => {
        h.el.removeEventListener('scroll', h.handler);
        window.removeEventListener('resize', h.handler);
      });
    };
  }, []);

  function addToCart(item) {
    setCart(prev => [...prev, item]);
    setOpenCart(true);
  }
  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  const allByCategory = useMemo(() => {
    const map = {};
    for (const c of categories) map[c.id] = [];
    for (const p of products) map[p.category]?.push(p);
    return map;
  }, []);

  const categoriesRef = useRef(null);
  const scrollToCategories = () => categoriesRef.current?.scrollIntoView({ behavior: "smooth" });

  function loadMoreForCategory(catId, count = 8) {
    setExtraItems(prev => ({ ...prev, [catId]: (prev[catId] || 0) + count }));
  }

  function loadMoreFeatured(count = 8) {
    // track under special key 'featured'
    setExtraItems(prev => ({ ...prev, featured: (prev.featured || 0) + count }));
  }

  return (
    <>
      <Hero onShopClick={scrollToCategories} onCartOpen={()=>setOpenCart(true)} />

      <section id="categories" ref={categoriesRef} className="max-w-7xl mx-auto px-6 py-16">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-black">Shop by Category</h2>
          <p className="text-slate-600 mt-2">Dollar store vibe, pro-grade UI.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(c => <div key={c.id} className="reveal"><CategoryCard item={c} /></div>)}
        </div>
      </section>

      <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
        <div className="reveal flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Featured Picks</h2>
            <p className="text-slate-600 mt-2">A quick look at what’s trending.</p>
          </div>
          <a href="#story" className="text-brand-700 hover:underline">How it’s built →</a>
        </div>
        {/* Horizontal scrollable featured row with chevrons */}
        <div className="mt-8 relative">
          {/* left gradient mask for featured */}
          <div className={`pointer-events-none absolute left-0 top-0 h-full w-12 transition-opacity hidden md:block ${featuredAtStart ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0))' }} />
          {/* right gradient mask for featured */}
          <div className={`pointer-events-none absolute right-0 top-0 h-full w-12 transition-opacity hidden md:block ${featuredAtEnd ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(270deg, rgba(255,255,255,1), rgba(255,255,255,0))' }} />
          <button
            aria-label="scroll featured left"
            onClick={() => scrollByOffset(featuredRef.current, -1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white hidden md:flex items-center justify-center ${featuredAtStart ? 'opacity-30 pointer-events-none' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={featuredRef}
            className="overflow-x-auto"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') scrollByOffset(featuredRef.current, -1);
              if (e.key === 'ArrowRight') scrollByOffset(featuredRef.current, 1);
            }}
          >
            <div className="flex gap-6 px-2">
              {featured.map(p => (
                <div key={p.id} className="reveal flex-shrink-0 min-w-[220px]">
                  <ProductCard item={p} onAdd={addToCart} />
                </div>
              ))}
              {Array.from({ length: extraItems.featured || 0 }).map((_, i) => {
                const p = featured[i % featured.length];
                const copy = { ...p, id: `${p.id}-f-${i}` };
                return (
                  <div key={copy.id} className="reveal flex-shrink-0 min-w-[220px]">
                    <ProductCard item={copy} onAdd={addToCart} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-3 flex gap-2 justify-end">
            <button onClick={() => loadMoreFeatured(8)} className="px-3 py-2 rounded bg-slate-100 text-slate-800 text-sm">Load more featured</button>
          </div>
          <button
            aria-label="scroll featured right"
            onClick={() => scrollByOffset(featuredRef.current, 1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white hidden md:flex items-center justify-center ${featuredAtEnd ? 'opacity-30 pointer-events-none' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        {/* Store preview / mock store page */}
        <StorePage products={products} />
        {categories.map((c)=>(
          <div key={c.id} id={`cat-${c.id}`}>
            <div className="reveal">
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-slate-600">{c.blurb}</p>
            </div>
            {/* Horizontal scrollable product list for this category with chevrons */}
            <div className="mt-6 relative">
              {/* left gradient mask for category scroller */}
              <div className={`pointer-events-none absolute left-0 top-0 h-full w-12 transition-opacity hidden md:block ${categoryScroll[c.id]?.atStart ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0))' }} />
              <button
                  aria-label={`scroll ${c.id} left`}
                  onClick={() => scrollByOffset(categoryRefs.current[c.id], -1)}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white hidden md:flex items-center justify-center ${categoryScroll[c.id]?.atStart ? 'opacity-30 pointer-events-none' : ''}`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div
                ref={(el) => (categoryRefs.current[c.id] = el)}
                className="overflow-x-auto"
                tabIndex={0}
                onKeyDown={(e) => {
                  const el = categoryRefs.current[c.id];
                  if (!el) return;
                  if (e.key === 'ArrowLeft') scrollByOffset(el, -1);
                  if (e.key === 'ArrowRight') scrollByOffset(el, 1);
                }}
              >
                <div className="flex gap-6 px-2">
                    {(allByCategory[c.id] || []).map(p => (
                      <div key={p.id} className="reveal flex-shrink-0 min-w-[220px]">
                        <ProductCard item={p} onAdd={addToCart} />
                      </div>
                    ))}
                    {Array.from({ length: extraItems[c.id] || 0 }).map((_, i) => {
                      const list = allByCategory[c.id] || [];
                      if (list.length === 0) return null;
                      const p = list[i % list.length];
                      const copy = { ...p, id: `${p.id}-more-${i}` };
                      return (
                        <div key={copy.id} className="reveal flex-shrink-0 min-w-[220px]">
                          <ProductCard item={copy} onAdd={addToCart} />
                        </div>
                      );
                    })}
                </div>
              </div>
            {/* right gradient mask for category scroller */}
            <div className={`pointer-events-none absolute right-0 top-0 h-full w-12 transition-opacity hidden md:block ${categoryScroll[c.id]?.atEnd ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(270deg, rgba(255,255,255,1), rgba(255,255,255,0))' }} />
                <div className="mt-3 flex justify-end">
                  <button onClick={() => loadMoreForCategory(c.id, 8)} className="px-3 py-2 rounded bg-slate-100 text-slate-800 text-sm">Load more</button>
                </div>
              <button
                aria-label={`scroll ${c.id} right`}
                onClick={() => scrollByOffset(categoryRefs.current[c.id], 1)}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:bg-white hidden md:flex items-center justify-center ${categoryScroll[c.id]?.atEnd ? 'opacity-30 pointer-events-none' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>

      <ScrollySection />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="reveal rounded-3xl bg-brand-600 text-white p-10 md:p-14 shadow-glow">
          <h2 className="text-3xl md:text-4xl font-black">Want this as a full store?</h2>
          <p className="mt-2 text-white/90">Hook this UI to a real backend (Stripe, Commerce.js, Supabase, Django, etc.).</p>
          <div className="mt-6 flex gap-3">
            <a href="#categories" className="px-5 py-3 rounded-lg bg-white text-brand-700 hover:bg-slate-100">Browse again</a>
            <button onClick={()=>setOpenCart(true)} className="px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10">Open cart</button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div>© {new Date().getFullYear()} Ryan’s Land — demo storefront</div>
          <div className="flex gap-4">
            <a className="hover:text-brand-700" href="#categories">Categories</a>
            <a className="hover:text-brand-700" href="#featured">Featured</a>
            <a className="hover:text-brand-700" href="#story">How it’s built</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        isOpen={openCart}
        items={cart}
        onClose={()=>setOpenCart(false)}
        onRemove={removeFromCart}
      />
    </>
  );
}
