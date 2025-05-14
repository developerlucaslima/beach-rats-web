import { Bell, CirclePlus, type LucideIcon } from "lucide-react"

export interface HeaderActionsConfigProps {
  icon: LucideIcon
  title: string
}

export const headerActionsConfig: HeaderActionsConfigProps[] = [
  {
    icon: Bell,
    title: 'Notifications',
  },
  {
    icon: CirclePlus,
    title: 'Adicionar Evento',
  },
]