"use client"

type Props = {
  collapsed: boolean
  onToggle: () => void
}

export default function SidebarCollapseButton({ collapsed, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="text-xs text-slate-400 hover:text-white transition"
    >
      {collapsed ? "→" : "←"}
    </button>
  )
}