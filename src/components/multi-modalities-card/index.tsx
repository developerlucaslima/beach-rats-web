import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ModalitiesCard } from "./modalities-cards"

export function MultiModalitiesCard() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Esportes em que você está ganhando terreno!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ModalitiesCard />
      </CardContent>
    </Card>
  )
}
