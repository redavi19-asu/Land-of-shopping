import { useMemo, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import "./StorePageExperience.css";

const aisleConfig = [
  { id: "dollar-deals", label: "Dollar Drop", number: "01", note: "Tiny prices. Fast grabs.", accent: "#fde047" },
  { id: "snacks", label: "Snack Rush", number: "02", note: "The impulse aisle.", accent: "#fb7185" },
  { id: "household", label: "Home Base", number: "03", note: "Everyday restock zone.", accent: "#67e8f9" },
  { id: "electronics", label: "Plug In", number: "04", note: "Useful tech without the markup.", accent: "#a78bfa" },
  { id: "toys", label: "Play Zone", number: "05", note: "Unexpected fun finds.", accent: "#34d399" },
  { id: "kitchen", label: "Kitchen Lab", number: "06", note: "Tools for the daily rotation.", accent: "#fb923c" },
];

export default function StorePage({ products = [], onAdd }) {
  const [activeAisle, setActiveAisle] = useState(aisleConfig[0].id);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const aisle = aisleConfig.find((item) => item.id === activeAisle) || aisleConfig[0];
  const aisleProducts = useMemo(() => products.filter((product) => product.category === activeAisle), [products, activeAisle]);
  const spotlight = aisleProducts[spotlightIndex % Math.max(aisleProducts.length, 1)] || products[0];

  function chooseAisle(id) {
    setActiveAisle(id);
    setSpotlightIndex(0);
  }

  function nextFind() {
    if (!aisleProducts.length) return;
    setSpotlightIndex((current) => (current + 1) % aisleProducts.length);
  }

  return (
    <section id="store" className="los-world max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      <div className="los-world__shell reveal" style={{ "--aisle-accent": aisle.accent }}>
        <div className="los-world__topline">
          <div className="los-world__eyebrow"><span className="los-world__live-dot" /> LAND OF SHOPPING // STORE MODE</div>
          <div className="los-world__counter">AISLE {aisle.number} / 06</div>
        </div>

        <div className="los-world__intro">
          <div>
            <p className="los-world__micro">DON’T JUST BROWSE IT</p>
            <h3>Walk the store.</h3>
          </div>
          <p>
            Pick an aisle and the storefront changes with you. Deals, products and the spotlight shelf rotate like you’re moving through a real neighborhood shop.
          </p>
        </div>

        <div className="los-world__floor">
          <aside className="los-aisles" aria-label="Store aisles">
            <div className="los-aisles__sign">YOU ARE HERE</div>
            {aisleConfig.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseAisle(item.id)}
                className={`los-aisle ${activeAisle === item.id ? "los-aisle--active" : ""}`}
              >
                <span className="los-aisle__number">{item.number}</span>
                <span className="los-aisle__copy"><strong>{item.label}</strong><small>{item.note}</small></span>
                <span className="los-aisle__arrow">↗</span>
              </button>
            ))}
          </aside>

          <div className="los-spotlight">
            <div className="los-spotlight__scene">
              <img src="images/store.png" alt="Land of Shopping storefront" className="los-spotlight__store" />
              <div className="los-spotlight__veil" />
              <div className="los-spotlight__scan" />
              <div className="los-spotlight__open"><span /> OPEN NOW</div>
              <div className="los-spotlight__title">
                <span>{aisle.number}</span>
                <div><small>NOW ENTERING</small><strong>{aisle.label}</strong></div>
              </div>
            </div>

            {spotlight && (
              <div className="los-find">
                <div className="los-find__image-wrap">
                  <img src={spotlight.img} alt={spotlight.title} className="los-find__image" />
                  <span className="los-find__tag">AISLE FIND</span>
                </div>
                <div className="los-find__body">
                  <div>
                    <small>SPOTLIGHT PICK</small>
                    <h4>{spotlight.title}</h4>
                  </div>
                  <strong className="los-find__price">${Number(spotlight.price).toFixed(2)}</strong>
                  <div className="los-find__actions">
                    <button type="button" onClick={() => onAdd?.(spotlight)} className="los-find__add">Add to bag</button>
                    <button type="button" onClick={nextFind} className="los-find__next">Next find ↻</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="los-shelf-wrap">
          <div className="los-shelf__head">
            <div><span>LIVE SHELF</span><h4>{aisle.label}</h4></div>
            <p>{aisleProducts.length || 0} finds in this aisle</p>
          </div>
          <div className="los-shelf">
            {aisleProducts.slice(0, 8).map((product, index) => (
              <div key={product.id} className={`los-shelf__item ${index === spotlightIndex ? "los-shelf__item--hot" : ""}`} onMouseEnter={() => setSpotlightIndex(index)}>
                <ProductCard item={product} onAdd={onAdd} />
              </div>
            ))}
          </div>
        </div>

        <div className="los-world__footer">
          <div className="los-world__pulse"><span /> DISCOVERY MODE ACTIVE</div>
          <div className="los-world__stats"><strong>{products.length}+</strong><span>products rotating through the store</span></div>
          <button type="button" onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })} className="los-world__all">
            Shop the full store <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
