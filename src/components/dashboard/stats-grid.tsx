import React from "react"
import { KpiCard } from "./kpi-card"

type StatsGridProps = {
  users: number
  revenue: string | number
  growth: string | number
  churn: string | number
}

export function StatsGrid({
  users,
  revenue,
  growth,
  churn
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard
        title="Active Users"
        value={users}
        description="Total active users"
      />

      <KpiCard
        title="Revenue"
        value={revenue}
        description="Monthly revenue"
        trend={{ value: "+8%", positive: true }}
      />

      <KpiCard
        title="Growth"
        value={growth}
        description="User growth rate"
        trend={{ value: "+3.2%", positive: true }}
      />

      <KpiCard
        title="Churn"
        value={churn}
        description="Customer churn rate"
        trend={{ value: "-1.1%", positive: true }}
      />
    </div>
  )
}