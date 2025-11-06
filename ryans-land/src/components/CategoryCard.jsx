export default function CategoryCard({ item }) {
  return (
    <a href={`#cat-${item.id}`} className="group block rounded-xl overflow-hidden border bg-white hover:shadow-glow transition">
      <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-slate-600">{item.blurb}</div>
        <div className="mt-2 text-brand-700 text-sm group-hover:underline">Explore →</div>
      </div>
    </a>
  );
}
