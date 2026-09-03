import imageManifest from '../data/image-manifest.json';

const fallbackByCategory = {
  'dollar-deals': 'images/c-dollar-deals.jpg',
  household: 'images/c-household.jpg',
  snacks: 'images/c-snacks.jpg',
  health: 'images/c-health.jpg',
  beauty: 'images/c-health.jpg',
  electronics: 'images/c-electronics.jpg',
  toys: 'images/c-toys.jpg',
  kitchen: 'images/c-kitchen.jpg',
  outdoors: 'images/c-outdoors.jpg',
  sports: 'images/c-outdoors.jpg',
  pets: 'images/c-pets.jpg',
  clothing: 'images/p31.jpg',
  baby: 'images/c-household.jpg',
  books: 'images/p27.jpg',
  office: 'images/p8.jpg',
  'home-decor': 'images/c-household.jpg',
  automotive: 'images/e3.jpg',
};

export default function CategoryCard({ item }) {
  const base = item.img.split('/').pop();
  const info = imageManifest[base];
  const widthAttr = info?.width;
  const heightAttr = info?.height;
  const variants = info?.variants || {};
  const srcSet = Object.values(variants)
    .map(v => `images/${v.file} ${v.width}w`)
    .concat(info ? [`${item.img} ${info.width}w`] : [])
    .join(', ') || undefined;

  return (
    <a href={`#cat-${item.id}`} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-glow transition">
      <div className="w-full bg-stone-100">
        <img
          src={item.img}
          {...(srcSet ? { srcSet } : {})}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={item.name}
          width={widthAttr}
          height={heightAttr}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.srcset = '';
            e.currentTarget.src = fallbackByCategory[item.id] || 'images/c-household.jpg';
          }}
          className="w-full object-cover"
          style={{ aspectRatio: '4 / 3' }}
        />
      </div>
      <div className="p-4">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-slate-600">{item.blurb}</div>
        <div className="mt-2 text-brand-700 text-sm group-hover:underline">Explore →</div>
      </div>
    </a>
  );
}
