export function formatCurrency(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(value)
}

export function formatNumber(
  value: number,
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale).format(value)
}

export function formatCompactNumber(
  value: number,
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value)
}

export function formatPercent(
  value: number,
  decimals: number = 1
): string {
  return `${value.toFixed(decimals)}%`
}

export function formatDate(
  value: Date | string,
  locale: string = "en-US"
): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium"
  }).format(new Date(value))
}

export function formatDateTime(
  value: Date | string,
  locale: string = "en-US"
): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value))
}

export function formatTime(
  value: Date | string,
  locale: string = "en-US"
): string {
  return new Intl.DateTimeFormat(locale, {
    timeStyle: "short"
  }).format(new Date(value))
}

export function formatRelativeTime(value: Date | string): string {
  const date = new Date(value)
  const seconds = Math.floor((date.getTime() - Date.now()) / 1000)

  const intervals = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 }
  ] as const

  const formatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto"
  })

  for (const interval of intervals) {
    const value = Math.round(seconds / interval.seconds)

    if (Math.abs(value) >= 1) {
      return formatter.format(value, interval.unit)
    }
  }

  return "now"
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) {
    return "0 B"
  }

  const units = ["B", "KB", "MB", "GB", "TB"]
  const index = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${(bytes / Math.pow(1024, index)).toFixed(index === 0 ? 0 : 1)} ${units[index]}`
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "")

  if (digits.length === 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
  }

  if (digits.length === 11) {
    return digits.replace(/(\d)(\d{3})(\d{3})(\d{4})/, "+$1 ($2) $3-$4")
  }

  return value
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function titleCase(value: string): string {
  return value
    .split(" ")
    .map(word => capitalize(word))
    .join(" ")
}

export function truncate(
  value: string,
  length: number = 50
): string {
  if (value.length <= length) {
    return value
  }

  return `${value.slice(0, length)}...`
}