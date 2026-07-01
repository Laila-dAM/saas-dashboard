"use client"

import { cn } from "@/lib/utils"

type SpacerProps = {
  size?: number | string
  direction?: "horizontal" | "vertical"
  className?: string
}

export function Spacer({
  size = 24,
  direction = "vertical",
  className
}: SpacerProps) {
  const value =
    typeof size === "number" ? `${size}px` : size

  return (
    <div
      aria-hidden="true"
      className={cn("shrink-0", className)}
      style={
        direction === "vertical"
          ? {
              width: "100%",
              height: value
            }
          : {
              width: value,
              height: "100%",
              display: "inline-block"
            }
      }
    />
  )
}