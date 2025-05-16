import { api } from "@/config/api/axios"
import type { PlayerAuth } from "@/types/player"

export interface GoogleAuthBody {
  authorizationCode: string
  redirectUri: string
}

export async function googleAuth({ authorizationCode, redirectUri }: GoogleAuthBody): Promise<PlayerAuth> {
  const response = await api.post('/auth/google', { authorizationCode, redirectUri })
  return response.data
}