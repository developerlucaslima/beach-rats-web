import type { ChartConfig } from "../ui/chart";

export const chartData = [
  { mes: "Mar", ataque: 25, defesa: 50, fundamentos: 60, recursos: 20 },
  { mes: "Abr", ataque: 25, defesa: 50, fundamentos: 70, recursos: 45 },
  { mes: "Mai", ataque: 50, defesa: 75, fundamentos: 70, recursos: 90 },
]
export const chartConfig = {
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