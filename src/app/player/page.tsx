import { playerData, playerSummary } from "@/api/getPlayer";
import PlayerCard from "@/components/player-card";
import { SkillRating } from "@/components/ui/skill-rating";

export default function Me() {
  const summary = playerSummary(playerData)
  return(
    <div className="flex flex-wrap w-full gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-8">Fundamentos</h1>
        <div className="flex flex-col gap-2 max-w-sm">
          {playerData.fundamentals.map(item => (
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
        <h1 className="text-3xl font-bold mb-8">Recursos</h1>
        <div className="flex flex-col gap-2 max-w-sm">
          {playerData.resources.map(item => (
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
    </div >
  )
}