import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type TopbarProps = {
  userName: string
  onSearchChange: (value: string) => void
  search: string
  onLogout?: () => void
}

export function Topbar({
  userName,
  onSearchChange,
  search,
  onLogout
}: TopbarProps) {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-sm text-slate-400">Welcome,</div>
        <div className="text-sm font-semibold text-white">{userName}</div>
      </div>

      <div className="flex items-center gap-3">
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-64"
        />

        {onLogout && (
          <Button variant="secondary" onClick={onLogout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  )
}