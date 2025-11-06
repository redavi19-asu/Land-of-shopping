export default function ProductCard({ item, onAdd }) {
  return (
    <div className="rounded-xl overflow-hidden border bg-white hover:shadow-glow transition">
      <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="font-semibold">{item.title}</div>
        <div className="mt-1 text-brand-700 font-bold">${item.price.toFixed(2)}</div>
        <button onClick={() => onAdd(item)} className="mt-3 px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
