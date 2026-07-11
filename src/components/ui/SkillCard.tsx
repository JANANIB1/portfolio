import { motion } from 'framer-motion';
import type { SkillGroup } from '@/data/skills';

export default function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="panel group relative overflow-hidden p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
          {group.ref}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-signal/60 transition-colors group-hover:bg-signal" />
      </div>

      <h3 className="mb-3 font-display text-base font-semibold text-ink-100">{group.label}</h3>

      <div className="flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-canvas-line bg-canvas/40 px-2 py-1 font-mono text-[11px] text-ink-300 transition-colors group-hover:border-accent/20"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-radial-fade" />
    </motion.div>
  );
}
