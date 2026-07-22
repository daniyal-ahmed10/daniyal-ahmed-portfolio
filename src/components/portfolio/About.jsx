import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 bg-background py-24 lg:py-32">
      <div className="blob animate-float-slower" style={{ width: 360, height: 360, background: 'hsl(217 91% 55% / 0.12)', top: '20%', left: '-10%' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-500/70">
              01 / About
            </p>
          </div>
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl leading-relaxed text-slate-200 lg:text-3xl lg:leading-relaxed">
                I'm a Computer Science student with a passion for software development, building
                meaningful projects, and exploring project management.
              </p>
              <div className="mt-8 max-w-2xl space-y-4 text-slate-400">
                <p>
                  Through coursework and hands-on projects, I've gained experience in{' '}
                  <span className="text-gradient-soft font-medium">C++, Python, data structures,
                  algorithms, and system-level programming</span>, and enjoy applying these skills to
                  solve real-world problems.
                </p>
                <p>
                  I'm particularly interested in creating software that has a tangible impact —
                  whether it involves developing tools that streamline processes, building
                  applications that improve efficiency, or contributing to innovative projects.
                </p>
                <p>I'm eager to continue learning, collaborate with others, and grow as a developer.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}