"use client"

import { useEffect } from "react"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function DashboardError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4 p-6 bg-slate-900 border border-slate-800 rounded-lg max-w-md w-full">
        <h1 className="text-lg font-semibold">Dashboard error</h1>
        <p className="text-sm text-slate-400">
          Something went wrong while loading dashboard data.
        </p>

        <button
          onClick={reset}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-md"
        >
          Try again
        </button>
      </div>
    </div>
  )
}