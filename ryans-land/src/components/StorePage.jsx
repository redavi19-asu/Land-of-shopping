import ProductCard from "./ProductCard.jsx";

export default function StorePage({ products = [], onAdd }) {
  return (
    <section id="store" className="max-w-7xl mx-auto px-6 py-16">
      <div className="reveal grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden border p-4 bg-white">
            <img src="images/store.png" alt="Storefront" className="w-full h-44 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-bold">Ryan’s Land — Demo Store</h3>
            <div className="text-sm text-slate-600 mt-2">Convenience, snacks, home goods. Open 8am–10pm.</div>
            <div className="mt-4 text-sm text-slate-700">
              <div className="font-semibold">123 Demo Ave, Suite 100</div>
              <div className="text-xs text-slate-500">Phone: (555) 123-4567</div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 rounded bg-brand-600 text-white">Browse inventory</button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-lg font-bold">Store Highlights</h4>
          <p className="text-sm text-slate-600">A curated snapshot of products available in this demo store.</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 12).map(p => (
              <ProductCard key={p.id} item={p} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
