"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import { chartConfig } from "@/lib/chart-config"

type RevenueData = {
  name: string
  revenue: number
}

type RevenueChartProps = {
  data: RevenueData[]
  height?: number
  currency?: string
}

export function RevenueChart({
  data,
  height = 320,
  currency = "$"
}: RevenueChartProps) {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={chartConfig.margin}
        >
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={chartConfig.colors.primary}
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor={chartConfig.colors.primary}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={chartConfig.colors.grid}
            strokeDasharray={chartConfig.grid.strokeDasharray}
            vertical={chartConfig.grid.vertical}
          />

          <XAxis
            dataKey="name"
            tickLine={chartConfig.axis.tickLine}
            axisLine={chartConfig.axis.axisLine}
            tick={{
              fill: chartConfig.colors.axis,
              fontSize: chartConfig.axis.fontSize
            }}
          />

          <YAxis
            tickLine={chartConfig.axis.tickLine}
            axisLine={chartConfig.axis.axisLine}
            tick={{
              fill: chartConfig.colors.axis,
              fontSize: chartConfig.axis.fontSize
            }}
            tickFormatter={(value) =>
              `${currency}${Number(value).toLocaleString()}`
            }
          />

          <Tooltip
            contentStyle={{
              background: chartConfig.colors.tooltipBackground,
              border: `1px solid ${chartConfig.colors.tooltipBorder}`,
              borderRadius: "12px",
              color: chartConfig.colors.tooltipText
            }}
            formatter={(value: number) => [
              `${currency}${value.toLocaleString()}`,
              "Revenue"
            ]}
          />

          <Area
            type={chartConfig.line.type}
            dataKey="revenue"
            stroke={chartConfig.colors.primary}
            strokeWidth={chartConfig.area.strokeWidth}
            fill="url(#revenueGradient)"
            fillOpacity={chartConfig.area.fillOpacity}
            animationDuration={chartConfig.animation.duration}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}