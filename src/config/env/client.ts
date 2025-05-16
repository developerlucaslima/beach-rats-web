import { z } from 'zod'

const rawClientEnv = {
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
}

const clientEnvSchema = z.object({
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string().min(1),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const _clientEnv = clientEnvSchema.safeParse(rawClientEnv)

if (!_clientEnv.success) {
  console.error('Invalid CLIENT env vars', _clientEnv.error.format())
  throw new Error('Invalid CLIENT env vars')
}

export const clientEnv = _clientEnv.data
