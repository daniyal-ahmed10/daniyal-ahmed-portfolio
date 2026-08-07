import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypewriterText from '@/components/portfolio/TypewriterText';

const taglineWords = ['Computer Science Student.', 'Builder.', 'Problem Solver.'];

const paragraphs = [
  <>
    Through coursework and hands-on projects, I've gained experience in{' '}
    <span className="text-gradient-soft font-medium">
      C++, Python, data structures, algorithms, and system-level programming
    </span>
    , and enjoy applying these skills to solve real-world problems.
  </>,
  <>
    I'm particularly interested in creating software that has a tangible impact — whether it
    involves developing tools that streamline processes, building applications that improve
    efficiency, or contributing to innovative projects.
  </>,
  <>
    What I'm most proud of is the projects I've been able to build and the real-world connections
    they've led to along the way — I'm always excited to keep learning and growing as a developer.
  </>,
];

const facts = [
  { label: 'Gym', detail: 'Staying active keeps my head clear for long build sessions.' },
  { label: 'DJing', detail: "Mixing sets when I'm not mixing code." },
  { label: 'Soccer', detail: "Always got a match on somewhere." },
  { label: 'Travel', detail: 'Always chasing the next place to explore.' },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden border-t border-white/5 bg-background py-24 lg:py-32">
      <motion.div style={{ y: blobY, width: 360, height: 360, background: 'hsl(217 91% 55% / 0.12)', top: '20%', left: '-10%' }} className="blob animate-float-slower" />
      <div className="bg-dot-grid animate-pan-slow pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-widest text-blue-500/70">
            01 / About
          </motion.p>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <TypewriterText
            words={taglineWords}
            className="font-mono text-sm uppercase tracking-widest text-blue-400"
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-3xl font-semibold leading-snug text-gradient lg:text-4xl lg:leading-snug"
          >
            I'm a Computer Science student with a passion for software development, building
            meaningful projects, and exploring project management.
          </motion.blockquote>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left text-slate-400">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            Beyond the codebase
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {facts.map((f) => (
              <div key={f.label} tabIndex={0} className="group relative outline-none">
                <div className="cursor-default rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-blue-500/40 group-hover:text-white group-focus-visible:border-blue-500/40 group-focus-visible:text-white">
                  {f.label}
                </div>
                <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 translate-y-1 rounded-lg border border-white/10 bg-[#0b0f1a]/95 p-3 text-center text-xs leading-relaxed text-slate-300 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
