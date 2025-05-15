import { api } from "@/config/api/axios"

export interface GoogleAuthBody {
  idToken: string
}

export async function googleAuth({ idToken }: GoogleAuthBody) {
  const response = await api.post('/auth/google', { idToken })
  console.log('Google Auth response:', response)
  return response.data
}