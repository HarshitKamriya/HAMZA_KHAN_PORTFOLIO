import { createContext, useContext, useMemo } from 'react';
import { defaultColors, typography, typeScale, transitions, radii } from './tokens';

const ThemeContext = createContext(null);

/**
 * ThemeProvider
 * 
 * Merges CMS-provided ThemeSettings (colors) with default tokens,
 * then injects them as CSS custom properties on :root.
 * 
 * This allows the CMS to override brand colors without code changes.
 * Components reference var(--color-*) instead of hardcoded values.
 */
export function ThemeProvider({ themeSettings = {}, children }) {
  const colors = useMemo(() => ({
    ...defaultColors,
    ...(themeSettings.background && { background: themeSettings.background }),
    ...(themeSettings.foreground && { foreground: themeSettings.foreground }),
    ...(themeSettings.surface && { surface: themeSettings.surface }),
    ...(themeSettings.primaryAccent && { primary: themeSettings.primaryAccent }),
    ...(themeSettings.secondaryAccent && { secondary: themeSettings.secondaryAccent }),
    ...(themeSettings.ctaAccent && { accent: themeSettings.ctaAccent }),
  }), [themeSettings]);

  const theme = useMemo(() => ({
    colors,
    typography,
    typeScale,
    transitions,
    radii,
  }), [colors]);

  // Inject CSS custom properties
  const cssVars = useMemo(() => {
    const vars = {};
    // Colors
    Object.entries(colors).forEach(([key, value]) => {
      vars[`--color-${key}`] = value;
    });
    // Typography
    vars['--font-display'] = typography.fontDisplay;
    vars['--font-body'] = typography.fontBody;
    // Type scale as CSS clamps
    Object.entries(typeScale).forEach(([key, value]) => {
      vars[`--text-${key}`] = value.clamp;
      vars[`--text-${key}-weight`] = String(value.desktop.weight);
      vars[`--text-${key}-lh`] = String(value.desktop.lineHeight);
      vars[`--text-${key}-ls`] = value.desktop.letterSpacing;
    });
    // Transitions
    Object.entries(transitions).forEach(([key, value]) => {
      vars[`--transition-${key}`] = value;
    });
    // Radii
    Object.entries(radii).forEach(([key, value]) => {
      vars[`--radius-${key}`] = value;
    });
    return vars;
  }, [colors]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
