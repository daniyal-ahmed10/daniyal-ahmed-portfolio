import { useState, useEffect } from 'react';
import { Command, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', id: 'home', num: '01' },
  { label: 'About', id: 'about', num: '02' },
  { label: 'Skills', id: 'skills', num: '03' },
  { label: 'Projects', id: 'projects', num: '04' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-[#06080F]/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#home" className="font-mono text-sm font-medium tracking-tight text-slate-100">
          <span className="text-gradient-soft">{'//'}</span> daniyal
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-100"
            >
              <span className="mr-1 text-blue-500/50">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 font-mono text-xs text-slate-500 md:flex">
            <Command className="h-3 w-3" />K
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center text-slate-300 transition-colors hover:text-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />

      {open && (
        <div className="border-t border-white/5 bg-[#06080F]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm uppercase tracking-widest text-slate-400"
            >
              <span className="mr-2 text-blue-500/50">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}