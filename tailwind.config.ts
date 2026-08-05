import type { Config } from 'tailwindcss';

/**
 * Design tokens — source of truth is CLAUDE.md §7.
 * Named palette = literal brand constants.
 * Semantic tokens = CSS variables (channel form) so light/dark can swap
 * while keeping Tailwind opacity utilities (`/50`) working.
 */
const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Named palette (harmonisée sur le système violet — cf. globals.css)
        ardoise: '#1F1633',
        papier: '#F6F4FB',
        craie: '#FCFBFE',
        pin: '#4B2E93',
        ambre: '#7C56E6',
        argile: '#6D4BB0',
        brume: '#E7E2F5',
        pierre: '#6B6280',
        alerte: '#B4283F',

        // Semantic tokens (themeable, opacity-capable)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'on-accent': 'rgb(var(--on-accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',

        // Diagnostic states — nuances de violet + neutre (jamais de rouge stoplight)
        'state-go': '#4B2E93',
        'state-work': '#7C56E6',
        'state-stop': '#6B6280',
      },
      fontFamily: {
        // var(--font-sans) en repli : le titrage latin (Space Grotesk) ne couvre pas le
        // cyrillique, donc le bulgare bascule sur Roboto (cyrillique) plutôt que sur du « tofu ».
        display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        micro: ['0.75rem', { lineHeight: '1.1rem' }],
        small: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        h3: ['clamp(1.25rem, 1rem + 1vw, 1.5rem)', { lineHeight: '1.2' }],
        h2: ['clamp(1.5rem, 1.1rem + 2vw, 2rem)', { lineHeight: '1.15' }],
        h1: ['clamp(2rem, 1.4rem + 3vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        display: [
          'clamp(2.6rem, 1.6rem + 4.5vw, 4rem)',
          { lineHeight: '1.02', letterSpacing: '-0.02em' },
        ],
      },
      spacing: {
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
        section: 'clamp(3rem, 6vw, 6rem)',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(18, 70, 58, 0.06)',
        md: '0 4px 16px rgba(18, 70, 58, 0.08)',
        lg: '0 12px 32px rgba(18, 70, 58, 0.10)',
        lift: '0 4px 16px rgba(18, 70, 58, 0.08), 0 12px 32px rgba(18, 70, 58, 0.10)',
      },
      maxWidth: {
        container: '75rem',
        prose: '68ch',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
