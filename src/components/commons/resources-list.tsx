import { Resources } from '@/types'
import { capitalizeFirstLetter } from '@/utils/capitalize'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { StarsProgress } from '../ui/stars-progress'

interface ResourcesListProps {
  resources: Resources[]
}

export const ResourcesList = ({ resources }: ResourcesListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recursos</CardTitle>
        <CardDescription>
          Manobras avançadas e fintas que enriquecem o jogador, tornando-o mais
          imprevisível e deixando o jogo mais divertido.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {resources.map((resource) => (
            <li key={resource.sluggedName}>
              <Accordion
                type="single"
                collapsible
                className="rounded-md border"
              >
                <AccordionItem value={resource.sluggedName}>
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{resource.name}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {capitalizeFirstLetter(
                            resource.progressionDescription,
                          )}
                        </Badge>

                        <AccordionTrigger className="cursor-pointer p-0">
                          <span className="sr-only">Accordion toggle</span>
                        </AccordionTrigger>
                      </div>
                    </div>
                    <StarsProgress
                      maxStars={3}
                      filledStars={resource.progressionValue}
                      size={18}
                    />
                  </div>
                  <AccordionContent className="flex flex-col gap-2 px-4 pb-2">
                    <div className="text-muted-foreground text-sm">
                      {resource.description}
                    </div>
                    <div className="ml-auto">
                      {resource.skillType.map((type) => (
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          key={type}
                        >
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
    </Card>
  )
}
