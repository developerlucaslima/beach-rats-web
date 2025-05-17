'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthStore } from '@/features/auth/stores/use-auth-store'

import { googleAuthOneTap } from '../services/google-auth-one-tap'
import { useLoadGoogleScript } from './use-load-google-script'

export function useGoogleOneTap() {
  const router = useRouter()
  const setPlayer = useAuthStore((s) => s.setPlayer)
  const loaded = useLoadGoogleScript()

  useEffect(() => {
    if (!loaded || !window.google?.accounts?.id) return

    console.log('Local origin:', window.location.origin)
    console.log('Google One Tap loaded:', window.google.accounts.id)
    console.log('Google One Tap initialized:', window.google.accounts.id.initialize)

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: async ({ credential }) => {
        if (!credential) return
        try {
          const player = await googleAuthOneTap({ idToken: credential })
          setPlayer(player)
          router.push('/dashboard')
        } catch (err) {
          console.error('Google One Tap failed', err)
        }
      },
    })

    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        console.warn('One Tap not displayed:', notification.getNotDisplayedReason())
      }
      if (notification.isSkippedMoment()) {
        console.warn('One Tap skipped:', notification.getSkippedReason())
      }
    })
  }, [loaded, router, setPlayer])
}
