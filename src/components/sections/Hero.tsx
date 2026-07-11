import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';
import MagneticButton from '@/components/ui/MagneticButton';
import NetworkGraph from '@/components/ui/NetworkGraph';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient texture: a faint dot field plus two soft floating glows. */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dots bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 animate-float rounded-full bg-accent/10 blur-[100px]" />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 animate-float rounded-full bg-signal/10 blur-[100px]"
        style={{ animationDelay: '2s' }}
      />

      {/* Signature visual: a quiet node network, anchored to the right edge
          on larger screens, hinting at security/network monitoring without
          being literal. */}
      <NetworkGraph className="pointer-events-none absolute right-[-8%] top-1/2 hidden w-[40%] max-w-lg -translate-y-1/2 opacity-70 xl:block" />

      <div className="container-shell relative">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-canvas-line bg-canvas-panel/60 px-3 py-1.5 font-mono text-[11px] text-ink-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-signal" />
            available for internships &amp; new grad roles
          </motion.div>

          <motion.div variants={item} className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-canvas-line bg-canvas-panel sm:h-20 sm:w-20">
              <div className="flex h-full w-full items-center justify-center font-display text-2xl font-semibold text-accent">
                JB
              </div>
              <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-signal" />
            </div>
            <p className="font-mono text-sm text-ink-300">Hey, I'm</p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl"
          >
            Janani B
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-canvas-line px-3 py-1.5 font-mono text-[11px] text-ink-300"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton variant="solid" onClick={() => scrollTo('projects')}>
              View Projects
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => window.open(profile.resumeUrl, '_blank')}
            >
              Download Resume
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { href: profile.social.github, icon: Github, label: 'GitHub' },
              { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: profile.social.leetcode, icon: Code2, label: 'LeetCode' },
              { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                className="text-ink-400 transition-colors hover:text-accent"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-ink-500" />
        </motion.span>
      </motion.button>
    </section>
  );
}
