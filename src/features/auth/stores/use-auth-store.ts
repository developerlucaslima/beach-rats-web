import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { PlayerAuth } from '@/types/player'

type AuthState = {
  player: PlayerAuth | null
  isAuthenticated: boolean
  setPlayer: (player: PlayerAuth) => void
  signOut: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      player: null,
      isAuthenticated: false,
      setPlayer: (player) => set({ player, isAuthenticated: true }),
      signOut: () => set({ player: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-store',
    },
  ),
)