import { useEffect, useState } from "react";
import imageManifest from "../data/image-manifest.json";

const dealCards = [
  { eyebrow: "TODAY'S DROP", value: "30%", label: "select favorites", tone: "cyan" },
  { eyebrow: "PICKUP", value: "FAST", label: "local convenience", tone: "violet" },
  { eyebrow: "UNDER $10", value: "100+", label: "budget finds", tone: "amber" },
];

export default function Hero({ onShopClick, onCartOpen }) {
  const [activeDeal, setActiveDeal] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActiveDeal((value) => (value + 1) % dealCards.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  const storeInfo = imageManifest["store.png"];

  return (
    <header className="shop-hero relative overflow-hidden">
      <div className="shop-hero__mesh" aria-hidden="true" />
      <div className="shop-hero__orb shop-hero__orb--one" aria-hidden="true" />
      <div className="shop-hero__orb shop-hero__orb--two" aria-hidden="true" />

      <nav className="relative z-30 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <a href="#" className="shop-logo" aria-label="Land of Shopping home">
          <span className="shop-logo__mark">L</span>
          <span><strong>Land of</strong> Shopping</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#categories" className="shop-nav-link">Categories</a>
          <a href="#featured" className="shop-nav-link">Featured</a>
          <a href="#store" className="shop-nav-link">The Store</a>
          <a href="#story" className="shop-nav-link">Inside the Build</a>
        </div>
        <button onClick={onCartOpen} className="shop-cart-button">
          <span>Bag</span>
          <span className="shop-cart-button__dot" />
        </button>
      </nav>

      <div className="promo-marquee border-y border-white/10">
        <div className="promo-marquee__track py-2.5 text-xs font-black uppercase tracking-[0.22em]">
          <span className="inline-block mr-10">Flash finds · up to 30% off</span>
          <span className="inline-block mr-10">Small prices · big discovery</span>
          <span className="inline-block mr-10">Fast local pickup</span>
          <span className="inline-block mr-10">New finds moving through the aisles</span>
          <span className="inline-block mr-10">Flash finds · up to 30% off</span>
          <span className="inline-block mr-10">Small prices · big discovery</span>
          <span className="inline-block mr-10">Fast local pickup</span>
          <span className="inline-block mr-10">New finds moving through the aisles</span>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:pl-28 pt-14 md:pt-20 pb-24 md:pb-32 grid lg:grid-cols-[1.02fr_.98fr] gap-14 items-center">
        <div className="reveal relative">
          <div className="shop-kicker"><span className="shop-kicker__pulse" /> A different kind of storefront</div>
          <h1 className="shop-hero__title mt-6">
            Walk in for one thing.
            <span>Leave with a story.</span>
          </h1>
          <p className="shop-hero__copy mt-6 max-w-xl">
            Snacks, home finds, everyday essentials and unexpected deals — presented like a destination instead of another product grid.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="shop-primary-cta">Explore today’s finds <span aria-hidden="true">↗</span></a>
            <button onClick={onShopClick} className="shop-secondary-cta">Walk the aisles</button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
            {dealCards.map((deal, index) => (
              <button
                key={deal.eyebrow}
                type="button"
                onClick={() => setActiveDeal(index)}
                className={`deal-chip ${activeDeal === index ? "deal-chip--active" : ""}`}
              >
                <span>{deal.eyebrow}</span>
                <strong>{deal.value}</strong>
                <small>{deal.label}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="reveal relative min-h-[500px] md:min-h-[590px]">
          <div className="store-stage">
            <div className="store-stage__halo" aria-hidden="true" />
            <div className="store-stage__card">
              <div className="store-stage__image-wrap">
                <img
                  alt="Land of Shopping storefront"
                  src="images/store.png"
                  width={storeInfo?.width}
                  height={storeInfo?.height}
                  className="store-stage__image"
                />
                <div className="store-stage__image-glass" />
                <div className="store-stage__open"><span /> OPEN NOW</div>
                <div className="store-stage__caption">
                  <span>LAND OF SHOPPING</span>
                  <strong>Your neighborhood discovery store.</strong>
                </div>
              </div>

              <div className="store-stage__footer">
                <div>
                  <p className="store-stage__eyebrow">TODAY IN STORE</p>
                  <p className="store-stage__headline">Fresh finds are moving.</p>
                </div>
                <button onClick={onShopClick} aria-label="Browse the store" className="store-stage__arrow">↗</button>
              </div>
            </div>

            <div className="floating-ticket floating-ticket--top">
              <span>LIVE DEAL</span>
              <strong>{dealCards[activeDeal].value}</strong>
              <small>{dealCards[activeDeal].label}</small>
            </div>
            <div className="floating-ticket floating-ticket--bottom">
              <span>STORE PULSE</span>
              <strong>4.8 ★</strong>
              <small>community favorite</small>
            </div>
            <div className="shop-scanline" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:pl-28 -mt-10 pb-8">
        <div className="shop-trust-strip">
          <span>01 · Everyday essentials</span>
          <span>02 · Surprise finds</span>
          <span>03 · Budget-first prices</span>
          <span>04 · Built for quick discovery</span>
        </div>
      </div>
    </header>
  );
}
