import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Flare Studio. All rights reserved.</p>
          <p>Crafted with love, motion, and great taste.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
