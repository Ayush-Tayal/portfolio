const palette = {
  dark: {
    bg: "#0B0F14",
    bgElevated: "#11161D",
    surface: "#151B23",
    surfaceHover: "#1B222B",
    surfaceTranslucent: "rgba(17,22,29,0.72)",
    textPrimary: "#E6EDF3",
    textSecondary: "#9BA7B4",
    textTertiary: "#6B7785",
    brand: "#10B981",
    brandHover: "#34D399",
    brandSubtle: "rgba(16,185,129,0.14)",
    onBrand: "#04120C",
    accent: "#60A5FA",
    border: "rgba(255,255,255,0.09)",
    borderStrong: "rgba(255,255,255,0.18)",
    focusRing: "#34D399",
    overlay: "rgba(3,6,10,0.65)",
    danger: "#F87171",
    success: "#34D399",
    mapFilter: "grayscale(1) contrast(0.9) invert(0.92) hue-rotate(180deg)",
  },
  light: {
    bg: "#FFFFFF",
    bgElevated: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceHover: "#F1F5F9",
    surfaceTranslucent: "rgba(255,255,255,0.78)",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textTertiary: "#94A3B8",
    brand: "#059669",
    brandHover: "#047857",
    brandSubtle: "rgba(5,150,105,0.10)",
    onBrand: "#FFFFFF",
    accent: "#2563EB",
    border: "rgba(15,23,42,0.10)",
    borderStrong: "rgba(15,23,42,0.20)",
    focusRing: "#059669",
    overlay: "rgba(15,23,42,0.45)",
    danger: "#DC2626",
    success: "#059669",
    mapFilter: "grayscale(0.2)",
  },
};

const shadow = {
  dark: {
    sm: "0 1px 2px rgba(0,0,0,.5)",
    md: "0 4px 16px rgba(0,0,0,.45)",
    lg: "0 16px 48px rgba(0,0,0,.55)",
    ring: "inset 0 1px 0 rgba(255,255,255,.06)",
  },
  light: {
    sm: "0 1px 2px rgba(15,23,42,.06)",
    md: "0 4px 16px rgba(15,23,42,.08)",
    lg: "0 16px 48px rgba(15,23,42,.12)",
    ring: "inset 0 1px 0 rgba(255,255,255,1)",
  },
};

// Fixed brand colors (tech logos, social platforms) — never themed by mode.
const vendor = {
  javascript: "#f0db4f",
  typescript: "#3178C6",
  openai: "#74AA9C",
  claude: "#D97757",
  gemini: "#4285F4",
  langchain: "#4CA6A0",
  langgraph: "#FF6B6B",
  agents: "#8B5CF6",
  mcp: "#D97757",
  vercel: "#8A8A8A",
  prompt: "#10B981",
  typesense: "#E0457B",
  html: "#E34F26",
  css: "#1572B6",
  react: "#61DBFB",
  nextjs: "#8A8A8A",
  nodejs: "#3C873A",
  express: "#9B9B9B",
  mongodb: "#4DB33D",
  tailwind: "#38BDF8",
  bootstrap: "#7952B3",
  mui: "#2196F3",
  antd: "#1890FF",
  redux: "#764ABC",
  firebase: "#F5820D",
  github: "#C9D1D9",
  bitbucket: "#2684FF",
  jira: "#2684FF",
  gmail: "#EA4335",
  whatsapp: "#25D366",
  linkedin: "#0A66C2",
  phone: "#10B981",
};

const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

const radius = { sm: 6, md: 10, lg: 16, xl: 24, full: 999 };

const type = {
  display: `'Sora Variable', Sora, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`,
  body: `'Inter Variable', Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`,
  mono: `'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace`,
};

const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };

const motion = {
  durFast: 150,
  durBase: 250,
  durSlow: 500,
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  stagger: 80,
};

const layout = {
  navH: 72,
  navHScrolled: 56,
  contentMax: 1200,
  gutter: "clamp(16px, 4vw, 48px)",
  sectionPy: "clamp(64px, 8vw, 128px)",
};

const zIndex = { nav: 1100, drawer: 1200, overlay: 1150 };

const tokens = { palette, shadow, vendor, space, radius, type, breakpoints, motion, layout, zIndex };

export default tokens;
