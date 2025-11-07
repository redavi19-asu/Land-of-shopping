export default function CategoryCard({ item }) {
  return (
    <a href={`#cat-${item.id}`} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-glow transition">
      <img
        src={item.img}
        srcSet={`${item.img.replace(/\.(jpg|jpeg|png)$/i, '-w400.$1')} 400w, ${item.img.replace(/\.(jpg|jpeg|png)$/i, '-w800.$1')} 800w, ${item.img} 1200w`}
        sizes="(max-width: 640px) 100vw, 33vw"
        alt={item.name}
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
