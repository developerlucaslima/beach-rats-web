export type SkillTypes = 'ataque' | 'defesa'
export type Modalities = 'futevôlei' | 'altinha' | 'beach tennis' | 'vôlei de praia'
export type Feet = 'direito' | 'esquerdo' | 'ambos'
export type CourtSides = 'direita' | 'esquerda' | 'ambos'

export interface LabelAndEmoji {
  label: string
  emoji: string
}

export type CardType = 'beginner' | 'intermediate' | 'advanced' | 'pro'
export type Categories =
  | 'iniciante'
  | 'intermediário'
  | 'avançado'
  | 'profissional'

export type ResourceLevel =
  | 'não sabe'
  | 'em desenvolvimento'
  | 'confiante'
  | 'elite'


export interface Skill {
  name: string
  sluggedName: string
  modality: Modalities[]
  skillType: SkillTypes[]
  description: string
}

type FundamentalProgressionValue = 25 | 50 | 75 | 100
export interface Fundamentals extends Skill {
  progressionDescription: Categories
  progressionValue: FundamentalProgressionValue
}

type ResourceProgressionValue = 0 | 1 | 2 | 3

export interface Resources extends Skill {
  progressionDescription: ResourceLevel
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
  courtSide: CourtSides
  dominantFoot: Feet
  modalities: Modalities[]
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
  currentCategory: Categories
  overall: number
}