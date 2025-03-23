import Image from 'next/image'

import type { CardType, Modality, RatingOption } from '@/api/getPlayer'
import { cn } from '@/lib/utils'

import { Card } from './ui/card'

interface PlayerCardProps {
  name: string
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

  const attribute = (attribute: string, value: string | number) => {
    let attributeColor = ''
    if (typeof value === 'number') {
      if (value >= 90) attributeColor = 'text-green-500'
      if (value >= 75) attributeColor = 'text-lime-500'
      if (value >= 60) attributeColor = 'text-orange-500'
      else attributeColor = 'text-red-500'
    }

    return (
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">{attribute}</span>
        <div className="bg-input/30 border-input flex h-6 w-6 items-center justify-center rounded-sm border shadow-xs">
          <span className={cn('text-sm font-bold', attributeColor)}>
            {value}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Card
        className={cn(
          'relative h-96 w-64 overflow-hidden rounded-xl shadow-xl',
          getCardGradient(),
        )}
      >
        {/* Card Content */}
        <div className="relative z-10 flex h-full flex-col px-4">
          {/* Header */}
          <div className="mb-2 flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                {modality.toUpperCase()}
              </span>
              <span>{country}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-input/30 border-input flex items-center justify-center rounded-sm border p-1 text-4xl font-bold text-white shadow-xs">
                {overall}
              </div>
            </div>
          </div>

          {/* Player Image */}
          <div className="mb-2 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src={photo || '/placeholder.svg'}
                alt={name}
                fill
                className="rounded-sm object-cover"
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
            {attribute('ATQ', attack)}
            {attribute('DEF', defense)}
            {attribute('FUN', fundamental)}
            {attribute('REC', resource)}
            {attribute('FIS', physical.emoji)}
            {attribute('MEN', mental.emoji)}
          </div>
        </div>

        {/* Card Shine Effect */}
        <div className="opacity-5s0 absolute inset-0 bg-gradient-to-bl from-white/0 via-white/30 to-white/30"></div>
      </Card>
    </div>
  )
}
