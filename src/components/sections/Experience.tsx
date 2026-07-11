import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading refTag="05 / Experience" title="Where I've worked" />

        <div className="relative max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px origin-top bg-canvas-line"
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative pb-10 pl-9 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-canvas">
                <span className="h-1 w-1 rounded-full bg-accent" />
              </span>

              <div className="panel p-6">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-100">{exp.role}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-accent">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-4 text-sm text-ink-300">
                  {exp.org} · {exp.place}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
