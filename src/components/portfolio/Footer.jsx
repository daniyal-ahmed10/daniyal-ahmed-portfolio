import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0B10]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          LET'S BUILD
          <br />
          <span className="text-slate-600">THE FUTURE.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/daniyal-ahmed10"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#2DD4BF]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/daniyal-ahmed-279888280"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#2DD4BF]"
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
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
              System
            </p>
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