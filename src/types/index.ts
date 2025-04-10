export type Modality = 'futevolei' | 'altinha'
export type SkillType = 'ataque' | 'defesa'
export type ProficiencyLevel = 'não sabe' | 'sabe' | 'masterizou'
export type DominantFoot = 'direito' | 'esquerdo' | 'ambos'
export type CourtSide = 'direita' | 'esquerda' | 'ambos'

export interface RatingOption {
  label: string
  emoji: string
}

// posso manter apenas no frontend?
export const mentalConditions: RatingOption[] = [
  { label: 'Composed', emoji: '🥶' }, // Frieza
  { label: 'Focused', emoji: '🧘‍♂️' }, // Concentrado
  { label: 'Confident', emoji: '😎' }, // Confiante
  { label: 'Stressed', emoji: '😤' }, // Estressado
  { label: 'Provocative', emoji: '🤫' }, // Provocador
  { label: 'Distracted', emoji: '🤷' }, // Distraído
  { label: 'Insecure', emoji: '😟' }, // Inseguro
  { label: 'Nervous', emoji: '😰' }, // Nervoso
  { label: 'Anxious', emoji: '😬' }, // Ansioso
  { label: 'Shy', emoji: '😳' }, // Tímido
]

// posso manter apenas no frontend?
export const physicalConditions: RatingOption[] = [
  { label: 'Powerful', emoji: '🏋️‍♂️' }, // Potente
  { label: 'Agile', emoji: '🏃‍♂️' }, // Ágil
  { label: 'Enduring', emoji: '🛡️' }, // Resistente
  { label: 'Explosive', emoji: '⚡' }, // Explosivo
  { label: 'Weak', emoji: '🥺' }, // Fraco
  { label: 'Slow', emoji: '🐌' }, // Lento
  { label: 'Tired', emoji: '😩' }, // Cansado
  { label: 'Injured', emoji: '🤕' }, // Lesionado
]

export interface Skill {
  name: string
  sluggedName: string
  modality: Modality[]
  skillType: SkillType[]
  description: string
}

type FundamentalProgression =
  | 'iniciante'
  | 'intermediário'
  | 'avançado'
  | 'profissional'
type FundamentalProgressionValue = 25 | 50 | 75 | 100
export interface Fundamentals extends Skill {
  progressionDescription: FundamentalProgression
  progressionValue: FundamentalProgressionValue
}

type ResourceProgressionValue = 0 | 1 | 2 | 3
type ResourceProgression =
  | 'não sabe'
  | 'em desenvolvimento'
  | 'confiante'
  | 'elite'
export interface Resources extends Skill {
  progressionDescription: ResourceProgression
  progressionValue: ResourceProgressionValue
}

export interface UserProfile {
  id: string
  name: string
  email: string
  profileImage?: string
  preferredModality: Modality
  courtSide: CourtSide
  dominantFoot: DominantFoot
  fundamentals: Fundamentals[]
  resources: Resources[]
  mentalCondition: RatingOption
  physicalCondition: RatingOption
}

export interface PlayerCard {
  attack: number
  defense: number
  fundamentals: number
  resources: number
  overall: number
}

export interface LabelEmoji {
  [key: string]: string
}
