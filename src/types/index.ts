export type SkillType = 'ataque' | 'defesa'
export type Modality = 'futevôlei' | 'altinha'
export type DominantFoot = 'direito' | 'esquerdo' | 'ambos'
export type CourtSide = 'direita' | 'esquerda' | 'ambos'

export interface LabelAndEmoji {
  label: string
  emoji: string
}

export type CardType = 'bronze' | 'silver' | 'gold' | 'professional'
export type CategoryProgression =
  | 'iniciante'
  | 'intermediário'
  | 'avançado'
  | 'profissional'

export type ResourceProgression =
  | 'não sabe'
  | 'em desenvolvimento'
  | 'confiante'
  | 'elite'


export interface Skill {
  name: string
  sluggedName: string
  modality: Modality[]
  skillType: SkillType[]
  description: string
}

type FundamentalProgressionValue = 25 | 50 | 75 | 100
export interface Fundamentals extends Skill {
  progressionDescription: CategoryProgression
  progressionValue: FundamentalProgressionValue
}

type ResourceProgressionValue = 0 | 1 | 2 | 3

export interface Resources extends Skill {
  progressionDescription: ResourceProgression
  progressionValue: ResourceProgressionValue
}

export interface UserProfile {
  id: string
  name: string
  email: string
  bio: string
  country: LabelAndEmoji
  city: string
  age: string
  profileImage: string
  courtSide: CourtSide
  dominantFoot: DominantFoot
  modalities: Modality[]
  location: {
    latitude: number
    longitude: number
  }
}

export interface PlayerAtributes {
  id: string
  fundamentals: Fundamentals[]
  resources: Resources[]
  mentalCondition: LabelAndEmoji
  physicalCondition: LabelAndEmoji
  attack: number
  defense: number
  fundamental: number
  resource: number
  stars: number
  cardType: CardType
  currentCategory: CategoryProgression
  overall: number
}