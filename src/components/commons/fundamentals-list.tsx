import { Fundamentals } from '@/types'
import { capitalizeFirstLetter } from '@/utils/capitalize'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Badge } from '../ui/badge'
import { CardContent } from '../ui/card'
import { Progress } from '../ui/progress'

interface FundamentalsListProps {
  fundamentals: Fundamentals[]
}

export const FundamentalsList = ({ fundamentals }: FundamentalsListProps) => {
  return (
    <CardContent>
      <ul className="space-y-2">
        {fundamentals.map((fundamental) => (
          <li key={fundamental.sluggedName}>
            <Accordion type="single" collapsible className="rounded-md border">
              <AccordionItem value={fundamental.sluggedName}>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{fundamental.name}</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        {capitalizeFirstLetter(
                          fundamental.progressionDescription,
                        )}
                      </Badge>
                      <AccordionTrigger className="cursor-pointer p-0">
                        <span className="sr-only">Accordion toggle</span>
                      </AccordionTrigger>
                    </div>
                  </div>
                  <Progress
                    value={fundamental.progressionValue}
                    className="h-2"
                  />
                </div>
                <AccordionContent className="flex flex-col gap-2 px-4 pb-2">
                  <div className="text-muted-foreground text-sm">
                    {fundamental.description}
                  </div>
                  <div className="ml-auto">
                    {fundamental.skillType.map((type) => (
                      <Badge variant="secondary" className="text-xs" key={type}>
                        {capitalizeFirstLetter(type)}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </CardContent>
  )
}
