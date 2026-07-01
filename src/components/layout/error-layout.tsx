"use client"

import Link from "next/link"
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"

type ErrorLayoutProps = {
  title?: string
  description?: string
  showBackButton?: boolean
  showRetryButton?: boolean
  onRetry?: () => void
}

export function ErrorLayout({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading this page. Please try again.",
  showBackButton = true,
  showRetryButton = true,
  onRetry
}: ErrorLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-lg">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--danger)]/10">
          <AlertTriangle
            className="h-10 w-10 text-[var(--danger)]"
            strokeWidth={2}
          />
        </div>

        <h1 className="mb-3 text-3xl font-bold text-[var(--text-primary)]">
          {title}
        </h1>

        <p className="mx-auto mb-10 max-w-md text-base leading-7 text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {showRetryButton && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              <RefreshCw className="h-5 w-5" />
              Try Again
            </button>
          )}

          {showBackButton && (
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}