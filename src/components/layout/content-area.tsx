import React from "react"

type ContentAreaProps = {
  children: React.ReactNode
  className?: string
}

export function ContentArea({ children, className }: ContentAreaProps) {
  return (
    <main className={"flex-1 p-6 " + (className ?? "")}>
      {children}
    </main>
  )
}