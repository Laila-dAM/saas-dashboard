import { create } from "zustand"

type Theme = "light" | "dark"

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark"
  }

  const storedTheme = localStorage.getItem("theme") as Theme | null

  if (storedTheme === "light" || storedTheme === "dark") {
    document.documentElement.classList.toggle("dark", storedTheme === "dark")
    return storedTheme
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const theme: Theme = prefersDark ? "dark" : "light"

  document.documentElement.classList.toggle("dark", theme === "dark")

  return theme
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getInitialTheme(),

  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      document.documentElement.classList.toggle("dark", theme === "dark")
    }

    set({ theme })
  },

  toggleTheme: () => {
    const nextTheme: Theme = get().theme === "dark" ? "light" : "dark"

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", nextTheme)
      document.documentElement.classList.toggle("dark", nextTheme === "dark")
    }

    set({ theme: nextTheme })
  }
}))