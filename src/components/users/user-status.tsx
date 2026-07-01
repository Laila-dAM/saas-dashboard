import React from "react"
import { Badge } from "@/components/ui/badge"

type UserStatusProps = {
  status: "active" | "inactive" | "pending" | "banned"
}

export function UserStatus({ status }: UserStatusProps) {
  const variants = {
    active: "success",
    inactive: "warning",
    pending: "info",
    banned: "danger"
  } as const

  const labels = {
    active: "Active",
    inactive: "Inactive",
    pending: "Pending",
    banned: "Banned"
  }

  return (
    <Badge variant={variants[status]}>
      {labels[status]}
    </Badge>
  )
}