import { useEffect, useState } from "react";
import "./HeroSpecial.css";

const lanes = [
  ["$1 ZONE", "Dollar Deals"],
  ["SNACK RUN", "Snacks & Drinks"],
  ["PLUG IN", "Electronics"],
  ["HOME RUN", "Household"],
];

export default function Hero({ onShopClick, onCartOpen }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % lanes.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="los-world">
      <nav className="los-nav">
        <a href="#" className="los-brand"><span>LAND</span><b>OF SHOPPING</b></a>
        <div className="los-navlinks">
          <a href="#categories">Aisles</a><a href="#featured">Drops</a><a href="#store">Store</a>
        </div>
        <button onClick={onCartOpen} className="los-bag">BAG ↗</button>
      </nav>

      <div className="los-ticker">
        <div>OPEN NOW ✦ SURPRISE FINDS ✦ UNDER $10 ✦ SNACKS ✦ TECH ✦ HOME ✦ TOYS ✦ OPEN NOW ✦ SURPRISE FINDS ✦ UNDER $10 ✦ SNACKS ✦ TECH ✦ HOME ✦ TOYS ✦</div>
      </div>

      <div className="los-hero-grid">
        <section className="los-copy">
          <div className="los-kicker">WELCOME TO THE SHOPPING DISTRICT</div>
          <h1><span>LAND</span><span>OF</span><span>SHOPPING</span></h1>
          <p>Not a catalog. Not a boring grid. A little digital neighborhood packed with cheap finds, everyday stuff and things you did not plan on buying.</p>
          <div className="los-actions"><button onClick={onShopClick}>ENTER THE AISLES →</button><a href="#featured">SEE WHAT'S MOVING</a></div>
        </section>

        <section className="los-map" aria-label="Interactive shopping district map">
          <div className="los-map-title"><span>YOU ARE HERE</span><b>DISTRICT 01</b></div>
          <div className="los-crosswalk los-crosswalk--one"/><div className="los-crosswalk los-crosswalk--two"/>
          <div className="los-road los-road--h"><i/><i/><i/><i/></div><div className="los-road los-road--v"><i/><i/><i/></div>
          {lanes.map(([tag,name], i) => (
            <button key={name} onClick={() => setActive(i)} className={`los-shop los-shop--${i+1} ${active === i ? "is-active" : ""}`}>
              <small>{tag}</small><strong>{name}</strong><span>{String(i+1).padStart(2,"0")}</span>
            </button>
          ))}
          <div className="los-you"><span>●</span> YOU</div>
          <div className="los-delivery los-delivery--a">▣</div><div className="los-delivery los-delivery--b">▣</div>
        </section>
      </div>

      <div className="los-lane-board">
        <div><small>NOW ENTERING</small><strong>{lanes[active][0]}</strong><span>{lanes[active][1]}</span></div>
        <div className="los-price-wheel"><span>$1</span><span>$5</span><span>$10</span><span>NEW</span></div>
        <button onClick={onShopClick}>WALK THIS WAY ↘</button>
      </div>

      <div className="los-conveyor" aria-hidden="true"><div><span>CHIPS</span><span>USB-C</span><span>CLEANER</span><span>TOYS</span><span>CANDY</span><span>PAPER</span><span>TOOLS</span><span>CHIPS</span><span>USB-C</span><span>CLEANER</span><span>TOYS</span><span>CANDY</span></div></div>
    </header>
  );
}
