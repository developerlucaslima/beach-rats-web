import { ChartSpline, type LucideIcon, SquareChartGantt, Star, Swords } from "lucide-react"

export interface HeaderNavigationConfigProps {
  icon: LucideIcon
  title: string
  href: string
}

export const headerNavigationConfig: HeaderNavigationConfigProps[] = [
  {
    icon: SquareChartGantt,
    title: 'Início',
    href: '/'
  },
  {
    icon: Star,
    title: 'Habilidades',
    href: '/skills'
  },
  {
    icon: ChartSpline,
    title: 'Progresso',
    href: '/progress'
  },
  {
    icon: Swords,
    title: 'Arena',
    href: '/arena'
  }
]