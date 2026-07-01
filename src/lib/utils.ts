import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function generateId(length = 12): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("")
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomFloat(
  min: number,
  max: number,
  decimals = 2
): number {
  return Number((Math.random() * (max - min) + min).toFixed(decimals))
}

export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max)
}

export function percentage(
  value: number,
  total: number
): number {
  if (total === 0) {
    return 0
  }

  return (value / total) * 100
}

export function isBrowser(): boolean {
  return typeof window !== "undefined"
}

export function copyToClipboard(value: string): Promise<void> {
  if (!isBrowser()) {
    return Promise.reject(new Error("Clipboard is not available"))
  }

  return navigator.clipboard.writeText(value)
}

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let waiting = false

  return (...args: Parameters<T>) => {
    if (waiting) {
      return
    }

    callback(...args)

    waiting = true

    setTimeout(() => {
      waiting = false
    }, delay)
  }
}

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: K[]
): Omit<T, K> {
  const clone = { ...object }

  keys.forEach(key => {
    delete clone[key]
  })

  return clone
}

export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K> {
  return keys.reduce((result, key) => {
    result[key] = object[key]
    return result
  }, {} as Pick<T, K>)
}