import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

import { signOut } from '@/features/auth/services/sign-out'
import { useAuthStore } from '@/features/auth/stores/use-auth-store'

import { clientEnv } from '../env/client'

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    __isRetryRequest?: boolean
  }
}

export const api = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status ?? 0
    const originalRequest = error.config as InternalAxiosRequestConfig

    // Refresh automático se access_token expirou
    if (status === 401 && !originalRequest.__isRetryRequest) {
      try {
        originalRequest.__isRetryRequest = true

        await api.patch('/token/user-refresh')
        return api(originalRequest)
      } catch (refreshError) {
        await signOut()
        useAuthStore.getState().signOut()
        toast.error('Sessão expirada. Faça login novamente.')
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

