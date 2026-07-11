# Janani B — Portfolio

A premium, production-ready personal portfolio built with React, TypeScript, Vite, Tailwind CSS,
and Framer Motion. The visual language is a clean, modern software-engineering aesthetic —
in the spirit of Vercel, Linear, and Microsoft's security products — with subtle,
cybersecurity-inspired motifs (a node/network graph, terminal-accented labels, a quiet scan-line
hover) instead of literal circuit-board imagery.

## Tech stack

- **React 18 + TypeScript** — component architecture
- **Vite** — dev server & build tooling, with manual vendor chunking for code splitting
- **Tailwind CSS** — design tokens (see `tailwind.config.js`) driven by CSS variables so the
  dark/light toggle swaps surfaces without touching component code
- **Framer Motion** — stagger reveals, page/section transitions, magnetic buttons, animated counters
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- **React Router** — client-side routing + custom 404 page

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint       # eslint
```

## Project structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, LoadingScreen, CustomCursor, ScrollProgress, BackToTop
│   ├── sections/       # Hero, About, Skills, Projects, Experience, Certifications, Contact
│   └── ui/              # Reusable primitives: ProjectCard, SkillCard, CertCard, MagneticButton,
│                          AnimatedCounter, SectionHeading, ProjectVisual, FeaturedProject,
│                          NetworkGraph
├── data/                # All content lives here — edit these files to update the site
│   ├── profile.ts       # Name, roles, tagline, about copy, social links, resume URL
│   ├── skills.ts         # Skill groups
│   ├── projects.ts       # Project details (featured + grid)
│   └── experience.ts     # Work experience + certifications
├── hooks/                # useActiveSection (scroll spy), useTheme (dark/light)
├── pages/
│   └── NotFound.tsx       # 404 page
├── lib/utils.ts           # cn() helper + section registry used by nav & scroll-spy
├── App.tsx
├── main.tsx
└── index.css               # Design tokens (CSS variables), base styles, utility layers
```

## Editing content

Everything text-based lives in `src/data/`. There is no CMS and no build-time content coupling —
update a file, save, and the relevant section re-renders.

- **Resume**: drop a `resume.pdf` file into `public/` (the download buttons already point at
  `/resume.pdf`).
- **Profile photo**: the hero currently uses a monogram placeholder (`JB`) inside a rounded panel
  in `src/components/sections/Hero.tsx`. Swap it for an `<img>` once you have a photo — keep the
  `loading="lazy"` attribute for anything below the fold.
- **Project visuals**: each project renders a bespoke abstract "instrument panel"
  (`src/components/ui/ProjectVisual.tsx`) built in CSS/SVG instead of a stock screenshot. Replace
  with real product screenshots when available (use `loading="lazy"` and `decoding="async"`).

## Design notes

- **Dark by default**, with a light mode that swaps the canvas surface for a clean, cool off-white
  while keeping the accent/signal palette constant (`useTheme` + CSS variables in `index.css`).
- **Motion is restrained on purpose** — reveals are short (400–650ms), easing is a consistent
  `cubic-bezier(0.16, 1, 0.3, 1)`, and `prefers-reduced-motion` is respected globally.
- **Accessibility**: visible focus rings, semantic landmarks, `aria-label`s on icon-only controls,
  and a skip-friendly heading structure.

## Deployment

The app builds to static files in `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or
any static host:

```bash
npm run build
```

Remember to update `index.html` (canonical URL, Open Graph URLs) and `public/sitemap.xml` /
`public/robots.txt` with your real production domain before deploying.
