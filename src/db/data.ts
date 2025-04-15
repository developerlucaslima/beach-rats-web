
import type { LabelAndEmoji, PlayerAtributes, UserProfile } from '@/types'

import { countriesMap } from './countries'
import { fundamentals } from './fundamentals'
import { resources } from './resources'

export const mentalConditions: LabelAndEmoji[] = [
  { label: 'Frio', emoji: '🥶' },
  { label: 'Concentrado', emoji: '🧘‍♂️' },
  { label: 'Confiante', emoji: '😎' },
  { label: 'Estressado', emoji: '😤' },
  { label: 'Provocador', emoji: '🤫' },
  { label: 'Distraído', emoji: '🤷' },
  { label: 'Inseguro', emoji: '😰' },
  { label: 'Ansioso', emoji: '😬' },
]

export const physicalConditions: LabelAndEmoji[] = [
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
  id: '1234xx',
  name: 'lucas lima',
  email: 'developerlucaslima@gmail.com',
  bio: 'Sou desenvolvedor e gosto de jogar futevôlei',
  country: countriesMap.get("Brazil") ?? { label: 'Brazil', emoji: '🇧🇷' },
  city: 'São Paulo',
  age: '25',
  profileImage: 'https://github.com/developerlucaslima.png',
  modalities: ['futevôlei'],
  courtSide: 'direita',
  dominantFoot: 'direito',
  location: {
    latitude: 1,
    longitude: 0
  }
}

export const sampleUserProfile2: UserProfile = {
  id: '123456',
  name: 'lucas lima',
  email: 'developerlucaslima@gmail.com',
  bio: 'Sou desenvolvedor e gosto de jogar futevôlei',
  country: countriesMap.get("Brazil") ?? { label: 'Brazil', emoji: '🇧🇷' },
  city: 'São Paulo',
  age: '25',
  profileImage: 'https://github.com/developerlucaslima.png',
  modalities: ['futevôlei'],
  courtSide: 'direita',
  dominantFoot: 'direito',
  location: {
    latitude: 1,
    longitude: 0
  }
}

const users = [sampleUserProfile, sampleUserProfile2]
export const usersMap = new Map(users.map((user) => [user.id, user]))

export const sampleUserAtributes: PlayerAtributes = {
  id: sampleUserProfile.id,
  fundamentals,
  resources,
  mentalCondition: mentalConditions[0],
  physicalCondition: physicalConditions[3],
  attack: 85,
  defense: 78,
  fundamental: 82,
  resource: 90,
  cardType: 'gold',
  currentCategory: 'intermediário',
  stars: 2,
  overall: 84,
}

export const sampleUserAtributes2: PlayerAtributes = {
  id: sampleUserProfile.id,
  fundamentals,
  resources,
  mentalCondition: mentalConditions[0],
  physicalCondition: physicalConditions[0],
  attack: 85,
  defense: 78,
  fundamental: 82,
  resource: 90,
  cardType: 'gold',
  currentCategory: 'intermediário',
  stars: 1,
  overall: 84,
}

const usersAtributes = [sampleUserAtributes, sampleUserAtributes2]
export const playersAtributesMap = new Map(usersAtributes.map(user => [user.id, user]))
