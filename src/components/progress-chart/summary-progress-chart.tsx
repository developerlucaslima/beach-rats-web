'use client'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Card, CardContentBorder, CardHeader, CardTitle } from "@/components/ui/card"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

const chartData = [
  { mes: "Mar", ataque: 25, defesa: 50, fundamentos: 60, recursos: 20 },
  { mes: "Abr", ataque: 25, defesa: 50, fundamentos: 70, recursos: 45 },
  { mes: "Mai", ataque: 50, defesa: 75, fundamentos: 70, recursos: 90 },
]
const chartConfig = {
  ataque: {
    label: "Ataque",
    color: "var(--chart-1)",
  },
  defesa: {
    label: "Defesa",
    color: "var(--chart-2)",
  },
  fundamentos: {
    label: "Fundamentos",
    color: "var(--chart-3)",
  },
  recursos: {
    label: "Recursos",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function SummaryProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Gráfico de progresso no Futevôlei
        </CardTitle>
      </CardHeader>
      <CardContentBorder>
        <ChartContainer config={chartConfig} className="min-h-40 max-h-50 h-full aspect-auto">
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
