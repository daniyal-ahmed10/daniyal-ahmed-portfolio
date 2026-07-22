import { useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import ProfileImage from '@/components/portfolio/ProfileImage';

const stats = [
{ value: '3.83', label: "GPA · Dean's List" },
{ value: "4+", label: "Projects Developed" },
{ value: '2', label: 'Leadership roles' },
{ value: "2027", label: 'Graduating class' }];


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
      className="relative flex min-h-screen items-center overflow-hidden bg-background">
      
      {/* Aurora blobs */}
      <div className="blob animate-float-slow" style={{ width: 520, height: 520, background: 'hsl(217 91% 55% / 0.28)', top: '-12%', left: '-6%' }} />
      <div className="blob animate-float-slower" style={{ width: 440, height: 440, background: 'hsl(199 89% 55% / 0.22)', bottom: '-15%', right: '-4%' }} />
      <div className="blob animate-float-slow" style={{ width: 300, height: 300, background: 'hsl(245 80% 60% / 0.16)', top: '35%', right: '25%' }} />

      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
          'radial-gradient(550px circle at var(--mx, 50%) var(--my, 50%), hsl(217 91% 60% / 0.08), transparent 45%)'
        }} />
      
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pt-16 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-4">
            <ProfileImage />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse-dot" />
              Computer Science · UCR
            </div>
          </div>
          <h1 className="font-heading text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-aurora">Daniyal</span>
            <br />
            <span className="text-outline-blue">Ahmed</span>
          </h1>
          


          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-glow inline-flex h-11 items-center rounded-full border border-slate-700 px-6 font-mono text-xs uppercase tracking-widest text-slate-100">
              
              View Projects
            </a>
            <a
              href="https://github.com/daniyal-ahmed10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 font-mono text-xs uppercase tracking-widest text-slate-300 transition-colors hover:border-blue-500/40 hover:text-white">
              
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/daniyal-ahmed-279888280"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 font-mono text-xs uppercase tracking-widest text-slate-300 transition-colors hover:border-blue-500/40 hover:text-white">
              
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-8">
          <div className="glass glow-hover rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-200">
                By the numbers
              </h3>
              <span className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse-dot" /> Active
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-500">A quick snapshot of the journey so far.</p>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {stats.map((s) =>
              <div key={s.label}>
                  <p className="text-gradient font-heading text-3xl font-bold leading-none">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                    {s.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 transition-colors hover:text-blue-400"
        aria-label="Scroll down">
        
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>);

}