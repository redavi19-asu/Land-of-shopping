import { useEffect, useMemo, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ScrollySection from "./components/ScrollySection.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
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
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(p => (
            <div key={p.id} className="reveal">
              <ProductCard item={p} onAdd={addToCart}/>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        {categories.map((c)=>(
          <div key={c.id} id={`cat-${c.id}`}>
            <div className="reveal">
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-slate-600">{c.blurb}</p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(allByCategory[c.id] || []).map(p=>(
                <div key={p.id} className="reveal">
                  <ProductCard item={p} onAdd={addToCart}/>
                </div>
              ))}
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
