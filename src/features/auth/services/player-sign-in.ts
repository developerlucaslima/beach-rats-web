import { api } from "@/config/api/axios"

export interface PlayerSignInBody {
	email: string
	password: string
}
export async function playerSignIn({ email, password }: PlayerSignInBody) {
	const response = await api.post('/players/sign-in', { email, password })
	return response.data
}