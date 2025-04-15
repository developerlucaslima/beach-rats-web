import type { Modality, PlayerAtributes } from "@/types"

import { playersAtributesMap } from "../db/data"

export const getPlayerAtributes = async (playerId: string, modality: Modality): Promise<PlayerAtributes | undefined> => {
  const playerAtributes = playersAtributesMap.get(playerId)
  if (!playerAtributes) return
  const fundamentals = playerAtributes!.fundamentals.filter(fundamental => fundamental.modality.includes(modality))
  const resources = playerAtributes!.resources.filter(fundamental => fundamental.modality.includes(modality))

  setTimeout(() => { }, 2000) // Simulate a delay
  return { ...playerAtributes, fundamentals, resources }
}