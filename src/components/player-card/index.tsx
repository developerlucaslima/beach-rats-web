import Image from 'next/image'

import {
  PlayerCardAtribute,
  PlayerCardAtributes,
  PlayerCardBadge,
  PlayerCardComposition,
  PlayerCardEmoji,
  PlayerCardFooter,
  PlayerCardHeader,
  PlayerCardImage,
  PlayerCardName,
  PlayerCardOverall,
  PlayerCardTitle,
  PlayerCardTopLeft,
  PlayerCardTopRight,
} from '@/components/ui/player-card-composition'
import { StarsProgress } from '@/components/ui/stars-progress'
import { cn } from '@/utils/cn'

import { playerCardConfig } from './config'


export const PlayerCard = () => {
  const {
    modality,
    cardType,
    currentCategory,
    overall,
    name,
    profileImage,
    stars,
    country,
    atributesArray
  } = playerCardConfig

  return (
    <PlayerCardComposition cardType={cardType} className={cn('relative')}>
      <PlayerCardHeader>
        <PlayerCardTopLeft>
          <PlayerCardOverall>{overall}</PlayerCardOverall>
        </PlayerCardTopLeft>
        <PlayerCardTopRight>
          <PlayerCardBadge cardType={cardType}>
            {modality.toUpperCase() + ' - ' + currentCategory.toUpperCase()}
          </PlayerCardBadge>
          <PlayerCardEmoji label={country.label}>{country.emoji}</PlayerCardEmoji>
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
