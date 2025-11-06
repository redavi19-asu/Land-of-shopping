export default function CartDrawer({ isOpen, items, onClose, onRemove }) {
  const total = items.reduce((s,p)=> s + p.price, 0);
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/30 transition ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 border-b flex items-center justify-between">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && <div className="text-slate-500">Your cart is empty.</div>}
          {items.map((it)=>(
            <div key={it.id} className="flex gap-3 border rounded-lg p-3">
              <img src={it.img} alt={it.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-slate-600">${it.price.toFixed(2)}</div>
              </div>
              <button onClick={()=>onRemove(it.id)} className="text-sm text-red-600 hover:underline">Remove</button>
            </div>
          ))}
        </div>
        <div className="p-5 border-t">
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700">Checkout (demo)</button>
        </div>
      </aside>
    </div>
  );
}
