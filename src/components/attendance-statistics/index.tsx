import { CalendarIcon, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { AttendanceStatisticsItems } from "./attendance-statistics-items"

export const AttendanceStatistics = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Olá, Dev Lucas Lima!</CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>Segunda-feira, 10 de Janeiro 2025</span>
        </CardDescription>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Florianópolis - SC, Brasil</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-3">
        <AttendanceStatisticsItems />
      </CardContent>
    </Card>
  )
}