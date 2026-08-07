import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Users } from 'lucide-react';

const milestones = [
  {
    icon: GraduationCap,
    title: 'University of California, Riverside',
    subtitle: 'B.S. in Computer Science',
    meta: 'Expected 2027',
  },
  {
    icon: Users,
    title: 'VP of Professional Development',
    subtitle: 'ACM @ UCR',
  },
  {
    icon: Rocket,
    title: 'Projects Director',
    subtitle: 'MTC @ UCR',
  },
  {
    icon: GraduationCap,
    title: "Master's in Computer Science",
    subtitle: 'Hoping to pursue after graduating',
    meta: 'Future',
    upcoming: true,
  },
];

export default function EducationTimeline() {
  return (
    <div>
      {milestones.map((m, i) => (
        <motion.div
          key={m.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                m.upcoming ? 'border-dashed border-blue-500/40 bg-background' : 'border-blue-500/40 bg-blue-500/10'
              }`}
            >
              <m.icon className="h-4 w-4 text-blue-400" />
            </div>
            {i < milestones.length - 1 && (
              <div className="my-1 w-px flex-1 bg-gradient-to-b from-blue-500/40 to-blue-500/10" />
            )}
          </div>
          <div className="glass glow-hover mb-6 flex-1 rounded-xl p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-white">{m.title}</p>
              {m.meta && (
                <span className="shrink-0 font-mono text-xs text-blue-300">{m.meta}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-400">{m.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
