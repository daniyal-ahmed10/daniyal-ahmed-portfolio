import { motion } from 'framer-motion';
import { Code2, Globe, Wrench } from 'lucide-react';
import {
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiLinux,
  SiJira,
  SiMysql,
} from 'react-icons/si';
import EducationTimeline from '@/components/portfolio/EducationTimeline';

const skillGroups = [
  {
    name: 'Programming',
    icon: Code2,
    skills: [
      { name: 'C++', icon: SiCplusplus, emphasis: true },
      { name: 'Python', icon: SiPython, emphasis: true },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    name: 'Web',
    icon: Globe,
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Linux', icon: SiLinux },
      { name: 'Jira', icon: SiJira },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-center gap-4">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-widest text-blue-500/70">
            02 / Education & Skills
          </motion.p>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
              Education
            </h3>
            <EducationTimeline />
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {skillGroups.map((group, gi) => (
                <div key={group.name}>
                  <div className="mb-3 flex items-center gap-2 text-slate-400">
                    <group.icon className="h-4 w-4 text-blue-500/70" />
                    <span className="font-mono text-xs uppercase tracking-widest">{group.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((s, si) => (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                        className={`group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/[0.05] ${
                          s.emphasis ? 'px-5 py-2.5 text-sm' : 'px-4 py-2 text-xs'
                        }`}
                      >
                        <div
                          className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: 'radial-gradient(80px circle at 50% 0%, hsl(217 91% 60% / 0.18), transparent 70%)' }}
                        />
                        <s.icon className={s.emphasis ? 'h-4 w-4 text-blue-400' : 'h-3.5 w-3.5 text-blue-400/80'} />
                        <span className="font-medium text-slate-100">{s.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
