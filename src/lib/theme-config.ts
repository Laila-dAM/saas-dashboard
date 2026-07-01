export const themeConfig = {
  colors: {
    background: "#0B1120",
    sidebar: "#111827",
    surface: "#182134",
    surfaceHover: "#243145",
    border: "#273449",

    primary: "#7C3AED",
    primaryHover: "#8B5CF6",
    secondary: "#6366F1",
    accent: "#22D3EE",

    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",

    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
      muted: "#64748B"
    },

    chart: {
      primary: "#7C3AED",
      secondary: "#22D3EE",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444"
    }
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    xl: "24px",
    full: "9999px"
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.08)",
    md: "0 8px 20px rgba(0,0,0,0.20)",
    lg: "0 16px 40px rgba(0,0,0,0.30)"
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease"
  },

  layout: {
    sidebarWidth: 280,
    topbarHeight: 72,
    contentMaxWidth: 1600
  },

  animation: {
    duration: 0.4,
    stagger: 0.08
  }
} as const

export type ThemeConfig = typeof themeConfig

export default themeConfig