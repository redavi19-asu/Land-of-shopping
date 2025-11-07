import imageManifest from '../data/image-manifest.json';

export default function CategoryCard({ item }) {
  const base = item.img.split('/').pop();
  const info = imageManifest[base];
  const widthAttr = info ? info.width : undefined;
  const heightAttr = info ? info.height : undefined;

  return (
    <a href={`#cat-${item.id}`} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-glow transition">
      <img
        src={item.img}
        srcSet={`${item.img.replace(/\.(jpg|jpeg|png|svg)$/i, '-w400.$1')} 400w, ${item.img.replace(/\.(jpg|jpeg|png|svg)$/i, '-w800.$1')} 800w, ${item.img} 1200w`}
        sizes="(max-width: 640px) 100vw, 33vw"
        alt={item.name}
        width={widthAttr}
        height={heightAttr}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-slate-600">{item.blurb}</div>
        <div className="mt-2 text-brand-700 text-sm group-hover:underline">Explore →</div>
      </div>
    </a>
  );
}
