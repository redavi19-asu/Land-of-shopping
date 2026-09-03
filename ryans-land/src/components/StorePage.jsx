import ProductCard from "./ProductCard.jsx";

export default function StorePage({ products = [], onAdd }) {
  const previewProducts = products.slice(0, 8);

  return (
    <section id="store" className="store-experience max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="reveal store-experience__shell">
        <div className="store-experience__intro">
          <div>
            <p className="store-section-label">ENTER THE STORE</p>
            <h3 className="store-experience__title">A storefront that feels alive before you buy anything.</h3>
          </div>
          <p className="store-experience__copy">
            Think neighborhood convenience store meets digital discovery wall. Browse fast, catch a deal, add it to the bag, keep moving.
          </p>
        </div>

        <div className="store-experience__grid">
          <div className="store-experience__scene">
            <img src="images/store.png" alt="Land of Shopping storefront" className="store-experience__scene-image" />
            <div className="store-experience__scene-overlay" />
            <div className="store-experience__status"><span /> STORE OPEN · 8AM–10PM</div>
            <div className="store-experience__scene-copy">
              <p>LAND OF SHOPPING</p>
              <h4>Come for the essentials. Stay for the unexpected.</h4>
              <div className="store-experience__meta">
                <span>Local pickup</span>
                <span>Fresh deals</span>
                <span>Quick checkout</span>
              </div>
            </div>
            <div className="store-experience__radar" aria-hidden="true"><i /><i /><i /></div>
          </div>

          <div className="store-experience__inventory">
            <div className="store-experience__inventory-head">
              <div>
                <p className="store-section-label">AISLE RADAR</p>
                <h4>What’s moving right now</h4>
              </div>
              <div className="inventory-live"><span /> LIVE</div>
            </div>

            <div className="store-experience__mini-grid">
              {previewProducts.map((p, index) => (
                <div key={p.id} className={`store-product-slot ${index === 0 ? "store-product-slot--featured" : ""}`}>
                  <ProductCard item={p} onAdd={onAdd} />
                </div>
              ))}
            </div>

            <div className="store-experience__footer">
              <div>
                <strong>{products.length}+</strong>
                <span>items in rotation</span>
              </div>
              <button onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })} className="shop-primary-cta">
                Browse every aisle <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
