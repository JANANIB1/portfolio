import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Code2, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', href: profile.social.github, icon: Github },
  { label: 'LinkedIn',  href: profile.social.linkedin, icon: Linkedin },
  { label: 'LeetCode', href: profile.social.leetcode, icon: Code2 },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          refTag="07 / Contact"
          title="Let's build something"
          description="Open to internships, new-grad roles, and collaborations in security, blockchain, or full stack products."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="panel scan-hover group flex items-center gap-4 p-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-canvas-line bg-canvas/40 text-accent">
                  <Icon size={16} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-400">
                    {label}
                  </span>
                  <span className="block text-sm text-ink-100">{value}</span>
                </span>
              </a>
            ))}

            <a
              href={profile.resumeUrl}
              download
              className="panel scan-hover group flex items-center gap-4 p-4 transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-canvas-line bg-canvas/40 text-signal">
                <Download size={16} />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-400">
                  Resume
                </span>
                <span className="block text-sm text-ink-100">Download PDF</span>
              </span>
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="panel space-y-4 p-6 sm:p-7"
          >
            <div>
              <label htmlFor="name" className="eyebrow mb-2 block">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-lg border border-canvas-line bg-canvas/40 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow mb-2 block">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-canvas-line bg-canvas/40 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you building?"
                className="w-full resize-none rounded-lg border border-canvas-line bg-canvas/40 px-3.5 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent/50"
              />
            </div>

            <MagneticButton type="submit" variant="solid" className="w-full">
              <Send size={13} />
              Send message
            </MagneticButton>

            {sent && (
              <p className="text-center font-mono text-[11px] text-signal">
                Your email client should be opening now — thanks for reaching out.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
