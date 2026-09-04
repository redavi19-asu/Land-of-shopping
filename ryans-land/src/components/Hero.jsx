import { useEffect, useRef, useState } from "react";
import "./HeroSpecial.css";

const departments = [
  { tag: "$1 DEPARTMENT", name: "Dollar Market", sub: "Everyday steals", icon: "01", items: ["Pantry", "Cleaning", "Snacks"] },
  { tag: "FASHION", name: "The Wardrobe", sub: "Men · Women · Shoes", icon: "02", items: ["Outerwear", "Denim", "Sneakers"] },
  { tag: "MARKET", name: "Groceries", sub: "Fresh + pantry", icon: "03", items: ["Produce", "Drinks", "Essentials"] },
  { tag: "TECH", name: "Electronics", sub: "Daily technology", icon: "04", items: ["Audio", "Mobile", "Gaming"] },
  { tag: "LIVING", name: "Home & Beauty", sub: "Make home feel better", icon: "05", items: ["Kitchen", "Decor", "Beauty"] },
  { tag: "PLAY", name: "Toys & More", sub: "Kids · Auto · Outdoor", icon: "06", items: ["Toys", "Auto", "Outdoor"] },
];

const merchandise = [
  ["ESSENTIAL TEE", "$14", "FASHION"], ["PANTRY FIND", "$1", "DOLLAR"], ["WIRELESS AUDIO", "$29", "TECH"],
  ["HOME SET", "$18", "LIVING"], ["FRESH MARKET", "$6", "GROCERY"], ["EVERYDAY SNEAKER", "$32", "FASHION"]
];

export default function Hero({ onShopClick, onCartOpen }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % departments.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (index) => setActive((index + departments.length) % departments.length);
  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);
  const dept = departments[active];

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current == null) return;
    const end = event.changedTouches[0]?.clientX ?? touchStart.current;
    const delta = end - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) < 45) return;
    delta < 0 ? next() : previous();
  };

  return (
    <header className="dept-world">
      <nav className="dept-nav">
        <a href="#" className="dept-brand"><span>LAND</span><i>of</i><b>SHOPPING</b></a>
        <div className="dept-navlinks"><a href="#categories">Departments</a><a href="#featured">New Arrivals</a><a href="#store">The Store</a></div>
        <button onClick={onCartOpen} className="dept-bag">SHOPPING BAG <span>0</span></button>
      </nav>

      <div className="dept-service"><span>OPEN DAILY</span><div>THE DEPARTMENT STORE FOR EVERYTHING</div><span>EST. 2026</span></div>

      <section className="dept-entrance">
        <div className="dept-copy">
          <div className="dept-eyebrow">WELCOME INSIDE · SIX DEPARTMENTS · ONE STORE</div>
          <h1>Everything<br/><em>has a place.</em></h1>
          <p>Walk through fashion, groceries, dollar finds, electronics, home, beauty and more — one department at a time.</p>
          <div className="dept-actions"><button onClick={onShopClick}>ENTER THE STORE</button><a href="#featured">SHOP NEW ARRIVALS ↗</a></div>
          <div className="dept-floor-index"><span>GROUND FLOOR</span><b>01 — 06</b><small>SWIPE · TAP · EXPLORE</small></div>
        </div>

        <div className="dept-corridor" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="dept-walkthrough-label"><span>INTERACTIVE WALK-THROUGH</span><small>Swipe or use the arrows</small></div>
          <button className="dept-arrow dept-arrow--left" onClick={previous} aria-label="Previous department">←</button>
          <button className="dept-arrow dept-arrow--right" onClick={next} aria-label="Next department">→</button>
          <div className="dept-ceiling">{[0,1,2,3,4].map(n => <i key={n}/>)}</div>
          <div className="dept-sign"><small>NOW APPROACHING</small><strong>{dept.name}</strong><span>{dept.tag}</span></div>
          <div className="dept-perspective-lines"><i/><i/><i/><i/></div>
          <div className="dept-left-display"><small>FEATURED</small><b>{dept.items[0]}</b><div className="dept-mannequin"><i/><span/></div><strong>{dept.items[1]}</strong></div>
          <div className="dept-right-display"><small>THIS WAY</small><b>{dept.items[2]}</b><div className="dept-shelf"><i/><i/><i/></div><strong>NEW IN</strong></div>
          <button className="dept-door" onClick={onShopClick} aria-label={`Enter ${dept.name}`}><span>{dept.icon}</span><strong>{dept.name}</strong><small>TAP TO SHOP →</small></button>
          <div className="dept-cart">▱<span>••</span></div>
          <div className="dept-dots" aria-label="Department slides">{departments.map((d,i)=><button key={d.name} onClick={()=>goTo(i)} className={active===i?"active":""} aria-label={`Show ${d.name}`}/>)}</div>
        </div>
      </section>

      <section className="dept-directory">
        <div className="dept-directory-title"><small>STORE DIRECTORY</small><strong>Choose a department</strong></div>
        <div className="dept-tabs">{departments.map((d,i)=><button key={d.name} onClick={()=>goTo(i)} className={active===i?"active":""}><span>{d.icon}</span><div><b>{d.name}</b><small>{d.sub}</small></div></button>)}</div>
      </section>

      <section className="dept-merch">
        <div className="dept-merch-head"><span>MERCHANDISE MOVING THROUGH THE STORE</span><b>LIVE FLOOR</b></div>
        <div className="dept-belt"><div>{[...merchandise,...merchandise].map((m,i)=><article key={i}><div className={`dept-product dept-product--${i%6}`}><span>{m[2]}</span></div><small>{m[2]}</small><strong>{m[0]}</strong><b>{m[1]}</b></article>)}</div></div>
      </section>
    </header>
  );
}
