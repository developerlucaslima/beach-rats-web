'use client'

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

import { googleAuth } from "../services/google-auth"
import { useAuthStore } from "../stores/use-auth-store"
import { useLoadGoogleScript } from "./use-load-google-script"


export function useGoogleAuth() {
  const codeClientRef = useRef<google.accounts.oauth2.CodeClient | null>(null)
  const loaded = useLoadGoogleScript()
  const router = useRouter()
  const setPlayer = useAuthStore((s) => s.setPlayer)

  useEffect(() => {
    if (!loaded || !window.google?.accounts?.oauth2) return

    codeClientRef.current = window.google.accounts.oauth2.initCodeClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      scope: 'openid profile email',
      ux_mode: 'popup',
      callback: async ({ code }) => {
        if (!code) return
        const data = await googleAuth({
          authorizationCode: code,
          redirectUri: window.location.origin,
        }) 
        setPlayer(data)
        router.push('/dashboard')
      },
    })
  }, [loaded, router, setPlayer])

  return {
    requestCode: () => codeClientRef.current?.requestCode(),
  }
}
