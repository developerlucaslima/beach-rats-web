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
import { CardAttributes, Modality, RatingOption } from '@/types'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import { cn } from '@/utils/cn'

interface PlayerProps {
  name: string
  profileImage: string
  country: string
  physicalCondition: RatingOption
  mentalCondition: RatingOption
}

interface PlayerCardComponentProps {
  player: PlayerProps
  atributes: CardAttributes
  modality: Modality
}

export const PlayerCardComponent = ({
  player,
  atributes,
  modality,
}: PlayerCardComponentProps) => {
  const {
    cardType,
    overall,
    category,
    attack,
    defense,
    fundamental,
    resource,
    stars,
  } = atributes
  const {
    name,
    country,
    profileImage,
    physicalCondition: { emoji: physicalEmoji, label: physicalLabel },
    mentalCondition: { emoji: mentalEmoji, label: mentalLabel },
  } = player
  const atributesArray: PlayerCardAtributeProps[] = [
    { description: 'Média de ataque', abbreviation: 'ATA', value: attack },
    { description: 'Média de defesa', abbreviation: 'DEF', value: defense },
    {
      description: 'Média de fundamento',
      abbreviation: 'FUN',
      value: fundamental,
    },
    { description: 'Média de recurso', abbreviation: 'REC', value: resource },
    {
      description: `Definição de físico: ${physicalLabel}`,
      abbreviation: 'FÍS',
      value: physicalEmoji,
    },
    {
      description: `Definição de mental: ${mentalLabel}`,
      abbreviation: 'MEN',
      value: mentalEmoji,
    },
  ]

  return (
    <PlayerCardComposition cardType={cardType} className={cn('relative')}>
      <PlayerCardHeader>
        <PlayerCardTopLeft>
          <PlayerCardOverall>{overall}</PlayerCardOverall>
        </PlayerCardTopLeft>
        <PlayerCardTopRight>
          <Badge variant={cardType}>{capitalizeFirstLetter(category)}</Badge>
          <PlayerCardEmoji>{country}</PlayerCardEmoji>
        </PlayerCardTopRight>
      </PlayerCardHeader>

      <PlayerCardImage>
        <Image
          src={profileImage || '/placeholder.svg'}
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

      {/* Card Atributes */}
      <PlayerCardAtributes>
        {atributesArray.map(({ abbreviation, description, value }) => (
          <PlayerCardAtribute
            key={abbreviation}
            abbreviation={abbreviation}
            description={description}
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
