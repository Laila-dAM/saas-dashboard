"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import { chartConfig } from "@/lib/chart-config"

type GrowthData = {
  name: string
  growth: number
}

type GrowthChartProps = {
  data: GrowthData[]
  height?: number
}

export function GrowthChart({
  data,
  height = 320
}: GrowthChartProps) {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={chartConfig.margin}
        >
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
            tickFormatter={(value) => `${value}%`}
          />

          <Tooltip
            contentStyle={{
              background: chartConfig.colors.tooltipBackground,
              border: `1px solid ${chartConfig.colors.tooltipBorder}`,
              borderRadius: "12px",
              color: chartConfig.colors.tooltipText
            }}
            formatter={(value: number) => [`${value}%`, "Growth"]}
          />

          <Line
            type={chartConfig.line.type}
            dataKey="growth"
            stroke={chartConfig.colors.success}
            strokeWidth={chartConfig.line.strokeWidth}
            dot={{
              r: chartConfig.line.dot.r,
              strokeWidth: chartConfig.line.dot.strokeWidth,
              fill: chartConfig.colors.success
            }}
            activeDot={{
              r: chartConfig.line.activeDot.r,
              strokeWidth: chartConfig.line.activeDot.strokeWidth
            }}
            animationDuration={chartConfig.animation.duration}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}