import { useState } from 'react';
import imageManifest from '../data/image-manifest.json';

const fallbackByCategory = {
  'dollar-deals': 'images/c-dollar-deals.jpg', household: 'images/c-household.jpg', snacks: 'images/c-snacks.jpg',
  health: 'images/c-health.jpg', beauty: 'images/c-health.jpg', electronics: 'images/c-electronics.jpg', toys: 'images/c-toys.jpg',
  kitchen: 'images/c-kitchen.jpg', outdoors: 'images/c-outdoors.jpg', sports: 'images/c-outdoors.jpg', pets: 'images/c-pets.jpg',
  clothing: 'images/p31.jpg', baby: 'images/c-household.jpg', books: 'images/p27.jpg', office: 'images/p8.jpg',
  'home-decor': 'images/c-household.jpg', automotive: 'images/e3.jpg'
};

export default function ProductCard({ item, onAdd }) {
  const [qty, setQty] = useState(1);
  function changeQty(delta) { setQty(prev => Math.max(1, prev + delta)); }

  const base = item.img.split('/').pop();
  const info = imageManifest[base];
  const variants = info?.variants || {};
  const srcSet = Object.values(variants)
    .map(v => `images/${v.file} ${v.width}w`)
    .concat(info ? [`${item.img} ${info.width}w`] : [])
    .join(', ') || undefined;

  return (
    <div className="rounded-xl overflow-hidden border bg-white hover:shadow-glow transition relative">
      {item.badge && <div className="absolute top-3 left-3 bg-stone-900 text-white text-xs font-bold px-2 py-1 rounded z-10">{item.badge}</div>}
      <div className="w-full bg-stone-100">
        <img
          src={item.img}
          {...(srcSet ? { srcSet } : {})}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          alt={item.title}
          loading="lazy"
          decoding="async"
          width={info?.width}
          height={info?.height}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.srcset = '';
            e.currentTarget.src = fallbackByCategory[item.category] || 'images/c-household.jpg';
          }}
          className="w-full object-cover transition-transform duration-200 ease-out hover:scale-105"
          style={{ aspectRatio: '4 / 3' }}
        />
      </div>
      <div className="p-4">
        <div className="font-semibold">{item.title}</div>
        <div className="mt-1 text-stone-900 font-bold">${item.price.toFixed(2)}</div>
        {typeof item.rating === 'number' && <div className="mt-2 text-sm text-slate-600">★ {item.rating.toFixed(1)}</div>}
        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="inline-flex w-full sm:w-auto items-center border rounded-md overflow-hidden text-sm sm:text-base">
            <button aria-label="decrease quantity" onClick={() => changeQty(-1)} className="px-3 py-3 sm:px-4 sm:py-3 text-slate-700 hover:bg-slate-50" style={{minWidth:44}}>-</button>
            <input aria-label="quantity" value={qty} onChange={(e)=>setQty(Math.max(1,Number(e.target.value||1)))} className="w-14 sm:w-16 text-center border-l border-r px-2 py-2 text-base" type="number" min="1" />
            <button aria-label="increase quantity" onClick={() => changeQty(1)} className="px-3 py-3 sm:px-4 sm:py-3 text-slate-700 hover:bg-slate-50" style={{minWidth:44}}>+</button>
          </div>
          <button onClick={() => onAdd(item, qty)} className="px-4 py-3 rounded-md bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center">Add {qty} to Cart</button>
        </div>
      </div>
    </div>
  );
}
