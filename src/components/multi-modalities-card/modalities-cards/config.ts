import { type LucideIcon, Volleyball } from "lucide-react"

import { CardType, Categories, Modalities } from "@/types"

interface ModalitiesCardConfigProps {
  icon: LucideIcon
  category: Categories
  badgeType: CardType
  name: Modalities
}
export const modalitiesCardConfig: ModalitiesCardConfigProps[] = [
  {
    icon: Volleyball,
    category: 'iniciante',
    badgeType: 'beginner',
    name: 'altinha',
  },
  {
    icon: Volleyball,
    category: 'avançado',
    badgeType: 'advanced',
    name: 'beach tennis',
  },
  {
    icon: Volleyball,
    category: 'profissional',
    badgeType: 'pro',
    name: 'vôlei de praia',
  },
]