import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AttendanceStatisticsItems } from "./attendance-statistics-items"

export const AttendanceStatistics = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Seu progresso geral
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-around">
        <AttendanceStatisticsItems />
      </CardContent>
    </Card>
  )
}