import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function LayoutContainer({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-slate-200">
      {children}
    </div>
  )
}