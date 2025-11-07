export default function ScrollySection() {
  const steps = [
    { title: "Browse", text: "Scroll the categories — everything reveals as you move." },
    { title: "Pick", text: "Featured grid highlights popular budget-smart picks." },
    { title: "Add", text: "Mock cart drawer updates instantly, no backend needed." },
    { title: "Deploy", text: "Push to GitHub Pages for a fast portfolio share." },
  ];
  return (
    <section id="story" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        <div className="scrolly-pin">
          <div className="rounded-2xl bg-white border shadow-glow p-8">
            <h2 className="text-3xl md:text-4xl font-black">How this demo works</h2>
            <p className="mt-3 text-slate-600">Scroll to see the steps. The left panel stays pinned while the right side advances.</p>
            <img className="mt-6 rounded-xl" src="https://placehold.co/800x500?text=React+%2B+Tailwind" alt="Stack" width="800" height="500" />
          </div>
        </div>
        <div className="space-y-10">
          {steps.map((s,i)=>(
            <article key={i} className="reveal rounded-2xl p-6 bg-white border">
              <h3 className="font-bold text-xl">{i+1}. {s.title}</h3>
              <p className="text-slate-600">{s.text}</p>
              <div className="mt-4 h-2 w-full rounded bg-slate-100">
                <div className="h-2 rounded bg-brand-500" style={{width: `${(i+1)/steps.length*100}%`}}/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
