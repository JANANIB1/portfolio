import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LINES = ['establishing connection...', 'verifying integrity...', 'rendering interface...'];

export default function LoadingScreen({ show }: { show: boolean }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, LINES.length - 1));
    }, 380);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-sm text-accent">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse-signal" />
              <span>janani.dev</span>
            </div>
            <div className="h-5 font-mono text-xs text-ink-300">
              {LINES[lineIndex]}
              <span className="ml-0.5 animate-blink">_</span>
            </div>
            <div className="mt-2 h-px w-40 overflow-hidden bg-canvas-line">
              <motion.div
                className="h-full bg-gradient-to-r from-accent/40 via-accent to-signal"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
