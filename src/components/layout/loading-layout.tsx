import { Skeleton, SkeletonCircle } from "@/components/ui/skeleton"

export function LoadingLayout() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="flex">
        <aside className="hidden w-72 border-r border-[var(--border)] bg-[var(--sidebar)] lg:flex lg:flex-col">
          <div className="flex h-20 items-center px-6">
            <Skeleton className="h-10 w-40 rounded-lg" />
          </div>

          <nav className="flex flex-1 flex-col gap-3 px-4 py-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-12 w-full rounded-xl"
              />
            ))}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="flex h-[72px] items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-8">
            <Skeleton className="h-10 w-72 rounded-xl" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-10 w-10 rounded-xl" />
              <SkeletonCircle className="h-11 w-11" />
            </div>
          </header>

          <main className="flex-1 p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <Skeleton className="mb-3 h-8 w-64" />
                <Skeleton className="h-5 w-96" />
              </div>

              <Skeleton className="h-11 w-36 rounded-xl" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <Skeleton className="mb-4 h-5 w-28" />
                  <Skeleton className="mb-4 h-10 w-24" />
                  <Skeleton className="h-3 w-full rounded-full" />
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 xl:col-span-2">
                <Skeleton className="mb-6 h-6 w-48" />
                <Skeleton className="h-80 w-full rounded-2xl" />
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <Skeleton className="mb-6 h-6 w-40" />

                <div className="space-y-5">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <SkeletonCircle className="h-12 w-12" />

                      <div className="flex-1">
                        <Skeleton className="mb-2 h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}