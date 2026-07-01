import React from "react"
import Link from "next/link"

type SidebarItem = {
  label: string
  href: string
  icon?: React.ReactNode
}

type SidebarProps = {
  items: SidebarItem[]
  activePath: string
}

export function Sidebar({ items, activePath }: SidebarProps) {
  return (
    <aside className="h-full w-64 border-r border-slate-800 bg-slate-950 p-4">
      <div className="mb-6 text-lg font-semibold text-white">
        Dashboard
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const active = activePath === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition " +
                (active
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white")
              }
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}