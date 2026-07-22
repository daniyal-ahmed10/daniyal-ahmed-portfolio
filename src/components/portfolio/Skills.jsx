import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', cat: 'Programming' },
  { name: 'Python', cat: 'Programming' },
  { name: 'Java', cat: 'Programming' },
  { name: 'JavaScript', cat: 'Programming' },
  { name: 'HTML', cat: 'Web' },
  { name: 'CSS', cat: 'Web' },
  { name: 'React', cat: 'Web' },
  { name: 'Next.js', cat: 'Web' },
  { name: 'Git', cat: 'Tools' },
  { name: 'Linux', cat: 'Tools' },
  { name: 'Jira', cat: 'Tools' },
  { name: 'MySQL', cat: 'Tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 bg-[#0A0B10] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#2DD4BF]/60">
            02 / Education & Skills
          </p>
          <span className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
              Education
            </h3>
            <div className="border border-white/5 bg-[#11141B]/40 p-6">
              <p className="text-lg font-semibold text-slate-100">
                University of California, Riverside
              </p>
              <p className="mt-1 text-sm text-slate-400">B.S. in Computer Science</p>
              <p className="font-mono text-xs text-slate-500">Expected 2028</p>
              <div className="my-6 h-px bg-white/5" />
              <dl className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <dt className="text-slate-500">GPA</dt>
                  <dd className="text-slate-200">3.83</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Honors</dt>
                  <dd className="text-slate-200">Dean's & Chancellor's List</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Leadership</dt>
                  <dd className="text-slate-200">Board Member, ACM @ UCR</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group border border-white/5 bg-[#11141B]/40 p-4 transition-colors hover:border-[#2DD4BF]/30"
                >
                  <p className="text-sm font-medium text-slate-100">{s.name}</p>
                  <p className="mt-1 font-mono text-xs text-slate-500">{s.cat}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}