import React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-slate-800 text-slate-200",
    success: "bg-green-600/20 text-green-400",
    warning: "bg-yellow-600/20 text-yellow-400",
    danger: "bg-red-600/20 text-red-400",
    info: "bg-blue-600/20 text-blue-400"
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}