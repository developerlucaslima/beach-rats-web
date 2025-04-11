export type Modality = 'futevôlei' | 'altinha'
export type SkillType = 'ataque' | 'defesa'
export type ProficiencyLevel = 'não sabe' | 'sabe' | 'masterizou'
export type DominantFoot = 'direito' | 'esquerdo' | 'ambos'
export type CourtSide = 'direita' | 'esquerda' | 'ambos'

export interface RatingOption {
  label: string
  emoji: string
}

export type CardType = 'bronze' | 'silver' | 'gold' | 'professional'
type CategoryProgression =
  | 'iniciante'
  | 'intermediário'
  | 'avançado'
  | 'profissional'

type ResourceProgression =
  | 'não sabe'
  | 'em desenvolvimento'
  | 'confiante'
  | 'elite'

export interface CardAttributes {
  attack: number
  defense: number
  fundamental: number
  resource: number
  stars: number
  cardType: CardType
  category: CategoryProgression
  overall: number
}

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
  country: string
  city: string
  age: string
  profileImage: string
  preferredModality: Modality
  courtSide: CourtSide
  dominantFoot: DominantFoot
  fundamentals: Fundamentals[]
  resources: Resources[]
  mentalCondition: RatingOption
  physicalCondition: RatingOption
}
