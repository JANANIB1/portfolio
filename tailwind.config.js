/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Canvas — a clean, near-black graphite surface (Vercel/Linear-style),
        // driven by CSS variables so the light-mode toggle can swap surfaces
        // while the accent/signal system stays constant.
        canvas: {
          DEFAULT: 'rgb(var(--canvas) / <alpha-value>)',
          raised: 'rgb(var(--canvas-raised) / <alpha-value>)',
          panel: 'rgb(var(--canvas-panel) / <alpha-value>)',
          line: 'rgb(var(--canvas-line) / <alpha-value>)',
        },
        // Accent — a cool, confident azure used for primary actions and links.
        accent: {
          DEFAULT: '#4C82FF',
          soft: '#3C68DB',
          bright: '#7AA3FF',
        },
        // Signal — a muted teal used sparingly for "live" / monitoring states,
        // echoing security-dashboard status indicators.
        signal: {
          DEFAULT: '#4FD1B3',
          dim: '#35A38A',
        },
        // Fault — reserved for alerts / incident-style accents.
        fault: '#F0645A',
        ink: {
          50: 'rgb(var(--ink-50) / <alpha-value>)',
          100: 'rgb(var(--ink-100) / <alpha-value>)',
          200: 'rgb(var(--ink-200) / <alpha-value>)',
          300: 'rgb(var(--ink-300) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(76,130,255,0.16), 0 0 32px -8px rgba(76,130,255,0.35)',
        'glow-sm': '0 0 0 1px rgba(76,130,255,0.12), 0 0 16px -6px rgba(76,130,255,0.3)',
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        // A quiet dot-matrix field — reads as a network of nodes at rest,
        // not a circuit grid.
        'grid-dots': 'radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(60% 50% at 50% 0%, rgba(76,130,255,0.10) 0%, rgba(76,130,255,0) 70%)',
      },
      backgroundSize: {
        dots: '28px 28px',
      },
      keyframes: {
        'pulse-signal': {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        'dash-flow': {
          to: { strokeDashoffset: -24 },
        },
      },
      animation: {
        'pulse-signal': 'pulse-signal 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'dash-flow': 'dash-flow 1.4s linear infinite',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
