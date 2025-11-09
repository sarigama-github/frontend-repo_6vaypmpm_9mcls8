import { Sparkles, Palette, Rocket, Layers } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand & Identity',
    desc: 'Logos, systems, and style guides that give your product a recognizable voice.'
  },
  {
    icon: Palette,
    title: 'UI/UX & Websites',
    desc: 'Conversion-focused websites, design systems, and delightful product UX.'
  },
  {
    icon: Layers,
    title: '3D & Motion',
    desc: 'Spline scenes, product visualizations, and micro-interactions that pop.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'SEO, analytics, and iteration loops to grow traffic and signups.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">
            A full-stack creative team shipping beautiful, performant experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
