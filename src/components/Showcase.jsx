export default function Showcase() {
  const projects = [
    {
      title: 'Nebula Analytics',
      tag: 'SaaS / Website',
      img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Orbit Headphones',
      tag: 'E‑commerce / 3D',
      img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Pulse Finance',
      tag: 'Fintech / Product',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="work" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 text-white">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70">A few recent favorites across product, web, and motion.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-white/90 hover:bg-white/10">Work with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-white/60">{p.tag}</p>
                <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
