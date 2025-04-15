import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AttendanceStatisticsItems } from "./attendance-statistics-items"

export const AttendanceStatistics = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Seu progresso até agora
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-3">
        <AttendanceStatisticsItems />
      </CardContent>
    </Card>
  )
}