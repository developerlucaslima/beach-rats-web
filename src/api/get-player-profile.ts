import type { CardAttributes, RatingOption, UserProfile } from '@/types'

import { fundamentals } from './fundamentals'
import { resources } from './resources'

export const mentalConditions: RatingOption[] = [
  { label: 'Frio', emoji: '🥶' },
  { label: 'Concentrado', emoji: '🧘‍♂️' },
  { label: 'Confiante', emoji: '😎' },
  { label: 'Estressado', emoji: '😤' },
  { label: 'Provocador', emoji: '🤫' },
  { label: 'Distraído', emoji: '🤷' },
  { label: 'Inseguro', emoji: '😰' },
  { label: 'Ansioso', emoji: '😬' },
]

export const physicalConditions: RatingOption[] = [
  { label: 'Potente', emoji: '🏋️‍♂️' },
  { label: 'Ágil', emoji: '🏃‍♂️' },
  { label: 'Resistente', emoji: '🛡️' },
  { label: 'Explosivo', emoji: '⚡' },
  { label: 'Fraco', emoji: '🥺' },
  { label: 'Lento', emoji: '🐌' },
  { label: 'Cansado', emoji: '😩' },
  { label: 'Lesionado', emoji: '🤕' },
]

export const sampleUserProfile: UserProfile = {
  id: '1',
  name: 'lucas lima',
  email: 'developerlucaslima@gmail.com',
  country: '🇧🇷',
  city: 'São Paulo',
  age: '25',
  profileImage: 'https://github.com/developerlucaslima.png',
  preferredModality: 'futevôlei',
  courtSide: 'direita',
  dominantFoot: 'direito',
  fundamentals,
  resources,
  mentalCondition: mentalConditions[0],
  physicalCondition: physicalConditions[0],
}

export const defaultCardAttributes: CardAttributes = {
  attack: 85,
  defense: 78,
  fundamental: 82,
  resource: 90,
  cardType: 'gold',
  category: 'intermediário',
  stars: 1,
  overall: 84,
}
