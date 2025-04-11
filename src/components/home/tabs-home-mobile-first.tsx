import {
  defaultCardAttributes,
  sampleUserProfile,
} from '@/api/get-player-profile'

import { FundamentalsList } from '../commons/fundamentals-list'
import { PlayerCard } from '../commons/player-card'
import { ResourcesList } from '../commons/resources-list'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export const TabsHomeMobileFirst = () => {
  return (
    <Tabs defaultValue="player-card" className="min-h-screen w-full">
      <TabsList className="flex w-full items-center justify-between">
        <TabsTrigger value="player-card">Carta do jogador</TabsTrigger>
        <TabsTrigger value="fundamentals-list">Fundamentos</TabsTrigger>
        <TabsTrigger value="resources-list">Recursos</TabsTrigger>
        {/* <TabsTrigger value="player-chart">Gráfico de radar</TabsTrigger> */}
      </TabsList>

      <TabsContent value="player-card">
        <Card>
          <CardHeader>
            <CardTitle>Player Card</CardTitle>
            <CardDescription>
              Carta de habilidade do jogador. Notas são baseadas na média total
              de cada atributo.
            </CardDescription>
          </CardHeader>
          <PlayerCard
            atributes={{ ...defaultCardAttributes, cardType: 'gold' }}
            modality="futevôlei"
            player={{ ...sampleUserProfile }}
          />
        </Card>
      </TabsContent>

      <TabsContent value="fundamentals-list">
        <Card>
          <CardHeader>
            <CardTitle>Fundamentos</CardTitle>
            <CardDescription>
              Técnicas fundamentais que formam a base do bom jogador.
            </CardDescription>
          </CardHeader>
          <FundamentalsList fundamentals={sampleUserProfile.fundamentals} />
        </Card>
      </TabsContent>

      <TabsContent value="resources-list">
        <ResourcesList resources={sampleUserProfile.resources} />
      </TabsContent>
    </Tabs>
  )
}
