import {
  defaultCardAttributes,
  sampleUserProfile,
} from '@/api/get-player-profile'

import { FundamentalsList } from '../commons/fundamentals-list'
import { PlayerCard } from '../commons/player-card'
import { ResourcesList } from '../commons/resources-list'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export const HomeTabs = () => {
  return (
    <Tabs defaultValue="player-card" className="w-full">
      <TabsList className="flex w-full items-center justify-between">
        <TabsTrigger value="player-card">Carta</TabsTrigger>
        <TabsTrigger value="fundamentals-list">Fundamentos</TabsTrigger>
        <TabsTrigger value="resources-list">Recursos</TabsTrigger>
      </TabsList>

      <TabsContent value="player-card">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Carta</CardTitle>
            <CardDescription>
              Carta de habilidade. Notas são baseadas na média total de cada
              atributo.
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
              Técnicas fundamentais que formam sua base do esporte.
            </CardDescription>
          </CardHeader>
          <FundamentalsList fundamentals={sampleUserProfile.fundamentals} />
        </Card>
      </TabsContent>

      <TabsContent value="resources-list">
        <Card>
          <CardHeader>
            <CardTitle>Recursos</CardTitle>
            <CardDescription>
              Fintas avançadas que enriquecem o jogo, tornando-o mais
              imprevisível e divertido.
            </CardDescription>
          </CardHeader>
          <ResourcesList resources={sampleUserProfile.resources} />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
