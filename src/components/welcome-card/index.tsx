
import { CalendarIcon, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { UpcomingEvents } from "./upcoming-events."

export interface WelcomeCardProps {
  title: string
  city: string
  today: string
}

export const WelcomeCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Fala, jogador!</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <CalendarIcon size={15} />
          Segunda-feira, 10 de Janeiro 2025
        </CardDescription>
        <CardDescription className="flex items-center gap-2">
          <MapPin size={18} />
          Florianópolis - SC
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UpcomingEvents />
      </CardContent>
    </Card>
  )
}