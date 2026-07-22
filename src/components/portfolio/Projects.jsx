import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    name: 'Taekwondo Club @ UCR',
    year: '2025',
    description:
      'A website for the UCR Taekwondo Club featuring practice schedules, registration guidance via DoSportsEasy and Highlander Link, social media links, and contact info.',
    tags: ['React', 'Next.js', 'CSS', 'Web'],
    links: [{ label: 'Live Demo', href: 'https://tkd.ucrhighlanders.org/', external: true }],
  },
  {
    name: 'Tax Payment Gateway',
    year: '2025',
    description:
      'A secure software system for processing tax payments, payment tracking, and integration with the EFTPS.',
    tags: ['C++', 'Security', 'EFTPS', 'Backend'],
    links: [
      { label: 'Source', href: 'https://github.com/daniyal-ahmed10/Tax-Payment-Gateway', icon: 'github' },
    ],
  },
  {
    name: 'AI Premier League Predictor',
    year: '2025',
    description:
      'A machine learning model that predicts the outcomes of Premier League matches based on historical data and team statistics.',
    tags: ['Python', 'ML', 'Data Science'],
    links: [
      { label: 'Source', href: 'https://github.com/daniyal-ahmed10/Prem-AI-Game-Predictor/tree/main', icon: 'github' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-white/5 bg-background py-24 lg:py-32">
      <div className="blob animate-float-slow" style={{ width: 380, height: 380, background: 'hsl(199 89% 55% / 0.1)', bottom: '10%', right: '-8%' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-500/70">
            03 / Projects
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 lg:p-8"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: 'radial-gradient(500px circle at var(--mx,30%) 0%, hsl(217 91% 60% / 0.12), transparent 60%)' }} />
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-blue-500/70">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-xs text-slate-400 transition-colors group-hover:border-blue-500/30 group-hover:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 lg:col-span-2 lg:justify-end">
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-blue-400"
                    >
                      {link.icon === 'github' && <Github className="h-3.5 w-3.5" />}
                      {link.label}
                      {link.external && <ArrowUpRight className="h-3.5 w-3.5" />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}