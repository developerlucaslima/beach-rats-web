import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'

import type { CardType } from '@/types'
import { cn } from '@/utils/cn'

import { badgeVariants } from './badge'
import { ClickableTooltip } from './clickable-tooltip'
import { TooltipContent } from './tooltip'

interface PlayerCardType {
  cardType: CardType
}
function PlayerCardComposition({
  cardType,
  className,
  ...props
}: PlayerCardType & React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card"
      className={cn(
        `flex flex-col overflow-hidden rounded-xl border p-4 pt-18 min-w-sm max-w-md`,
        `texture-${cardType} shine-${cardType}`,
        `text-${cardType !== 'pro' ? 'background' : 'foreground'}`,
        className,
      )}
      {...props}
    />
  )
}

function PlayerCardHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-header"
      className={cn(
        '@container/player-card-header absolute top-0 right-0 left-0 flex justify-between p-4',
        className,
      )}
      {...props}
    />
  )
}

function PlayerCardOverall({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-overall"
      className={cn(
        'flex flex-col items-center p-1 text-7xl leading-none font-bold',
        className,
      )}
      {...props}
    />
  )
}

function PlayerCardTopLeft({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-top-left"
      className={cn('flex flex-col items-start gap-2', className)}
      {...props}
    />
  )
}

function PlayerCardTopRight({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-top-right"
      className={cn('flex flex-col items-end gap-2', className)}
      {...props}
    />
  )
}

export interface PlayerCardEmojiProps {
  label: string
}
function PlayerCardEmoji({ label, className, ...props }: PlayerCardEmojiProps & React.ComponentProps<'div'>) {
  return (
    <ClickableTooltip
      className="flex items-center justify-center"
    >
      <div className="flex items-center">
        <div
          data-slot="player-card-emoji"
          className={cn('text-4xl', className)}
          {...props}
        />
      </div>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </ClickableTooltip>
  )
}

function PlayerCardImage({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-image"
      className={cn(
        'relative mx-auto h-50 w-40 overflow-hidden rounded-sm',
        className,
      )}
      {...props}
    />
  )
}

function PlayerCardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-title"
      className={cn(
        'my-2 flex flex-col items-center justify-center gap-1 text-center',
        className,
      )}
      {...props}
    />
  )
}

function PlayerCardName({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-name"
      className={cn('text-3xl font-bold', className)}
      {...props}
    />
  )
}

function PlayerCardBadge({
  cardType,
  className,
  asChild = false,
  ...props
}: PlayerCardType &
  React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'
  const variant = cardType !== 'pro' ? 'secondary' : 'outline'
  return (
    <Comp
      data-slot="player-card-label"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

function PlayerCardAtributes({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-atributes"
      className={cn(
        'relative grid grid-cols-2 gap-x-4 gap-y-2 py-4 text-2xl',
        className,
      )}
      {...props}
    >
      <div className="via-background/60 absolute top-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      <div className="via-background/60 absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent to-transparent" />
      {children}
    </div>
  )
}

export interface PlayerCardAtributeProps {
  abbreviation: string
  value: string | number
  label: string
}
function PlayerCardAtribute({
  abbreviation,
  value,
  label,
}: PlayerCardAtributeProps) {
  return (
    <ClickableTooltip
      key={abbreviation}
      className="flex items-center justify-center"
    >
      <div className="flex w-22 items-center">
        <p className="mr-4 min-w-8 font-bold rounded-lg bg-background/20">{value}</p>
        <p className="font-regular">{abbreviation}</p>
      </div>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </ClickableTooltip>
  )
}

function PlayerCardFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="player-card-footer"
      className={cn(
        'flex flex-col items-center justify-center gap-1 text-center',
        className,
      )}
      {...props}
    />
  )
}

export {
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
}
