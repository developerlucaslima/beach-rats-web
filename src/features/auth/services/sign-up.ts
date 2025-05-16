import { api } from "@/config/api/axios"
import type { PlayerAuth } from "@/types/player"

export interface SignInBody {
	name: string
	email: string
	password: string
}
export async function signIn({ name, email, password }: SignInBody): Promise<PlayerAuth> {
	const response = await api.post('/auth/sign-up', { name, email, password })
	return response.data
}