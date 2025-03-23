import { playerData, playerSummary } from '@/api/getPlayer'
import PlayerCard from '@/components/player-card'
import { SkillRating } from '@/components/ui/skill-rating'

export default function Me() {
  const summary = playerSummary(playerData)
  return (
    <div className="flex w-full flex-wrap gap-8">
      <div>
        <h1 className="mb-8 text-3xl font-bold">Fundamentos</h1>
        <div className="flex max-w-sm flex-col gap-2">
          {playerData.fundamentals.map((item) => (
            <SkillRating
              key={item.skill}
              skill={item.skill}
              icon={item.emoji}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="mb-8 text-3xl font-bold">Recursos</h1>
        <div className="flex max-w-sm flex-col gap-2">
          {playerData.resources.map((item) => (
            <SkillRating
              key={item.skill}
              skill={item.skill}
              icon={item.emoji}
              rating={item.has === true ? 5 : 0}
            />
          ))}
        </div>
      </div>

      <PlayerCard
        name={playerData.name}
        role={playerData.role}
        modality={playerData.modality}
        photo={playerData.photo}
        country={playerData.country}
        overall={summary.overall}
        attack={summary.attack}
        defense={summary.defense}
        resource={summary.resource}
        fundamental={summary.fundamental}
        physical={playerData.physical}
        mental={playerData.mental}
        cardType={summary.cardType}
      />
    </div>
  )
}
