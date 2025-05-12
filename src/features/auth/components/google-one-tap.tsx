'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthStore } from '@/features/auth/stores/use-auth-store'

export function GoogleOneTap() {
  const { setPlayer, logout } = useAuthStore.getState()
  const router = useRouter()

  useEffect(() => {
    if (!window.google) return

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: async (response) => {
        try {
          const res = await fetch('/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: response.credential }),
            credentials: 'include',
          })

          const data = await res.json()

          if (res.ok) {
            setPlayer(data.data)
            router.replace('/dashboard')
          } else {
            logout()
            console.error(data.message)
          }
        } catch (err) {
          logout()
          console.error('Erro no Google One Tap', err)
        }
      },
    })

    window.google.accounts.id.prompt()
  }, [logout, router, setPlayer])

  return null
}
