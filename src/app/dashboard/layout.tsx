import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-200">
      <aside className="w-64 border-r border-slate-800 p-4 hidden md:block">
        <div className="text-lg font-semibold mb-6">SaaS</div>
        <nav className="space-y-2 text-sm text-slate-400">
          <a href="/dashboard" className="block hover:text-white">
            Overview
          </a>
          <a href="/users" className="block hover:text-white">
            Users
          </a>
          <a href="/analytics" className="block hover:text-white">
            Analytics
          </a>
          <a href="/billing" className="block hover:text-white">
            Billing
          </a>
          <a href="/logs" className="block hover:text-white">
            Logs
          </a>
          <a href="/settings" className="block hover:text-white">
            Settings
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}