import Link from "next/link"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="w-full max-w-xl text-center">
        <span className="mb-4 inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
          Error 404
        </span>

        <h1 className="mb-4 text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          Page Not Found
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-lg leading-8 text-[var(--text-secondary)]">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mx-auto mb-12 flex h-48 w-48 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
          <Search className="h-24 w-24 text-[var(--accent)]" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            <Home className="h-5 w-5" />
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}