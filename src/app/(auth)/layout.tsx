import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
      <div className="w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-lg">
        {children}
      </div>
    </div>
  )
}