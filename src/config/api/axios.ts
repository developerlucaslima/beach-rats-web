import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

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

api.interceptors.request.use(
  (config) => {
    // const accessToken = useAuthStore.getState().accessToken
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    // }
    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor — trata 401, refresh e mensagens
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    const status = error.response?.status ?? 0
    const message = error.response?.data?.message ?? ''
    const originalRequest = error.config as InternalAxiosRequestConfig

    // Refresh automático se access_token expirou
    if (status === 401 && !originalRequest.__isRetryRequest) {
      try {
        originalRequest.__isRetryRequest = true

        await api.patch('/token/user-refresh')
        return api(originalRequest)
      } catch (refreshError) {
        useAuthStore.getState().logout()
        toast.error('Sessão expirada. Faça login novamente.')
        return Promise.reject(refreshError)
      }
    }

    if (message) {
      toast.error(message)
    } else if (status >= 500) {
      toast.error('Erro interno no servidor.')
    }

    return Promise.reject(error)
  },
)

export type ApiErrorResponse = {
  message: string
}
