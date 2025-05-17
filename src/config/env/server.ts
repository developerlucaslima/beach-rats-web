import { z } from 'zod'

const serverEnvSchema = z.object({
  GOOGLE_CLIENT_SECRET: z.string(),
})

const _serverEnv = serverEnvSchema.safeParse(process.env)

if (!_serverEnv.success) {
  console.error('Invalid SERVER env vars', _serverEnv.error.format())
  throw new Error('Invalid SERVER env vars')
}

export const serverEnv = _serverEnv.data
