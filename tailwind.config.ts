import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px"
      }
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",

        border: "var(--border)",

        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",

        secondary: "var(--secondary)",
        accent: "var(--accent)",

        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        info: "var(--info)",

        sidebar: "var(--sidebar)",

        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },

        chart: {
          primary: "var(--chart-primary)",
          secondary: "var(--chart-secondary)",
          success: "var(--chart-success)",
          warning: "var(--chart-warning)",
          danger: "var(--chart-danger)"
        }
      },

      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 8px 24px rgba(0,0,0,0.08)",
        lg: "0 16px 48px rgba(0,0,0,0.12)",
        xl: "0 24px 64px rgba(0,0,0,0.16)"
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },

      keyframes: {
        "fade-in": {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },

        "fade-out": {
          from: {
            opacity: "1"
          },
          to: {
            opacity: "0"
          }
        },

        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(12px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        "slide-down": {
          from: {
            opacity: "0",
            transform: "translateY(-12px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.96)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      },

      animation: {
        "fade-in": "fade-in .25s ease-out",
        "fade-out": "fade-out .25s ease-out",
        "slide-up": "slide-up .3s ease-out",
        "slide-down": "slide-down .3s ease-out",
        "scale-in": "scale-in .25s ease-out"
      }
    }
  },

  plugins: []
}

export default config