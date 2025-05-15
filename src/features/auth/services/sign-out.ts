import { api } from '@/config/api/axios'

export async function signOut() {
  await api.post('/auth/sign-out')
}