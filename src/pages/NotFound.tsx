import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-canvas px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-dots bg-dots opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/70">
          404 // route not found
        </p>
        <h1 className="mt-4 font-display text-7xl font-semibold text-ink-100 sm:text-8xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
          This link doesn't resolve to anything. The page you're looking for was moved,
          renamed, or never existed.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-canvas-line px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-100 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <ArrowLeft size={13} />
          Back to portfolio
        </Link>
      </motion.div>
    </div>
  );
}
