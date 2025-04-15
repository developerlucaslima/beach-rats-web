import { type LucideIcon, Sword, Swords, Zap } from "lucide-react"

interface AttendanceStatsConfigProps {
  icon: LucideIcon
  value: number
  description: string
}

export const attendanceStatsConfig: AttendanceStatsConfigProps[] = [
  {
    icon: Zap,
    value: 169,
    description: 'Dias ativos totais',
  },
  {
    icon: Sword,
    value: 156,
    description: 'Dias de prática',
  },
  {
    icon: Swords,
    value: 13,
    description: 'Partidas disputadas',
  },
]