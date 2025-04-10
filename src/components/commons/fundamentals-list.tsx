
import { Fundamentals } from '@/types'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { capitalizeFirstLetter } from '@/utils/capitalize'

interface FundamentalsListProps {
  fundamentals: Fundamentals[]
}

export const FundamentalsList = ({
  fundamentals,
}: FundamentalsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fundamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2'>
          {fundamentals.map((fundamental) => (
            <li key={fundamental.sluggedName}>
              <Accordion type="single" collapsible className="border rounded-md">
                <AccordionItem value={fundamental.sluggedName}>
                  <div className='flex flex-col p-4 gap-2'>
                    <div className='flex justify-between items-center'>
                      <div className='font-medium'>
                        {fundamental.name}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Badge variant='outline'>
                          {capitalizeFirstLetter(fundamental.progressionDescription)}
                        </Badge>
                        <AccordionTrigger className="p-0 cursor-pointer">
                          <span className="sr-only">Accordion toggle</span>
                        </AccordionTrigger>
                      </div>
                    </div>
                    <Progress
                      value={fundamental.progressionValue}
                      className='h-2'
                    />
                  </div>
                  <AccordionContent className='px-4 pb-2 flex flex-col gap-2'>
                    <div className="text-muted-foreground text-sm">
                      {fundamental.description}
                    </div>
                    <div className='ml-auto'>
                      {fundamental.skillType.map((type) => (
                        <Badge variant='secondary' className='text-xs' key={type}>
                          {type === 'attack' ? 'Ataque' : 'Defesa'}
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
    </Card>
  )
}
