import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import type { PlayerAuth } from "@/types/player"

export async function handleGoogleCredentialResponse(
  response: google.accounts.id.CredentialResponse,
  setPlayer: (player: PlayerAuth) => void,
  router: AppRouterInstance
) {
  if (!response.credential) return

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/players/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: response.credential }),
      credentials: 'include',
    })

    if (!res.ok) throw new Error('Failed to authenticate')

    const player: PlayerAuth = await res.json()
    setPlayer(player)
    router.push('/dashboard')
  } catch (err) {
    console.error('Google Auth failed', err)
  }
}
