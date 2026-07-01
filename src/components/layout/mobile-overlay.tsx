"use client"

import { cn } from "@/lib/utils"

type MobileOverlayProps = {
  open: boolean
  onClick?: () => void
  className?: string
}

export function MobileOverlay({
  open,
  onClick,
  className
}: MobileOverlayProps) {
  return (
    <div
      aria-hidden={!open}
      onClick={onClick}
      className={cn(
        "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
        className
      )}
    />
  )
}