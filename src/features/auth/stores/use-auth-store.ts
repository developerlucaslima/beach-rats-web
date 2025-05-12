import { create } from 'zustand'

type PlayerAuthData = {
  id: string
  googleId: string | null
  name: string
  email: string
  avatarUrl: string | null
  bio: string | null
  age: number | null
  countryCode: string | null
  latitude: number | null
  longitude: number | null
  mainModalityId: string | null
  physicalConditionName: string | null
  mentalConditionName: string | null
}

type AuthState = {
  player: PlayerAuthData | null
  isAuthenticated: boolean
  setPlayer: (player: PlayerAuthData) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  player: null,
  isAuthenticated: false,

  setPlayer: (player) => set({ player, isAuthenticated: true }),

  logout: () => set({ player: null, isAuthenticated: false }),
}))