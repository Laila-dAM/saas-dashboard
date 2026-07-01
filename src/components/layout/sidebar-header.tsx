import { ReactNode } from "react"

type Props = {
  title?: string
  icon?: ReactNode
}

export default function SidebarHeader({ title = "SaaS", icon }: Props) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-800">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  )
}