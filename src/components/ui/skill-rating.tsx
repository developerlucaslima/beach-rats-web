import * as ProgressPrimitive from '@radix-ui/react-progress'
import { Check, X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface SkillProps {
  skill: string
  icon: string
}

interface FundamentalsSkillProps
  extends SkillProps,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  min?: number
  max?: number
  rating: number
}

interface ResourcesSkillProps extends SkillProps {
  hasSkill: boolean
}

function ResourceSkill({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="resource"
      className={cn('flex items-center space-x-4', className)}
      {...props}
    />
  )
}

function FundamentalSkill({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="resource"
      className={cn('flex items-center space-x-4', className)}
      {...props}
    />
  )
}

function SkillContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="resource"
      className={cn(
        'flex w-full max-w-md min-w-xs items-center justify-between space-y-2',
        className,
      )}
      {...props}
    />
  )
}

function SkillBadge({
  icon,
  className,
  ...props
}: Pick<SkillProps, 'icon'> & React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-background dark:bg-input/30 dark:border-input flex h-9 items-center justify-center rounded-sm border p-2 shadow-xs',
        className,
      )}
      {...props}
    >
      <span className="text-foreground font-bold">{icon}</span>
    </div>
  )
}

function HasSkill({ hasSkill }: Pick<ResourcesSkillProps, 'hasSkill'>) {
  return (
    <div className="flex items-center">
      {hasSkill ? (
        <div className="flex items-center text-green-500">
          <Check className="mr-1 h-5 w-5" />
          <span>Sim</span>
        </div>
      ) : (
        <div className="flex items-center text-red-500">
          <X className="mr-1 h-5 w-5" />
          <span>Não</span>
        </div>
      )}
    </div>
  )
}

function SkillLabel({
  skill,
  className,
  ...props
}: Pick<SkillProps, 'skill'> & React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-secondary-foreground my-0 flex w-full items-center',
        className,
      )}
      {...props}
    >
      {skill}
    </div>
  )
}

function SkillRatingLabel({
  skill,
  rating,
  max = 5,
  className,
  ...props
}: Pick<FundamentalsSkillProps, 'skill' | 'rating' | 'max'> &
  React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'text-secondary-foreground my-0 flex items-center justify-between',
        className,
      )}
      {...props}
    >
      <span>{skill}</span>
      <span>
        {rating} / {max}
      </span>
    </div>
  )
}

function SkillRatingBar({
  min = 0,
  max = 5,
  rating,
  className,
  ...props
}: Pick<FundamentalsSkillProps, 'min' | 'max' | 'rating'> &
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>) {
  const progressPercentage = ((rating - min) / (max - min)) * 100
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative my-0 h-1 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full transition-all"
        style={{ width: `${progressPercentage}%` }}
      />
    </ProgressPrimitive.Root>
  )
}

export {
  ResourceSkill,
  FundamentalSkill,
  SkillContent,
  SkillBadge,
  HasSkill,
  SkillLabel,
  SkillRatingLabel,
  SkillRatingBar,
}
