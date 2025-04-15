import type { PlayerCardAtributeProps } from '@/components/ui/player-card-composition'
import type {
  CardType,
  CategoryProgression,
  LabelAndEmoji,
  Modality,
} from '@/types'


export interface PlayerCardConfig {
  modality: Modality
  cardType: CardType
  currentCategory: CategoryProgression
  overall: number
  name: string
  profileImage: string
  country: LabelAndEmoji
  stars: number
  atributesArray: PlayerCardAtributeProps[]
}

const mock = {
  country: { label: 'Brasil', emoji: '🇧🇷' },
  physicalCondition: { label: 'Excelente', emoji: '💪' },
  mentalCondition: { label: 'Focado', emoji: '🧠' },
  attack: 90,
  defense: 75,
  fundamental: 88,
  resource: 82,
}

export const playerCardConfig: PlayerCardConfig = {
  modality: 'futevôlei',
  cardType: 'silver',
  currentCategory: 'intermediário',
  overall: 85,
  name: 'Lucas Lima',
  profileImage: 'https://github.com/developerlucaslima.png',
  country: mock.country,
  stars: 3,
  atributesArray: [
    { label: 'Média de ataque', abbreviation: 'ATA', value: mock.attack },
    { label: 'Média de defesa', abbreviation: 'DEF', value: mock.defense },
    {
      label: 'Média dos fundamentos',
      abbreviation: 'FUN',
      value: mock.fundamental,
    },
    { label: 'Média dos recursos', abbreviation: 'REC', value: mock.resource },
    {
      label: `Físico: ${mock.physicalCondition.label}`,
      abbreviation: 'FÍS',
      value: mock.physicalCondition.emoji,
    },
    {
      label: `Mental: ${mock.mentalCondition.label}`,
      abbreviation: 'MEN',
      value: mock.mentalCondition.emoji,
    },
  ]
}
