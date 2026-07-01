"use client"

import { useEffect } from "react"
import { ErrorLayout } from "@/components/layout/error-layout"

type ErrorProps = {
  error: Error & {
    digest?: string
  }
  reset: () => void
}

export default function GlobalError({
  error,
  reset
}: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorLayout
      title="Application Error"
      description="An unexpected error occurred while rendering this page. Please try again."
      onRetry={reset}
    />
  )
}