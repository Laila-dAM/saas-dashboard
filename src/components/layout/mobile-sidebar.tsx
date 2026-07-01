"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type MobileSidebarItem = {
  label: string
  href: string
  icon: React.ReactNode
}

type MobileSidebarProps = {
  items: MobileSidebarItem[]
  logo?: React.ReactNode
  title?: string
  footer?: React.ReactNode
}

export function MobileSidebar({
  items,
  logo,
  title = "Dashboard",
  footer
}: MobileSidebarProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)] lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full w-72 flex-col border-r border-[var(--border)] bg-[var(--sidebar)] transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
            <div className="flex items-center gap-3">
              {logo}

              <span className="text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </span>
            </div>

            <button
              type="button"
              aria-label="Close sidebar"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 p-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
              >
                <span className="flex h-5 w-5 items-center justify-center">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {footer && (
            <div className="border-t border-[var(--border)] p-4">
              {footer}
            </div>
          )}
        </aside>
      </div>
    </>
  )
}