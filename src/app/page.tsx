import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold">SaaS Dashboard</h1>
        <p className="text-slate-400 text-sm">
          Premium analytics and management platform
        </p>

        <Link
          href="/dashboard"
          className="inline-flex px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
        >
          Enter Dashboard
        </Link>
      </div>
    </main>
  )
}