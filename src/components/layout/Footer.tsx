import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-canvas-line bg-canvas-raised/60">
      <div className="container-shell flex flex-col items-center gap-6 py-12 text-center">
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-canvas-line font-mono text-xs text-accent transition-colors hover:border-accent/50"
          aria-label="Back to top"
        >
          JB
        </button>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-300 transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-300 transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.social.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-ink-300 transition-colors hover:text-accent"
          >
            <Code2 size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-300 transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
          © {year} Janani B — Built from scratch, section by section.
        </p>
      </div>
    </footer>
  );
}
