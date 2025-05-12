export type PlayerAuth = {
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