import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-background">
      <div className="blob animate-float-slow" style={{ width: 480, height: 480, background: 'hsl(217 91% 55% / 0.18)', top: '-20%', left: '30%' }} />
      <div className="blob animate-float-slower" style={{ width: 360, height: 360, background: 'hsl(199 89% 55% / 0.14)', bottom: '-30%', right: '10%' }} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">Let's build</span>
          <br />
          <span className="text-slate-600">the future.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/daniyal-ahmed10"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-blue-400"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/daniyal-ahmed-279888280"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
              Location
            </p>
            <p className="text-sm text-slate-300">Riverside, California</p>
            <p className="font-mono text-xs text-slate-500">UTC-8</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">System</p>
            <p className="font-mono text-xs text-slate-500">Portfolio v2.0.0</p>
            <p className="font-mono text-xs text-slate-500">Built with React</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="font-mono text-xs text-slate-600">
            © 2026 Daniyal Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}