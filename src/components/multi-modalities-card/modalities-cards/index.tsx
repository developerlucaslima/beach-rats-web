import { Badge } from "@/components/ui/badge"
import { capitalizeEachFirstLetter } from "@/utils/capitalize"

import { modalitiesCardConfig } from "./config"

export const ModalitiesCard = () => {
  return modalitiesCardConfig.map(modality => {
    const Icon = modality.icon
    return (
      <div className="flex items-center justify-between rounded-lg border p-3" key={modality.name}>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <span className="font-medium">{modality.name}</span>
        </div>
        <Badge variant={modality.badgeType} className="bg-primary/5">
          {capitalizeEachFirstLetter(modality.category)}
        </Badge>
      </div>
    )
  })
}


