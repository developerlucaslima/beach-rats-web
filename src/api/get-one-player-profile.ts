import type { UserProfile } from "@/types"

import { usersMap } from "../db/data"

interface GetPlayerProfileParams {
  playerId: string
}

export const getPlayerProfile = async ({ playerId }: GetPlayerProfileParams): Promise<UserProfile | undefined> => {
  const res = usersMap.get(playerId)

  setTimeout(() => { }, 2000) // Simulate a delay
  return res
}