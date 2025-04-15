
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { UpcomingEvents } from "./upcoming-events"

export const ScheduleOverview = () => {
  return (
    <Card className="flex-1 min-w-sm">
      <CardHeader>
        <CardTitle>Hora de suar! Veja o que te espera...</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <UpcomingEvents />
      </CardContent>
    </Card>
  )
}