/**
 * Design Tokens — Hamza Khan Brand
 * 
 * These tokens are the source of truth for the visual system.
 * They map to CSS custom properties set in theme/ThemeProvider.
 * 
 * The ThemeSettings CMS model can override color values,
 * allowing the owner to adjust brand colors without code changes.
 */

export const defaultColors = {
  background: '#090912',
  surface: '#171329',
  primary: '#623CE8',    // violet
  secondary: '#37226D',  // deep purple
  accent: '#354DFA',     // blue
  foreground: '#F7F5FB', // off-white
  muted: 'rgba(247, 245, 251, 0.5)',
  border: 'rgba(247, 245, 251, 0.08)',
  borderHover: 'rgba(247, 245, 251, 0.15)',
};

export const typography = {
  fontDisplay: "'Outfit', sans-serif",
  fontBody: "'Inter', sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

/**
 * Responsive type scale.
 * Each token has desktop and mobile sizes.
 * Implemented via CSS clamp() for fluid scaling.
 */
export const typeScale = {
  'display-xl': {
    desktop: { size: '4.5rem', lineHeight: 1.05, weight: 800, letterSpacing: '-0.03em' },
    mobile:  { size: '2.5rem', lineHeight: 1.1,  weight: 800, letterSpacing: '-0.02em' },
    clamp: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
  },
  'display-lg': {
    desktop: { size: '3.5rem', lineHeight: 1.1, weight: 700, letterSpacing: '-0.025em' },
    mobile:  { size: '2rem',   lineHeight: 1.15, weight: 700, letterSpacing: '-0.02em' },
    clamp: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)',
  },
  'display-md': {
    desktop: { size: '2.5rem', lineHeight: 1.15, weight: 700, letterSpacing: '-0.02em' },
    mobile:  { size: '1.75rem', lineHeight: 1.2, weight: 700, letterSpacing: '-0.015em' },
    clamp: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
  },
  'heading-2xl': {
    desktop: { size: '2.25rem', lineHeight: 1.2, weight: 700, letterSpacing: '-0.02em' },
    mobile:  { size: '1.625rem', lineHeight: 1.25, weight: 700, letterSpacing: '-0.015em' },
    clamp: 'clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem)',
  },
  'heading-lg': {
    desktop: { size: '1.75rem', lineHeight: 1.25, weight: 600, letterSpacing: '-0.015em' },
    mobile:  { size: '1.375rem', lineHeight: 1.3, weight: 600, letterSpacing: '-0.01em' },
    clamp: 'clamp(1.375rem, 2vw + 0.5rem, 1.75rem)',
  },
  'heading-md': {
    desktop: { size: '1.25rem', lineHeight: 1.35, weight: 600, letterSpacing: '-0.01em' },
    mobile:  { size: '1.125rem', lineHeight: 1.35, weight: 600, letterSpacing: '-0.005em' },
    clamp: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem)',
  },
  'body-lg': {
    desktop: { size: '1.125rem', lineHeight: 1.6, weight: 400, letterSpacing: '0' },
    mobile:  { size: '1rem', lineHeight: 1.6, weight: 400, letterSpacing: '0' },
    clamp: 'clamp(1rem, 1vw + 0.5rem, 1.125rem)',
  },
  'body-md': {
    desktop: { size: '1rem', lineHeight: 1.6, weight: 400, letterSpacing: '0' },
    mobile:  { size: '0.9375rem', lineHeight: 1.6, weight: 400, letterSpacing: '0' },
    clamp: 'clamp(0.9375rem, 0.8vw + 0.5rem, 1rem)',
  },
  'body-sm': {
    desktop: { size: '0.875rem', lineHeight: 1.5, weight: 400, letterSpacing: '0.005em' },
    mobile:  { size: '0.8125rem', lineHeight: 1.5, weight: 400, letterSpacing: '0.005em' },
    clamp: 'clamp(0.8125rem, 0.6vw + 0.5rem, 0.875rem)',
  },
  label: {
    desktop: { size: '0.75rem', lineHeight: 1.4, weight: 600, letterSpacing: '0.08em' },
    mobile:  { size: '0.6875rem', lineHeight: 1.4, weight: 600, letterSpacing: '0.1em' },
    clamp: 'clamp(0.6875rem, 0.5vw + 0.4rem, 0.75rem)',
  },
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
  '6xl': '9rem',
};

export const breakpoints = {
  sm: '480px',   // small mobile
  md: '768px',   // tablet
  lg: '1024px',  // desktop
  xl: '1280px',  // large desktop
  '2xl': '1536px',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};
