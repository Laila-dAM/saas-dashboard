import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type HeaderProps = {
  title: string
  subtitle?: string
  search: string
  onSearchChange: (value: string) => void
  onActionClick?: () => void
  actionLabel?: string
}

export function Header({
  title,
  subtitle,
  search,
  onSearchChange,
  onActionClick,
  actionLabel
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-lg font-semibold text-white">{title}</div>
        {subtitle && (
          <div className="text-sm text-slate-400">{subtitle}</div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-64"
        />

        {onActionClick && actionLabel && (
          <Button onClick={onActionClick}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  )
}