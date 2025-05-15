import { api } from "@/config/api/axios"

export interface SignInBody {
	email: string
	password: string
}
export async function signIn({ email, password }: SignInBody) {
	const response = await api.post('/auth/sign-in', { email, password })
	return response.data
}