import Image from 'next/image'

import type { CardType, Modality, RatingOption, Role } from '@/api/getPlayer'
import { cn } from '@/lib/utils'

import { Card } from './ui/card'

interface PlayerCardProps {
  name: string
  role: Role
  modality: Modality
  photo: string
  country: string
  overall: number
  attack: number
  defense: number
  resource: number
  fundamental: number
  physical: RatingOption
  mental: RatingOption
  cardType: CardType
}

export default function PlayerCard({
  name,
  role,
  modality,
  photo,
  country,
  overall,
  attack,
  defense,
  resource,
  fundamental,
  physical,
  mental,
  cardType,
}: PlayerCardProps) {
  const getCardGradient = () => {
    switch (cardType) {
      case 'gold':
        return 'bg-gradient-to-b from-yellow-300 to-yellow-500'
      case 'silver':
        return 'bg-gradient-to-b from-gray-300 to-gray-500'
      case 'bronze':
        return 'bg-gradient-to-b from-amber-600 to-amber-800'
      case 'special':
        return 'bg-gradient-to-b from-purple-500 to-pink-500'
      default:
        return 'bg-gradient-to-b from-yellow-300 to-yellow-500'
    }
  }

  const getAttributeColor = (value: number) => {
    if (value >= 90) return 'text-green-500'
    if (value >= 80) return 'text-lime-600'
    if (value >= 70) return 'text-yellow-600'
    if (value >= 60) return 'text-orange-500'
    return 'text-red-500'
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Card
        className={cn(
          'relative h-96 w-64 overflow-hidden rounded-xl shadow-xl',
          getCardGradient(),
        )}
      >
        {/* Card Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex h-full flex-col p-4">
          {/* Header */}
          <div className="mb-2 flex items-start justify-between">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white shadow-sm">
                {overall}
              </div>
              <div className="text-sm font-semibold text-white">
                {role.toUpperCase()}
              </div>
            </div>
            <div>{country}</div>
          </div>

          {/* Player Image */}
          <div className="mb-2 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src={photo || '/placeholder.svg'}
                alt={name}
                fill
                className="object-cover"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </div>

          {/* Player Name */}
          <div className="mb-2 text-center">
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          </div>

          {/* Attributes */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                ATAQUE
              </span>
              <span
                className={cn('text-xs font-bold', getAttributeColor(attack))}
              >
                {attack}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                DEFESA
              </span>
              <span
                className={cn('text-xs font-bold', getAttributeColor(defense))}
              >
                {defense}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                FUNDAMENTO
              </span>
              <span
                className={cn(
                  'text-xs font-bold',
                  getAttributeColor(fundamental),
                )}
              >
                {fundamental}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                RECURSO
              </span>
              <span
                className={cn('text-xs font-bold', getAttributeColor(resource))}
              >
                {resource}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                FÍSICO
              </span>
              <span className={'text-xs font-bold'}>{physical.emoji}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-semibold text-gray-800">
                MENTAL
              </span>
              <span className={'text-xs font-bold'}>{mental.emoji}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex justify-center space-x-2">
            <span className="text-sm font-bold text-white">
              {modality.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Card Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30"></div>
      </Card>
    </div>
  )
}
