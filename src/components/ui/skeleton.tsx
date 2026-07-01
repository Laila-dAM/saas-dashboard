import { cn } from "@/lib/utils"

type SkeletonProps = {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl border border-[var(--border)] bg-[var(--surface)]",
        className
      )}
    />
  )
}

export function SkeletonText({ className }: SkeletonProps) {
  return (
    <Skeleton
      className={cn("h-4 w-full rounded-md", className)}
    />
  )
}

export function SkeletonCircle({ className }: SkeletonProps) {
  return (
    <Skeleton
      className={cn("rounded-full", className)}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <Skeleton className="mb-5 h-5 w-36" />
      <Skeleton className="mb-3 h-10 w-28" />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  )
}

export function SkeletonTableRow() {
  return (
    <div className="grid grid-cols-5 gap-4 border-b border-[var(--border)] py-4">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-5 w-28" />
      <Skeleton className="h-5 w-20" />
      <Skeleton className="h-5 w-16" />
    </div>
  )
}