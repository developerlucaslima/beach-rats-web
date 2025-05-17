import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Calendar } from "../ui/calendar"


export const AttendanceCalendar = () => {
  const highlightedDates = [
    new Date(2025, 3, 8), // 08 de abril de 2025
    new Date(2025, 3, 10), // 10 de abril de 2025
    new Date(2025, 3, 14), // 14 de abril de 2025
  ]

  return (
    <Card className="w-full xl:max-w-md">
      <CardHeader>
        <CardTitle>Dev Lucas Lima? Presente!</CardTitle>
      </CardHeader>
      <CardContent className="mx-auto" >
        <Calendar
          mode="single"
          className="rounded-md border"
          modifiers={{
            highlighted: highlightedDates,
          }
          }
          modifiersClassNames={{
            highlighted: "bg-primary text-background",
          }}
        />
      </CardContent>
    </Card>
  )
}