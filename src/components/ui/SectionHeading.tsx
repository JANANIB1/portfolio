import { motion } from 'framer-motion';

export default function SectionHeading({
  refTag,
  title,
  description,
}: {
  refTag: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 max-w-2xl"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent/70">
          {refTag}
        </span>
        <span className="h-px flex-1 max-w-16 bg-canvas-line" />
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-300">{description}</p>
      )}
    </motion.div>
  );
}
