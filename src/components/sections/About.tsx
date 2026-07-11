import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading refTag="02 / About" title="A little about me" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15px] leading-relaxed text-ink-300"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <p className="eyebrow mb-3">Currently Exploring</p>
              <div className="flex flex-wrap gap-2">
                {profile.exploring.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-canvas-line bg-canvas-panel/50 px-3 py-1.5 text-xs text-ink-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="panel flex flex-col justify-between gap-8 p-7"
          >
            <div>
              <p className="eyebrow mb-1">CGPA</p>
              <p className="font-display text-4xl font-semibold text-ink-100">
                <AnimatedCounter to={8.52} decimals={2} />
                <span className="text-ink-400 text-2xl"> / 10</span>
              </p>
            </div>

            <div className="h-px bg-canvas-line" />

            <div>
              <p className="eyebrow mb-1">Expected Graduation</p>
              <p className="font-display text-2xl font-semibold text-ink-100">
                {profile.graduation}
              </p>
            </div>

            <div className="h-px bg-canvas-line" />

            <div>
              <p className="eyebrow mb-1">Institution</p>
              <p className="font-display text-lg font-medium leading-snug text-ink-100">
                R.M.K Engineering College
              </p>
              <p className="mt-1 text-xs text-ink-400">B.E. Computer Science &amp; Engineering</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
