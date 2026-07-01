import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "SaaS Dashboard",
  description: "Premium SaaS analytics dashboard"
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 min-h-screen">
        {children}
      </body>
    </html>
  )
}