import { ReactNode } from "react"

type Props = {
  label: string
  children: ReactNode
}

export default function SidebarGroup({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="px-3 pt-4 pb-2 text-xs uppercase tracking-wider text-slate-500">
        {label}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}