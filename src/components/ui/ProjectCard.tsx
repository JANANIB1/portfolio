import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/data/projects';
import ProjectVisual from './ProjectVisual';

const statusCopy: Record<Project['status'], string> = {
  featured: 'Featured',
  building: 'Currently Building',
  complete: 'Complete',
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = project.accent === 'signal' ? 'text-signal' : 'text-accent';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="panel scan-hover group flex h-full flex-col overflow-hidden p-4"
    >
      <div className="h-40 shrink-0">
        <ProjectVisual id={project.id} />
      </div>

      <div className="flex flex-1 flex-col p-2 pt-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-ink-100">{project.name}</h3>
          <span className={`font-mono text-[10px] uppercase tracking-wide ${accent}`}>
            {statusCopy[project.status]}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-ink-300">{project.overview}</p>

        <div className="mb-5 mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-canvas-line bg-canvas/40 px-2 py-1 font-mono text-[10px] text-ink-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-canvas-line pt-4 font-mono text-xs">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-ink-300 transition-colors hover:text-accent"
            >
              <Github size={13} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-ink-500">
              <Github size={13} /> Coming soon
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-ink-300 transition-colors hover:text-accent"
            >
              <ArrowUpRight size={13} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
