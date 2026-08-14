import { createGlobalStyle } from "styled-components";
import tokens from "./tokens";

const modeVars = (mode) => {
  const c = tokens.palette[mode];
  const s = tokens.shadow[mode];
  return `
    --color-bg: ${c.bg};
    --color-bg-elevated: ${c.bgElevated};
    --color-surface: ${c.surface};
    --color-surface-hover: ${c.surfaceHover};
    --color-surface-translucent: ${c.surfaceTranslucent};
    --color-text-primary: ${c.textPrimary};
    --color-text-secondary: ${c.textSecondary};
    --color-text-tertiary: ${c.textTertiary};
    --color-brand: ${c.brand};
    --color-brand-hover: ${c.brandHover};
    --color-brand-subtle: ${c.brandSubtle};
    --color-on-brand: ${c.onBrand};
    --color-accent: ${c.accent};
    --color-border: ${c.border};
    --color-border-strong: ${c.borderStrong};
    --color-focus-ring: ${c.focusRing};
    --color-overlay: ${c.overlay};
    --color-danger: ${c.danger};
    --color-success: ${c.success};
    --shadow-sm: ${s.sm};
    --shadow-md: ${s.md};
    --shadow-lg: ${s.lg};
    --shadow-ring: ${s.ring};
    --map-filter: ${c.mapFilter};
  `;
};

const vendorVars = Object.entries(tokens.vendor)
  .map(([key, value]) => `--vendor-${key}: ${value};`)
  .join("\n    ");

const staticVars = `
    --space-0: 0px; --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
    --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px; --space-10: 128px;

    --radius-sm: ${tokens.radius.sm}px; --radius-md: ${tokens.radius.md}px;
    --radius-lg: ${tokens.radius.lg}px; --radius-xl: ${tokens.radius.xl}px; --radius-full: ${tokens.radius.full}px;

    --font-display: ${tokens.type.display};
    --font-body: ${tokens.type.body};
    --font-mono: ${tokens.type.mono};

    --fs-xs: 0.8125rem; --fs-sm: 0.875rem; --fs-base: 1rem;
    --fs-lg: clamp(1.0625rem, 0.99rem + 0.35vw, 1.1875rem);
    --fs-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
    --fs-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --fs-3xl: clamp(2rem, 1.6rem + 2vw, 3rem);
    --fs-4xl: clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem);

    --lh-tight: 1.15; --lh-snug: 1.3; --lh-normal: 1.6; --lh-relaxed: 1.75;
    --tracking-tight: -0.02em; --tracking-wide: 0.08em;

    --dur-fast: ${tokens.motion.durFast}ms; --dur-base: ${tokens.motion.durBase}ms; --dur-slow: ${tokens.motion.durSlow}ms;
    --ease-out: ${tokens.motion.easeOut}; --ease-in-out: ${tokens.motion.easeInOut};

    --nav-h: ${tokens.layout.navH}px; --nav-h-scrolled: ${tokens.layout.navHScrolled}px;
    --content-max: ${tokens.layout.contentMax}px; --gutter: ${tokens.layout.gutter}; --section-py: ${tokens.layout.sectionPy};

    --bp-sm: ${tokens.breakpoints.sm}px; --bp-md: ${tokens.breakpoints.md}px;
    --bp-lg: ${tokens.breakpoints.lg}px; --bp-xl: ${tokens.breakpoints.xl}px;

    --z-nav: ${tokens.zIndex.nav};
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${modeVars("light")}
    ${vendorVars}
    ${staticVars}
  }

  :root[data-theme="dark"] {
    ${modeVars("dark")}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-text-primary);
    font-family: var(--font-body);
    font-size: var(--fs-base);
    line-height: var(--lh-normal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }

  ::selection {
    background: var(--color-brand-subtle);
    color: var(--color-text-primary);
  }

  :focus-visible {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  #home, #about, #skills, #experience, #education, #projects, #publication, #contact {
    scroll-margin-top: calc(var(--nav-h-scrolled) + var(--space-4));
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  .noty_theme__bootstrap-v4.noty_bar {
    background: var(--color-surface) !important;
    border: 1px solid var(--color-border) !important;
    border-radius: var(--radius-md) !important;
  }

  .noty_theme__bootstrap-v4 .noty_body {
    color: var(--color-text-primary) !important;
  }
`;

export default GlobalStyle;
