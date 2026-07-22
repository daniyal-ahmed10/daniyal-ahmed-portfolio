import { useRef } from 'react';
import { ArrowDown, Github } from 'lucide-react';

const stack = ['C++', 'Python', 'JavaScript', 'React', 'Next.js', 'Java', 'Git', 'Linux'];

export default function Hero() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0B10]"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), hsl(173 65% 50% / 0.06), transparent 40%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0B10] to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pt-16 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="h-px w-8 bg-slate-700" />
            Computer Science · UCR
          </div>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
            Daniyal
            <br />
            Ahmed
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
            Software engineer focused on building impactful, well-architected systems — from
            system-level programming to modern web applications.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-slide inline-flex h-11 items-center border border-slate-700 px-6 font-mono text-xs uppercase tracking-widest text-slate-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://github.com/daniyal-ahmed10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-100"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          <div className="border border-white/5 bg-[#11141B]/60 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                System Status
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-[#2DD4BF]">
                <span className="h-2 w-2 rounded-full bg-[#2DD4BF] animate-pulse-dot" /> Online
              </span>
            </div>
            <div className="py-4">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Availability
              </p>
              <p className="mt-1 text-sm text-slate-200">Open to Summer 2026 internships</p>
            </div>
            <div className="border-t border-white/5 py-4">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="border border-white/10 px-2.5 py-1 font-mono text-xs text-slate-400 transition-colors hover:border-[#2DD4BF]/40 hover:text-slate-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 py-4">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Latest Commit
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-slate-400">
                <span className="text-[#2DD4BF]">$</span> git log --oneline -1
                <br />
                <span className="text-slate-500">a3f9c2e</span> feat: deploy portfolio v2.0
                <span className="animate-blink text-[#2DD4BF]">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 transition-colors hover:text-slate-300"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}