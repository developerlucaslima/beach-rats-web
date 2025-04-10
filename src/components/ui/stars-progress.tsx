import { Star } from 'lucide-react'

interface StarsProgressProps {
  filledStars: number
  maxStars: number
  size: number
}

export const StarsProgress = ({
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
        className={`${i < filledStars ? 'text-primary fill-current' : 'text-muted-foreground'}`}
        strokeWidth={1.5}
      />,
    )
  }

  return <div className="flex items-center gap-1">{stars}</div>
}
