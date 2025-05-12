import { create } from 'zustand'

import type { PlayerAuth } from '@/types/player'

type AuthState = {
  player: PlayerAuth | null
  isAuthenticated: boolean
  setPlayer: (player: PlayerAuth) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  player: null,
  isAuthenticated: false,

  setPlayer: (player) => set({ player, isAuthenticated: true }),

  logout: () => set({ player: null, isAuthenticated: false }),
}))