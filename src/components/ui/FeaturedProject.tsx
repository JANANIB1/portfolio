import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import ProjectVisual from './ProjectVisual';

const pipeline = [
  'Collection',
  'Detection',
  'Investigation',
  'Incident Mgmt',
  'Intelligence',
  'Reporting',
];

export default function FeaturedProject({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="panel scan-hover overflow-hidden"
    >
      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        <div className="p-6 sm:p-9">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal">
              Featured Project
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-400">
            {project.tagline}
          </p>

          <p className="mt-5 text-[15px] leading-relaxed text-ink-300">{project.overview}</p>

          {/* Incident response pipeline — the project's real architecture,
              shown as a horizontal signal path rather than a generic diagram. */}
          <div className="mt-7">
            <p className="eyebrow mb-3">Response Pipeline</p>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center">
                  <span className="rounded-lg border border-canvas-line bg-canvas/50 px-2.5 py-1.5 font-mono text-[10px] text-ink-200">
                    {step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="mx-1 h-px w-4 bg-accent/40 sm:w-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-canvas-line bg-canvas/40 px-2.5 py-1 font-mono text-[11px] text-ink-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-5 font-mono text-xs">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-canvas-line px-4 py-2 text-ink-100 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github size={13} /> View code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-ink-300 transition-colors hover:text-accent"
            >
              <ArrowUpRight size={13} /> Live demo
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-8 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent"
          >
            {open ? 'Hide' : 'Show'} full breakdown
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-6 border-t border-canvas-line pt-6 sm:grid-cols-2">
                  {project.features?.map((f) => (
                    <div key={f.group}>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                        {f.group}
                      </p>
                      <ul className="space-y-1.5">
                        {f.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-ink-300">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {project.challenges && (
                  <div className="mt-6 border-t border-canvas-line pt-6">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                      Challenges Solved
                    </p>
                    <ul className="space-y-2">
                      {project.challenges.map((c) => (
                        <li key={c} className="flex gap-2 text-sm leading-relaxed text-ink-300">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.concepts && (
                  <div className="mt-6 border-t border-canvas-line pt-6">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                      Security Concepts
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.concepts.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-canvas-line px-2.5 py-1 font-mono text-[10px] text-ink-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-t border-canvas-line p-6 sm:p-9 lg:border-l lg:border-t-0">
          <div className="h-56 lg:h-full">
            <ProjectVisual id={project.id} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
