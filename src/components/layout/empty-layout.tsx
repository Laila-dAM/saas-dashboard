import { ReactNode } from "react"

type Props = {
  title?: string
  message?: string
  children?: ReactNode
}

export default function EmptyLayout({
  title = "Nothing here yet",
  message = "There is no data to display.",
  children
}: Props) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-950 text-slate-200 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-lg font-semibold mb-2">{title}</h1>
        <p className="text-sm text-slate-400 mb-4">{message}</p>
        {children}
      </div>
    </div>
  )
}