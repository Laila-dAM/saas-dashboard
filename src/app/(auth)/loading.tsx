import { Skeleton } from "@/components/ui/skeleton"

export default function AuthLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">
        <Skeleton className="mx-auto mb-8 h-12 w-40 rounded-lg" />

        <Skeleton className="mb-2 h-8 w-48" />
        <Skeleton className="mb-8 h-5 w-64" />

        <div className="space-y-5">
          <div>
            <Skeleton className="mb-2 h-4 w-20" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          <div>
            <Skeleton className="mb-2 h-4 w-24" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          <Skeleton className="mt-2 h-12 w-full rounded-xl" />

          <div className="flex items-center gap-3 py-2">
            <Skeleton className="h-px flex-1" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-px flex-1" />
          </div>

          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}