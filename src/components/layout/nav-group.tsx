import { ReactNode } from "react"

type Props = {
  label: string
  children: ReactNode
}

export default function NavGroup({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="px-3 pt-4 pb-2 text-xs text-slate-500 uppercase tracking-wider">
        {label}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}