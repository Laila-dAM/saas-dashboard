"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string) => {
    if (typeof window === "undefined") {
      return false
    }

    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(() => getMatches(query))

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    setMatches(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)

      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    mediaQuery.addListener(handleChange)

    return () => {
      mediaQuery.removeListener(handleChange)
    }
  }, [query])

  return matches
}