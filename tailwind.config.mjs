/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--color-brand-midnight-navy)',
          burgundy: 'var(--color-brand-deep-burgundy)',
          ivory: 'var(--color-brand-warm-ivory)',
          'soft-grey': 'var(--color-brand-soft-grey)',
          slate: 'var(--color-brand-slate)',
          sage: 'var(--color-brand-sage-mist)',
          rose: 'var(--color-brand-dusty-rose)',
          sand: 'var(--color-brand-sand)',
          blue: 'var(--color-brand-dusty-blue)',
        },
        utility: {
          white: 'var(--color-utility-white)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      maxWidth: {
        reading: 'var(--container-reading)',
        content: 'var(--container-content)',
        wide: 'var(--container-wide)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};
