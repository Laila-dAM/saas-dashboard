"use client"

import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical"
  label?: string
}

export function Divider({
  orientation = "horizontal",
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "inline-flex h-full items-center justify-center",
          className
        )}
      >
        <div className="h-full w-px bg-[var(--border)]" />
      </div>
    )
  }

  if (label) {
    return (
      <div
        className={cn(
          "flex items-center gap-4",
          className
        )}
      >
        <div className="h-px flex-1 bg-[var(--border)]" />

        <span className="whitespace-nowrap text-sm font-medium text-[var(--text-secondary)]">
          {label}
        </span>

        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
    )
  }

  return (
    <hr
      className={cn(
        "h-px w-full border-0 bg-[var(--border)]",
        className
      )}
      {...props}
    />
  )
}