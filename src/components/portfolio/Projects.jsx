import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Github } from 'lucide-react';

const projects = [
{
  name: 'Taekwondo Club @ UCR',
  year: '2025',
  description:
  'A website for the UCR Taekwondo Club featuring practice schedules, registration guidance via DoSportsEasy and Highlander Link, social media links, and contact info.',
  tags: ['React', 'Next.js', 'CSS', 'Web'],
  links: [{ label: 'Live Demo', href: 'https://tkd.ucrhighlanders.org/', external: true }]
},
{
  name: 'Tax Payment Gateway',
  year: '2025',
  description:
  'A secure software system for processing tax payments, payment tracking, and integration with the EFTPS.',
  tags: ['C++', 'Security', 'EFTPS', 'Backend'],
  links: [
  { label: 'Source', href: 'https://github.com/daniyal-ahmed10/Tax-Payment-Gateway', icon: 'github' }]

},
{
  name: 'AI Premier League Predictor',
  year: '2025',
  description:
  'A machine learning model that predicts the outcomes of Premier League matches based on historical data and team statistics.',
  tags: ['Python', 'ML', 'Data Science'],
  links: [
  { label: 'Source', href: 'https://github.com/daniyal-ahmed10/Prem-AI-Game-Predictor/tree/main', icon: 'github' }]

},
{
  name: 'Facial Reaction Detector',
  year: '2026',
  description:
  'A real-time computer vision app that detects facial expressions via webcam and displays a matching reaction image instantly, no trained model or dataset required.',
  tags: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision'],
  links: [
  { label: 'Source', href: 'https://github.com/daniyal-ahmed10/facial-reaction-detector', icon: 'github' }]

},
{
  name: 'Smart Parking App',
  year: '2026',
  description:
  "A smart campus parking app that helps UCR students find the best available parking using live occupancy data and interactive maps.",
  tags: ['Mobile', 'Real-time', 'Maps'],
  links: [],
  inProgress: true
}];

const certifications = [
  { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM' },
  { name: "CS50's Introduction to Computer Science", issuer: 'Harvard University' },
  { name: 'IC3 Digital Literacy Certification GS6 Level 3', issuer: 'Certiport' },
  { name: 'IC3 Digital Literacy Certification GS6 Level 1', issuer: 'Certiport' },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden border-t border-white/5 bg-background py-24 lg:py-32">
      <motion.div style={{ y: blobY, width: 380, height: 380, background: 'hsl(199 89% 55% / 0.1)', bottom: '10%', right: '-8%' }} className="blob animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-widest text-blue-500/70">
            03 / Projects & Certifications
          </motion.p>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {projects.map((p, i) =>
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: 'radial-gradient(500px circle at var(--mx,30%) 0%, hsl(217 91% 60% / 0.12), transparent 60%)' }} />
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="font-mono text-xs text-blue-500/70">0{i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) =>
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-xs text-slate-400 transition-colors group-hover:border-blue-500/30 group-hover:text-slate-200">

                      {t}
                    </span>
                )}
                </div>

                <div className="mt-5 flex gap-4 border-t border-white/5 pt-4">
                  {p.inProgress ?
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-blue-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse-dot" /> In progress
                    </span> :

                p.links.map((link) =>
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-blue-400">

                        {link.icon === 'github' && <Github className="h-3.5 w-3.5" />}
                        {link.label}
                        {link.external && <ArrowUpRight className="h-3.5 w-3.5" />}
                      </a>
                )
                }
                </div>
              </motion.article>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="lg:self-start"
          >
            <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-slate-500">
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/[0.05]"
                >
                  <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
                  <div>
                    <p className="text-sm font-bold text-white">{c.issuer}</p>
                    <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-slate-400">{c.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
