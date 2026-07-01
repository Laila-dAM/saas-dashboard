import { themeConfig } from "./theme-config"

export const chartConfig = {
  colors: {
    primary: themeConfig.colors.chart.primary,
    secondary: themeConfig.colors.chart.secondary,
    success: themeConfig.colors.chart.success,
    warning: themeConfig.colors.chart.warning,
    danger: themeConfig.colors.chart.danger,
    grid: themeConfig.colors.border,
    axis: themeConfig.colors.text.secondary,
    tooltipBackground: themeConfig.colors.surface,
    tooltipBorder: themeConfig.colors.border,
    tooltipText: themeConfig.colors.text.primary
  },

  palette: [
    themeConfig.colors.chart.primary,
    themeConfig.colors.chart.secondary,
    themeConfig.colors.chart.success,
    themeConfig.colors.chart.warning,
    themeConfig.colors.chart.danger
  ],

  line: {
    type: "monotone",
    strokeWidth: 3,
    dot: {
      r: 4,
      strokeWidth: 2
    },
    activeDot: {
      r: 6,
      strokeWidth: 2
    }
  },

  area: {
    strokeWidth: 3,
    fillOpacity: 0.2
  },

  bar: {
    radius: [8, 8, 0, 0],
    barSize: 24
  },

  pie: {
    innerRadius: 70,
    outerRadius: 100,
    paddingAngle: 3
  },

  radar: {
    strokeWidth: 2,
    fillOpacity: 0.25
  },

  grid: {
    strokeDasharray: "4 4",
    vertical: false
  },

  axis: {
    tickLine: false,
    axisLine: false,
    fontSize: 12
  },

  legend: {
    iconType: "circle",
    iconSize: 10
  },

  animation: {
    duration: 600,
    easing: "ease-out"
  },

  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 0
  }
} as const

export default chartConfig