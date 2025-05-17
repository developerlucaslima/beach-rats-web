import { MultiModalitiesCard } from '../multi-modalities-card'
import { PlayerCard } from '../player-card'
import { Card } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'


export const ModalitiesTabs = () => {
  return (
    <Card>
      <Tabs defaultValue="player-card" className="w-full px-6" >
        <TabsList className="flex w-full items-center justify-between">
          <TabsTrigger value="player-card">Futevôlei</TabsTrigger>
          <TabsTrigger value="fundamentals-list">Outros esportes</TabsTrigger>
        </TabsList>

        <TabsContent value="player-card">
          <PlayerCard />
        </TabsContent>

        <TabsContent value="fundamentals-list">
          <MultiModalitiesCard />
        </TabsContent>
      </Tabs >
    </Card >
  )
}
