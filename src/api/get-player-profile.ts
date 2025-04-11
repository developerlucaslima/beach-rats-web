import { mentalConditions, physicalConditions, type UserProfile } from '@/types'
import { fundamentals } from './fundamentals'
import { resources } from './resources'

export const sampleUserProfile: UserProfile = {
  id: '1',
  name: 'Lucas Lima',
  email: 'developerlucaslima@gmail.com',
  profileImage: 'https://github.com/developerlucaslima.png',
  preferredModality: 'futevolei',
  courtSide: 'direita',
  dominantFoot: 'direito',
  fundamentals: fundamentals,
  resources: resources,
  mentalCondition: mentalConditions[0],
  physicalCondition: physicalConditions[0],
}

export const defaultCardValues = {
  attack: 85,
  defense: 78,
  fundamentals: 82,
  resources: 90,
  overall: 84,
}

