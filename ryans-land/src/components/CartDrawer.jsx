export default function CartDrawer({ isOpen, items, onClose, onRemove, onChangeQuantity }) {
  const total = items.reduce((s,p)=> s + p.price * (p.quantity || 1), 0);
  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? "" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={onClose} />

      <aside className={`absolute right-3 sm:right-0 top-1/2 sm:top-0 -translate-y-1/2 sm:translate-y-0 h-[78dvh] sm:h-full max-h-[650px] sm:max-h-none w-[calc(100%-24px)] sm:w-full max-w-[380px] sm:max-w-md bg-[#f8f5ef] text-[#171614] shadow-2xl transition-transform duration-300 border border-[#8d887e] sm:border-y-0 sm:border-r-0 rounded-2xl sm:rounded-none overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-[110%]"}`}>
        <div className="sticky top-0 z-10 px-4 py-3 sm:p-5 border-b border-[#8d887e] flex items-center justify-between bg-[#eee9df]">
          <div className="min-w-0 pr-3">
            <div className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase text-[#6d675f]">Land of Shopping</div>
            <h2 className="font-serif text-xl sm:text-2xl mt-1">Your Shopping Bag</h2>
          </div>
          <button onClick={onClose} aria-label="Close shopping bag" className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#171614] bg-[#171614] text-[#f8f5ef] text-2xl leading-none grid place-items-center active:scale-95 hover:bg-[#5b1727] transition-all">×</button>
        </div>

        <div className="px-4 py-4 sm:p-5 space-y-4 overflow-y-auto h-[calc(100%-164px)] sm:h-[calc(100%-190px)]">
          {items.length === 0 && (
            <div className="min-h-[200px] sm:min-h-[260px] grid place-items-center text-center border border-dashed border-[#aaa398] bg-[#eee9df] p-6 sm:p-8">
              <div>
                <div className="font-serif text-2xl sm:text-3xl">Your bag is empty.</div>
                <div className="text-sm text-[#6d675f] mt-3">Explore the departments and add something you like.</div>
                <button onClick={onClose} className="mt-5 px-5 py-3 bg-[#171614] text-[#f8f5ef] text-[10px] font-black tracking-[0.14em] uppercase">Keep Shopping</button>
              </div>
            </div>
          )}

          {items.map((it)=> (
            <div key={it.id} className="flex gap-3 border border-[#aaa398] bg-[#eee9df] p-3 items-center">
              <img src={it.img} alt={it.title} className="w-14 h-14 sm:w-16 sm:h-16 object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-serif text-base sm:text-lg leading-tight truncate">{it.title}</div>
                <div className="text-xs text-[#6d675f] mt-1">${it.price.toFixed(2)} each</div>
                <div className="mt-3 inline-flex items-center border border-[#8d887e] bg-[#f8f5ef]">
                  <button aria-label={`decrease ${it.title}`} onClick={() => onChangeQuantity(it.id, (it.quantity||1) - 1)} className="w-8 h-8 sm:w-9 sm:h-9 text-lg">−</button>
                  <div className="px-3 text-sm border-x border-[#8d887e] h-8 sm:h-9 grid place-items-center">{it.quantity || 1}</div>
                  <button aria-label={`increase ${it.title}`} onClick={() => onChangeQuantity(it.id, (it.quantity||1) + 1)} className="w-8 h-8 sm:w-9 sm:h-9 text-lg">+</button>
                </div>
              </div>
              <div className="text-right self-stretch flex flex-col justify-between">
                <div className="font-semibold text-sm sm:text-base">${((it.price || 0) * (it.quantity || 1)).toFixed(2)}</div>
                <button onClick={()=>onRemove(it.id)} className="text-[9px] sm:text-[10px] font-black tracking-[0.12em] uppercase text-[#5b1727]">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 sm:p-5 border-t border-[#8d887e] bg-[#eee9df]">
          <div className="flex items-center justify-between font-semibold">
            <span className="font-serif text-lg sm:text-xl">Total</span>
            <span className="text-lg sm:text-xl">${total.toFixed(2)}</span>
          </div>
          <button className="mt-3 sm:mt-4 w-full py-3 sm:py-4 bg-[#5b1727] text-[#f8f5ef] hover:bg-[#171614] transition-colors text-[10px] font-black tracking-[0.16em] uppercase">Proceed to Checkout</button>
        </div>
      </aside>
    </div>
  );
}
