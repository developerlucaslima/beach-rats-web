export type SkillType = 'attack' | 'defense'
export type Role = 'professor' | 'aluno' | 'atleta'
export type Modality = 'futevôlei' | 'altinha' | 'vólei' | 'beach tennis'
export type SidePreference = 'left' | 'right'
export type CardType = 'gold' | 'silver' | 'bronze' | 'special'
export type MentalLabel =
  | 'Frieza'
  | 'Concentrado'
  | 'Confiante'
  | 'Estressado'
  | 'Provocador'
  | 'Resiliente'
  | 'Determinado'
  | 'Distraído'

export type PhysicalLabel =
  | 'Forte'
  | 'Ágil'
  | 'Resistente'
  | 'Explosivo'
  | 'Potente'

export interface Fundamental {
  skill: string
  emoji: string
  rating: number
  type: SkillType
}

export interface Resource {
  skill: string
  emoji: string
  has: boolean
  type: SkillType
}

export interface RatingOption {
  label: string
  emoji: string
}

export const MentalRatings: RatingOption[] = [
  { label: 'Frieza', emoji: '🥶' },
  { label: 'Concentrado', emoji: '🧘‍♂️' },
  { label: 'Confiante', emoji: '😎' },
  { label: 'Estressado', emoji: '😤' },
  { label: 'Provocador', emoji: '🤫' },
  { label: 'Distraído', emoji: '🤷' },
  // Negative options
  { label: 'Inseguro', emoji: '😟' },
  { label: 'Nervoso', emoji: '😰' },
  { label: 'Ansioso', emoji: '😬' },
  { label: 'Tímido', emoji: '😳' },
]

export const PhysicalRatings: RatingOption[] = [
  { label: 'Potente', emoji: '🏋️‍♂️' },
  { label: 'Ágil', emoji: '🏃‍♂️' },
  { label: 'Resistente', emoji: '🛡️' },
  { label: 'Explosivo', emoji: '⚡' },
  // Negative options
  { label: 'Fraco', emoji: '🥺' },
  { label: 'Lento', emoji: '🐌' },
  { label: 'Cansado', emoji: '😩' },
  { label: 'Lesionado', emoji: '🤕' },
]

export interface PlayerData {
  name: string
  photo: string
  age: number
  role: Role
  modality: Modality
  country: string
  address: string
  dominantFoot: 'left' | 'right'
  preferredSide: SidePreference
  fundamentals: Fundamental[]
  resources: Resource[]
  physical: RatingOption
  mental: RatingOption
}

export const playerData: PlayerData = {
  name: 'Lucas Lima',
  photo: 'https://github.com/developerlucaslima.png',
  age: 29,
  country: '🇧🇷',
  role: 'aluno',
  modality: 'futevôlei',
  address: 'Praia de Copacabana, Rio de Janeiro, RJ, Brazil',
  dominantFoot: 'right',
  preferredSide: 'left',
  fundamentals: [
    { skill: 'Cabeça', emoji: '💆', rating: 4, type: 'defense' },
    { skill: 'Ataque de Cabeça', emoji: '💥', rating: 3, type: 'attack' },
    { skill: 'Ombro Direito', emoji: '💁🏽‍♂️', rating: 3, type: 'defense' },
    { skill: 'Ombro Esquerdo', emoji: '💁🏽‍♂️', rating: 3, type: 'defense' },
    { skill: 'Peito', emoji: '🫀', rating: 4, type: 'defense' },
    { skill: 'Chapa Direita', emoji: '🦵', rating: 4, type: 'defense' },
    { skill: 'Chapa Esquerda', emoji: '🦵', rating: 3, type: 'defense' },
    { skill: 'Peito do pé Direito', emoji: '🦶', rating: 3, type: 'defense' },
    { skill: 'Peito do pé Esquerdo', emoji: '🦶', rating: 2, type: 'defense' },
    { skill: 'Chilena Direita', emoji: '🇨🇱', rating: 3, type: 'attack' },
    { skill: 'Chilena Esquerda', emoji: '🇨🇱', rating: 2, type: 'attack' },
  ],
  resources: [
    { skill: 'Coxa', emoji: '🍗', has: true, type: 'defense' },
    { skill: 'Shark', emoji: '🦈', has: false, type: 'attack' },
    { skill: 'Kamikaze', emoji: '💣', has: false, type: 'attack' },
    { skill: 'Bicicleta', emoji: '🚴', has: true, type: 'attack' },
    { skill: 'Saque com Efeito', emoji: '🌀', has: true, type: 'attack' },
    { skill: 'Pingo com Finta', emoji: '🎭', has: true, type: 'attack' },
  ],
  physical: PhysicalRatings[2],
  mental: MentalRatings[7],
}

export function playerSummary(playerData: PlayerData) {
  const MAX_RATING = 5

  const calculateCategoryScore = (type: SkillType): number => {
    const fundamentals = playerData.fundamentals.filter((f) => f.type === type)
    const resources = playerData.resources.filter(
      (r) => r.type === type && r.has,
    )

    const totalCount = fundamentals.length + resources.length
    if (totalCount === 0) return 0

    const totalFundamentalRating = fundamentals.reduce(
      (sum, f) => sum + f.rating,
      0,
    )
    const totalResourceRating = resources.length * MAX_RATING

    const averageRating =
      (totalFundamentalRating + totalResourceRating) / totalCount
    const scorePercent = Math.round((averageRating / MAX_RATING) * 100)

    return scorePercent
  }

  const calculateResourcesScore = (): number => {
    const resources = playerData.resources
    if (resources.length === 0) return 0

    const ownedCount = resources.filter((r) => r.has).length
    const averageRating = (ownedCount * MAX_RATING) / resources.length
    const scorePercent = Math.round((averageRating / MAX_RATING) * 100)

    return scorePercent
  }

  const calculateFundamentalsScore = (): number => {
    const fundamentals = playerData.fundamentals
    if (fundamentals.length === 0) return 0

    const totalRating = fundamentals.reduce(
      (acc, skill) => acc + skill.rating,
      0,
    )
    const meanRating = totalRating / fundamentals.length
    const scorePercent = Math.round((meanRating / MAX_RATING) * 100)

    return scorePercent
  }

  const attack = calculateCategoryScore('attack')
  const defense = calculateCategoryScore('defense')
  const resource = calculateResourcesScore()
  const fundamental = calculateFundamentalsScore()
  const overall = Math.round((attack + defense + resource + fundamental) / 4)

  const cardType: CardType =
    overall >= 90
      ? 'special'
      : overall >= 75
        ? 'gold'
        : overall >= 60
          ? 'silver'
          : 'bronze'

  return {
    attack,
    defense,
    resource,
    fundamental,
    overall,
    cardType,
  }
}
