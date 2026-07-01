export const APP_NAME = "SaaS Dashboard"

export const APP_DESCRIPTION =
  "Premium SaaS Dashboard built with Next.js, React and TypeScript."

export const APP_VERSION = "1.0.0"

export const DEFAULT_LOCALE = "en-US"

export const DEFAULT_CURRENCY = "USD"

export const DEFAULT_THEME = "dark"

export const SIDEBAR_WIDTH = 280

export const TOPBAR_HEIGHT = 72

export const CONTENT_MAX_WIDTH = 1600

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100]
} as const

export const DATE_RANGES = [
  "Today",
  "Last 7 Days",
  "Last 30 Days",
  "Last 90 Days",
  "This Year",
  "Custom"
] as const

export const USER_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PENDING: "Pending",
  SUSPENDED: "Suspended"
} as const

export const SUBSCRIPTION_PLANS = {
  FREE: "Free",
  STARTER: "Starter",
  PRO: "Pro",
  ENTERPRISE: "Enterprise"
} as const

export const KPI_COLORS = {
  REVENUE: "#10B981",
  USERS: "#22D3EE",
  GROWTH: "#7C3AED",
  CHURN: "#EF4444",
  WARNING: "#F59E0B"
} as const

export const CHART_COLORS = [
  "#7C3AED",
  "#22D3EE",
  "#10B981",
  "#F59E0B",
  "#EF4444"
] as const

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  ANALYTICS: "/analytics",
  BILLING: "/billing",
  LOGS: "/logs",
  SETTINGS: "/settings"
} as const

export const STORAGE_KEYS = {
  THEME: "theme",
  TOKEN: "access_token",
  SIDEBAR: "sidebar_state"
} as const

export const API_ENDPOINTS = {
  AUTH: "/api/auth",
  USERS: "/api/users",
  ANALYTICS: "/api/analytics",
  BILLING: "/api/billing",
  LOGS: "/api/logs",
  SETTINGS: "/api/settings"
} as const

export const ANIMATION = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.6
} as const

export const Z_INDEX = {
  DROPDOWN: 50,
  STICKY: 100,
  OVERLAY: 200,
  MODAL: 300,
  TOAST: 400,
  TOOLTIP: 500
} as const