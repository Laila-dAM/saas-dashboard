import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  label: string
  href: string
  collapsed?: boolean
}

export default function NavItem({ label, href, collapsed }: Props) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={
        "px-3 py-2 rounded-md text-sm transition flex items-center " +
        (active
          ? "bg-indigo-600 text-white"
          : "text-slate-400 hover:bg-slate-800 hover:text-white")
      }
    >
      {collapsed ? label.charAt(0) : label}
    </Link>
  )
}