import { api } from "@/config/api/axios"
import type { PlayerAuth } from "@/types/player"

export interface SignInBody {
	email: string
	password: string
}
export async function signIn({ email, password }: SignInBody): Promise<PlayerAuth> {
	const response = await api.post('/auth/sign-in', { email, password })
	return response.data
}