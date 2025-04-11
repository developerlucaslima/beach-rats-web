import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'

interface StarsProgressProps {
  className?: string
  filledStars: number
  maxStars: number
  size: number
}

export const StarsProgress = ({
  className,
  filledStars,
  maxStars,
  size,
}: StarsProgressProps) => {
  const stars = []
  for (let i = 0; maxStars > i; i++) {
    stars.push(
      <Star
        key={i}
        size={size}
        className={cn(
          `${i < filledStars ? 'text-primary fill-primary' : 'text-muted-foreground'}`,
          className,
        )}
        strokeWidth={1}
      />,
    )
  }

  return <div className="flex items-center gap-1">{stars}</div>
}
