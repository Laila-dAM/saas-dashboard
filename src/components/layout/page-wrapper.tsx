"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

type PageWrapperProps = {
  children: ReactNode
  title?: string
  description?: string
  actions?: ReactNode
  className?: string
  contentClassName?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function PageWrapper({
  children,
  title,
  description,
  actions,
  className,
  contentClassName,
  size = "xl"
}: PageWrapperProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-[var(--background)] py-8",
        className
      )}
    >
      <Container size={size}>
        {(title || description || actions) && (
          <header className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              {title && (
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  {title}
                </h1>
              )}

              {description && (
                <p className="max-w-3xl text-base text-[var(--text-secondary)]">
                  {description}
                </p>
              )}
            </div>

            {actions && (
              <div className="flex flex-wrap items-center gap-3">
                {actions}
              </div>
            )}
          </header>
        )}

        <div className={cn("space-y-6", contentClassName)}>
          {children}
        </div>
      </Container>
    </main>
  )
}