import { RatIcon as Racquet, VibrateIcon as Volleyball } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MultiModalitiesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Esportes em que você está ganhando terreno!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Racquet className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Beach Tennis</span>
          </div>
          <Badge variant="outline" className="bg-primary/5">
            Intermediário
          </Badge>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Volleyball className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">Futevôlei</span>
          </div>
          <Badge variant="outline" className="bg-primary/5">
            Iniciante
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
