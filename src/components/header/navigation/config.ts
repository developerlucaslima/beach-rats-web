import { CalendarCheck, type LucideIcon, ShieldUser, Swords } from "lucide-react"

export interface HeaderNavigationConfigProps {
  icon: LucideIcon
  title: string
  href: string
}

export const headerNavigationConfig: HeaderNavigationConfigProps[] = [
  {
    icon: ShieldUser,
    title: 'Jogador',
    href: '/player'
  },
  {
    icon: Swords,
    title: 'Arena',
    href: '/arena'
  },
  {
    icon: CalendarCheck,
    title: 'Agenda',
    href: '/schedule'
  }
]