import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Values from './components/Values';
import Logos from './components/Logos';
import ForManagers from './components/ForManagers';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-indigo-950 font-inter text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-indigo-950/80 to-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-sky-400" />
            <span className="text-lg font-semibold tracking-tight">Sysist</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-indigo-200 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#waitlist" className="rounded-lg bg-white px-4 py-2 font-medium text-indigo-900">Get Early Access</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Values />
        <Logos />
        <ForManagers />
        <Demo />
        <Testimonials />
        <FooterCTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-indigo-300">
        © {new Date().getFullYear()} Sysist. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
