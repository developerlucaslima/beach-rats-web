import { api } from "@/config/api/axios"
import type { PlayerAuth } from "@/types/player"

export interface GoogleAuthOneTapBody {
  idToken: string
}

export async function googleAuthOneTap({ idToken }: GoogleAuthOneTapBody): Promise<PlayerAuth> {
  const response = await api.post('/auth/google-one-tap', { idToken })
  return response.data
}