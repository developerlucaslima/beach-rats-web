
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { UpcomingEvents } from "./upcoming-events"

export const ScheduleOverview = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Hora de suar</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <UpcomingEvents />
      </CardContent>
    </Card>
  )
}