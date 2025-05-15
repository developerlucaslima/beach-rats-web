'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { api } from '@/config/api/axios'
import { useAuthStore } from '@/features/auth/stores/use-auth-store'

export function GoogleButton() {
  const router = useRouter()
  const setPlayer = useAuthStore((state) => state.setPlayer)
  const codeClientRef = useRef<google.accounts.oauth2.CodeClient>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      if (!window.google?.accounts?.oauth2) return

      codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        scope: 'openid profile email',
        ux_mode: 'popup',
        callback: async (response) => {
          const { code } = response
          if (!code) return

          try {
            const { data } = await api.post('/players/auth/google', {
              authorizationCode: code,
              redirectUri: window.location.origin,
            })

            setPlayer(data.data)
            router.push('/dashboard')
          } catch (error) {
            console.error('Google Auth failed', error)
          }
        },
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [router, setPlayer])

  const handleClick = () => {
    codeClientRef.current?.requestCode()
  }

  return (
    <Button onClick={handleClick} variant="outline" className="w-full" type="button">
      <svg
        className="mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        />
      </svg>
      Google
    </Button>
  )
}
