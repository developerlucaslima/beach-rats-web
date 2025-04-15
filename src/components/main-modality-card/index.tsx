
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { PlayerCard } from "./player-card"

export const MainModalityCard = () => {
  return (
    <Card className="min-w-sm">
      <CardHeader>
        <CardTitle>Seu esporte 01!</CardTitle>
      </CardHeader>
      <CardContent >
        <PlayerCard />
      </CardContent>
    </Card>
  )
}