"use client"

import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string
  description?: string
  actions?: React.ReactNode
}

export function Section({
  title,
  description,
  actions,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("space-y-6", className)}
      {...props}
    >
      {(title || description || actions) && (
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            {title && (
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            )}
          </div>

          {actions && (
            <div className="flex items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      )}

      <div>{children}</div>
    </section>
  )
}