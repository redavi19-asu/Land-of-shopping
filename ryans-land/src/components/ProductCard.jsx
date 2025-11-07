import { useState } from 'react';
import imageManifest from '../data/image-manifest.json';

export default function ProductCard({ item, onAdd }) {
  const [qty, setQty] = useState(1);
  function changeQty(delta) {
    setQty(prev => Math.max(1, prev + delta));
  }

  return (
    <div className="rounded-xl overflow-hidden border bg-white hover:shadow-glow transition relative">
      {item.badge && (
        <div className="absolute top-3 left-3 bg-yellow-300 text-xs font-bold px-2 py-1 rounded">{item.badge}</div>
      )}
      {/* responsive images: will use resized variants if available (e.g. image-w400.jpg) */}
      {
        (() => {
          const base = item.img.split('/').pop();
          const info = imageManifest[base];
          const widthAttr = info ? info.width : undefined;
          const heightAttr = info ? info.height : undefined;
          return (
            <div className="w-full">
              <img
                src={item.img}
                srcSet={`${item.img.replace(/\.(jpg|jpeg|png)$/i, '-w400.$1')} 400w, ${item.img.replace(/\.(jpg|jpeg|png)$/i, '-w800.$1')} 800w, ${item.img} 1200w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                alt={item.title}
                loading="lazy"
                decoding="async"
                width={widthAttr}
                height={heightAttr}
                className="w-full object-cover transition-transform duration-200 ease-out hover:scale-105"
                style={{ aspectRatio: '4 / 3' }}
              />
            </div>
          );
        })()
      }
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
        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="inline-flex w-full sm:w-auto items-center border rounded-md overflow-hidden text-sm sm:text-base">
            <button
              aria-label="decrease quantity"
              onClick={() => changeQty(-1)}
              className="px-3 py-3 sm:px-4 sm:py-3 text-slate-700 hover:bg-slate-50 focus:outline-none"
              style={{minWidth: 44}}
            >
              -
            </button>
            <input
              aria-label="quantity"
              value={qty}
              onChange={(e)=> setQty(Math.max(1, Number(e.target.value || 1)))}
              className="w-14 sm:w-16 text-center border-l border-r px-2 py-2 text-base"
              type="number"
              min="1"
            />
            <button
              aria-label="increase quantity"
              onClick={() => changeQty(1)}
              className="px-3 py-3 sm:px-4 sm:py-3 text-slate-700 hover:bg-slate-50 focus:outline-none"
              style={{minWidth: 44}}
            >
              +
            </button>
          </div>
          <button onClick={() => onAdd(item, qty)} className="px-4 py-3 rounded-md bg-brand-600 text-white hover:bg-brand-700 w-full sm:w-auto text-center">
            Add {qty} to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
