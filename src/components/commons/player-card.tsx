import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import {
  PlayerCardAtribute,
  type PlayerCardAtributeProps,
  PlayerCardAtributes,
  PlayerCardComposition,
  PlayerCardEmoji,
  PlayerCardFooter,
  PlayerCardHeader,
  PlayerCardImage,
  PlayerCardModality,
  PlayerCardName,
  PlayerCardOverall,
  PlayerCardTitle,
  PlayerCardTopLeft,
  PlayerCardTopRight,
} from '@/components/ui/player-card-composition'
import { StarsProgress } from '@/components/ui/stars-progress'
import type { CardType, CategoryProgression, LabelAndEmoji, Modality } from '@/types'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import { cn } from '@/utils/cn'

interface PlayerCardProps {
  modality: Modality
  cardType: CardType
  currentCategory: CategoryProgression
  overall: number
  name: string
  country: LabelAndEmoji
  profileImage: string
  physicalCondition: LabelAndEmoji
  mentalCondition: LabelAndEmoji
  attack: number
  defense: number
  fundamental: number
  resource: number
  stars: number
}

export const PlayerCard = ({
  modality,
  cardType,
  currentCategory,
  overall,
  name,
  profileImage,
  attack,
  defense,
  fundamental,
  resource,
  stars,
  country,
  physicalCondition,
  mentalCondition,
}: PlayerCardProps) => {
  const atributesArray: PlayerCardAtributeProps[] = [
    { label: 'Média de ataque', abbreviation: 'ATA', value: attack },
    { label: 'Média de defesa', abbreviation: 'DEF', value: defense },
    {
      label: 'Média dos fundamentos',
      abbreviation: 'FUN',
      value: fundamental,
    },
    { label: 'Média dos recursos', abbreviation: 'REC', value: resource },
    {
      label: `Físico: ${physicalCondition.label}`,
      abbreviation: 'FÍS',
      value: physicalCondition.emoji,
    },
    {
      label: `Mental: ${mentalCondition.label}`,
      abbreviation: 'MEN',
      value: mentalCondition.emoji,
    },
  ]

  return (
    <PlayerCardComposition cardType={cardType} className={cn('relative')}>
      <PlayerCardHeader>
        <PlayerCardTopLeft>
          <PlayerCardOverall>{overall}</PlayerCardOverall>
        </PlayerCardTopLeft>
        <PlayerCardTopRight>
          <Badge variant={cardType}>{capitalizeFirstLetter(currentCategory)}</Badge>
          <PlayerCardEmoji>{country.emoji}</PlayerCardEmoji>
        </PlayerCardTopRight>
      </PlayerCardHeader>

      <PlayerCardImage>
        <Image
          src={profileImage}
          alt={name}
          fill
          className="object-cover"
        />
      </PlayerCardImage>

      <PlayerCardTitle>
        <PlayerCardModality cardType={cardType}>
          {capitalizeFirstLetter(modality)}
        </PlayerCardModality>
        <PlayerCardName>{name.toUpperCase()}</PlayerCardName>
      </PlayerCardTitle>

      <PlayerCardAtributes>
        {atributesArray.map(({ abbreviation, label, value }) => (
          <PlayerCardAtribute
            key={abbreviation}
            abbreviation={abbreviation}
            label={label}
            value={value}
          />
        ))}
      </PlayerCardAtributes>
      <PlayerCardFooter>
        <StarsProgress
          maxStars={3}
          filledStars={stars}
          size={20}
          className="text-background/80"
        />
      </PlayerCardFooter>
    </PlayerCardComposition>
  )
}
