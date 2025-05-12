import type { PlayerAuth } from "@/types/player"

export async function handleGoogleCredentialResponse(
  credential: string,
  onSuccess: (player: PlayerAuth) => void,
  onFailure: () => void,
  redirect: (path: string) => void,
) {
  try {
    const res = await fetch('/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: credential }),
      credentials: 'include',
    })

    const data = await res.json()

    if (res.ok) {
      onSuccess(data.data)
      redirect('/dashboard')
    } else {
      onFailure()
      console.error(data.message)
    }
  } catch (err) {
    onFailure()
    console.error('Erro no Google Auth', err)
  }
}
