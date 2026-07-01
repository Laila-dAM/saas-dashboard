import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export default function ActiveLink({ href, children, className }: Props) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={
        (className ?? "") +
        " transition " +
        (active ? " text-white" : " text-slate-400 hover:text-white")
      }
    >
      {children}
    </Link>
  )
}