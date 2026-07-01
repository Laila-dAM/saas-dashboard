import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type SubscriptionStatusProps = {
  plan: string
  status: "active" | "canceled" | "past_due" | "trialing"
  renewDate?: string
  onManage?: () => void
}

export function SubscriptionStatus({
  plan,
  status,
  renewDate,
  onManage
}: SubscriptionStatusProps) {
  const variant =
    status === "active"
      ? "success"
      : status === "trialing"
      ? "info"
      : status === "past_due"
      ? "warning"
      : "danger"

  const labels = {
    active: "Active",
    canceled: "Canceled",
    past_due: "Past Due",
    trialing: "Trial"
  }

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <div className="text-sm text-slate-400">Subscription</div>
        <div className="text-lg font-semibold text-white">{plan}</div>

        <div className="flex items-center gap-2">
          <Badge variant={variant}>{labels[status]}</Badge>

          {renewDate && (
            <span className="text-xs text-slate-400">
              Renews on {renewDate}
            </span>
          )}
        </div>
      </div>

      <Button variant="secondary" onClick={onManage}>
        Manage
      </Button>
    </div>
  )
}