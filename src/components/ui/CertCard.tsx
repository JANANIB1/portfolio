import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import type { Certification } from '@/data/experience';

export default function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="panel flex items-start gap-3 p-4"
    >
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-canvas-line bg-canvas/40 text-signal">
        <ShieldCheck size={15} />
      </div>
      <div>
        <p className="font-display text-sm font-medium leading-snug text-ink-100">{cert.name}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-400">
          {cert.issuer}
        </p>
      </div>
    </motion.div>
  );
}
