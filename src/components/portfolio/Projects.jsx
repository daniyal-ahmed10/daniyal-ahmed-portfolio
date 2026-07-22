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
      {
        label: 'Source',
        href: 'https://github.com/daniyal-ahmed10/Tax-Payment-Gateway',
        icon: 'github',
      },
    ],
  },
  {
    name: 'AI Premier League Predictor',
    year: '2025',
    description:
      'A machine learning model that predicts the outcomes of Premier League matches based on historical data and team statistics.',
    tags: ['Python', 'ML', 'Data Science'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/daniyal-ahmed10/Prem-AI-Game-Predictor/tree/main',
        icon: 'github',
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 bg-[#0A0B10] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#2DD4BF]/60">
            03 / Projects
          </p>
          <span className="h-px flex-1 bg-white/5" />
        </div>

        <div className="border-t border-white/5">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group grid grid-cols-1 gap-6 border-b border-white/5 py-8 transition-colors hover:bg-[#11141B]/30 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-3">
                <p className="font-mono text-xs text-[#2DD4BF]/60">{p.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-100">{p.name}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 px-2 py-0.5 font-mono text-xs text-slate-500 transition-colors group-hover:border-white/20 group-hover:text-slate-300"
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
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-[#2DD4BF]"
                  >
                    {link.icon === 'github' && <Github className="h-3.5 w-3.5" />}
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3.5 w-3.5" />}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}