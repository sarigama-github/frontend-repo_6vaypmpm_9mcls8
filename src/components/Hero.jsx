import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
          Modern. Playful. Interactive.
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
          Web design agency crafting beautiful, high-converting experiences
        </h1>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          We blend strategy, 3D, and motion to build memorable sites that convert. From landing pages to full product ecosystems.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-lg shadow-cyan-500/20 hover:bg-white/90 transition">
            Start a project
          </a>
          <a href="#work" className="pointer-events-auto inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
