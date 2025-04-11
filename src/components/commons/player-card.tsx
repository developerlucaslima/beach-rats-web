import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { CardContent } from '@/components/ui/card'
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

interface PlayerCardProps {
  player: PlayerProps
  atributes: CardAttributes
  modality: Modality
}

export const PlayerCard = ({
  player,
  atributes,
  modality,
}: PlayerCardProps) => {
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
      description: 'Média dos fundamentos',
      abbreviation: 'FUN',
      value: fundamental,
    },
    { description: 'Média dos recursos', abbreviation: 'REC', value: resource },
    {
      description: `Físico: ${physicalLabel}`,
      abbreviation: 'FÍS',
      value: physicalEmoji,
    },
    {
      description: `Mental: ${mentalLabel}`,
      abbreviation: 'MEN',
      value: mentalEmoji,
    },
  ]

  return (
    <CardContent>
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
    </CardContent>
  )
}
