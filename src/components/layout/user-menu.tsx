import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type UserMenuProps = {
  name: string
  email: string
  role?: string
  onLogout?: () => void
  onProfile?: () => void
  onSettings?: () => void
}

export function UserMenu({
  name,
  email,
  role,
  onLogout,
  onProfile,
  onSettings
}: UserMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="secondary" onClick={() => setOpen(!open)}>
        {name}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-md border border-slate-800 bg-slate-950 p-3 shadow-lg">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold text-white">{name}</div>
            <div className="text-xs text-slate-400">{email}</div>

            {role && (
              <div className="mt-1">
                <Badge variant="info">{role}</Badge>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {onProfile && (
              <button
                onClick={onProfile}
                className="text-left text-sm text-slate-300 hover:text-white"
              >
                Profile
              </button>
            )}

            {onSettings && (
              <button
                onClick={onSettings}
                className="text-left text-sm text-slate-300 hover:text-white"
              >
                Settings
              </button>
            )}

            {onLogout && (
              <button
                onClick={onLogout}
                className="text-left text-sm text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}