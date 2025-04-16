'use client'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Card, CardContentBorder, CardHeader, CardTitle } from "@/components/ui/card"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { chartConfig, chartData } from "./config"

export function SummaryProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Seu progresso no Futevôlei
        </CardTitle>
      </CardHeader>
      <CardContentBorder>
        <ChartContainer config={chartConfig} className="min-h-40 h-full flex-1 aspect-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="ataque"
              type="monotone"
              stroke={chartConfig["ataque"].color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="defesa"
              type="monotone"
              stroke={chartConfig["defesa"].color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="fundamentos"
              type="monotone"
              stroke={chartConfig["fundamentos"].color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="recursos"
              type="monotone"
              stroke={chartConfig["recursos"].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContentBorder>
    </Card>
  )
}
