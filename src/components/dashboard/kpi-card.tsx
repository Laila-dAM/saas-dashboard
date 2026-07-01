import React from "react"
import { cn } from "@/lib/utils"

type KpiCardProps = {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: string | number
    positive?: boolean
  }
  className?: string
}

export function KpiCard({
  title,
  value,
  description,
  trend,
  className
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-800 bg-slate-900 p-4",
        className
      )}
    >
      <div className="text-sm text-slate-400">{title}</div>

      <div className="mt-2 text-2xl font-semibold text-white">
        {value}
      </div>

      {(description || trend) && (
        <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
          {description && <span>{description}</span>}

          {trend && (
            <span
              className={
                trend.positive ? "text-green-400" : "text-red-400"
              }
            >
              {trend.value}
            </span>
          )}
        </div>
      )}
    </div>
  )
}