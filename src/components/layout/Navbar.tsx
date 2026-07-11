import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';

import { sections } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition-all duration-500',
        scrolled ? 'py-3' : 'py-6',
      )}
    >
      <div
        className={cn(
          'container-shell flex items-center justify-between rounded-2xl border transition-all duration-500',
          scrolled
            ? 'border-canvas-line bg-canvas/70 px-4 py-2.5 shadow-panel backdrop-blur-xl'
            : 'border-transparent bg-transparent px-4 py-2.5',
        )}
      >
        <button
          onClick={() => goTo('home')}
          className="group flex items-center gap-2 font-mono text-sm text-ink-100"
          aria-label="Back to top"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-canvas-line bg-canvas-panel text-accent transition-colors group-hover:border-accent/50">
            JB
          </span>
          <span className="hidden text-ink-300 sm:inline">// portfolio</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {sections
            .filter((s) => s.id !== 'home')
            .map((s) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={cn(
                  'relative rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors',
                  active === s.id ? 'text-accent' : 'text-ink-300 hover:text-ink-100',
                )}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-canvas-line text-ink-300 transition-colors hover:border-accent/40 hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-lg border border-canvas-line px-3 py-2 font-mono text-xs uppercase tracking-wide text-ink-100 transition-colors hover:border-accent/50 hover:text-accent sm:flex"
          >
            <Download size={13} />
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-canvas-line text-ink-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-shell mt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-canvas-line bg-canvas/95 p-3 shadow-panel backdrop-blur-xl">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-left font-mono text-xs uppercase tracking-wide',
                    active === s.id ? 'bg-canvas-panel text-accent' : 'text-ink-300',
                  )}
                >
                  {s.label}
                </button>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-1 flex items-center justify-center gap-1.5 rounded-lg border border-canvas-line px-3 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-100"
              >
                <Download size={13} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
