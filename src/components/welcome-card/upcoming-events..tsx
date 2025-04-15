import { CalendarIcon } from "lucide-react"

export const UpcomingEvents = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2 rounded-lg border p-3">
        <CalendarIcon className="mt-0.5 h-5 w-5 text-primary" />
        <div>
          <p className="font-medium">Próximo treino:</p>
          <p className="text-muted-foreground">Beach Tennis - Hoje às 18:00</p>
        </div>
      </div>
      <div className="flex items-start gap-2 rounded-lg border p-3">
        <CalendarIcon className="mt-0.5 h-5 w-5 text-primary" />
        <div>
          <p className="font-medium">Próxima partida:</p>
          <p className="text-muted-foreground">Futevôlei - Amanhã às 17:30</p>
        </div>
      </div>
    </div>
  )
}