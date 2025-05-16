// // src/config/api/fetcher.ts
// // This file is responsible for making API requests on the server side but still in development mode.
// // It uses the fetch API to make requests to the backend server.
// import { cookies } from 'next/headers'

// import { env } from '@/config/env'

// type RequestOptions = RequestInit & {
//   auth?: boolean // se deve enviar Authorization
// }

// export async function fetcher<T = unknown>(
//   path: string,
//   init: RequestOptions = {},
// ): Promise<T> {
//   const headers = new Headers(init.headers)

//   // Se a rota exige autenticação, insere o Authorization
//   if (init.auth) {
//     const token = cookies().get('access_token')?.value
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`)
//     }
//   }

//   const response = await fetch(`${env.ORIGIN_URL}${path}`, {
//     ...init,
//     headers,
//     credentials: 'include', // envia cookies junto
//     cache: 'no-store',       // evita cache no Server Component
//   })

//   const contentType = response.headers.get('content-type')

//   // Tratamento de erro padronizado
//   if (!response.ok) {
//     let errorMessage = 'Erro desconhecido.'

//     if (contentType?.includes('application/json')) {
//       const body = await response.json()
//       errorMessage = body?.message || errorMessage
//     } else {
//       errorMessage = await response.text()
//     }

//     throw new Error(errorMessage)
//   }

//   if (contentType?.includes('application/json')) {
//     return response.json()
//   }

//   return response.text() as unknown as T
// }

// import { fetcher } from '@/config/api/fetcher'

// export default async function Dashboard() {
//   const player = await fetcher('/me', { auth: true })

//   return <pre>{JSON.stringify(player, null, 2)}</pre>
// }
