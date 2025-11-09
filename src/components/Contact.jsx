import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! We’ll be in touch within 24 hours.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something beautiful</h2>
        <p className="mt-3 text-white/70">Tell us about your project and we’ll get back to you fast.</p>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4 text-left">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="company" placeholder="Company" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea name="message" required rows="4" placeholder="Project details" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90">Send message</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}
