export default function ProductCard({ item, onAdd }) {
  return (
    <div className="rounded-xl overflow-hidden border bg-white hover:shadow-glow transition relative">
      {item.badge && (
        <div className="absolute top-3 left-3 bg-yellow-300 text-xs font-bold px-2 py-1 rounded">{item.badge}</div>
      )}
  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-56 object-cover transition-transform duration-200 ease-out hover:scale-105" />
      <div className="p-4">
        <div className="font-semibold">{item.title}</div>
        <div className="mt-1 text-brand-700 font-bold">${item.price.toFixed(2)}</div>
        {typeof item.rating === 'number' && (
          <div className="mt-2 flex items-center text-sm text-slate-600">
            <div className="mr-2 font-medium text-slate-800">{item.rating.toFixed(1)}</div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={`w-4 h-4 ${i < Math.round(item.rating) ? 'text-yellow-400' : 'text-slate-200'}`} fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.539 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => onAdd(item)} className="mt-3 px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
