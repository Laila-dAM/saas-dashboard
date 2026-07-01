import React from "react"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

type FiltersProps = {
  dateRange: string
  metric: string
  onDateRangeChange: (value: string) => void
  onMetricChange: (value: string) => void
  onSearchChange: (value: string) => void
  search: string
}

export function Filters({
  dateRange,
  metric,
  onDateRangeChange,
  onMetricChange,
  onSearchChange,
  search
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search analytics"
        className="md:max-w-sm"
      />

      <div className="flex gap-3">
        <Select
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </Select>

        <Select value={metric} onChange={(e) => onMetricChange(e.target.value)}>
          <option value="users">Users</option>
          <option value="revenue">Revenue</option>
          <option value="sessions">Sessions</option>
          <option value="conversion">Conversion</option>
        </Select>
      </div>
    </div>
  )
}