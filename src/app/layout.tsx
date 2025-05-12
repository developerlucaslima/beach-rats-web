import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { GoogleScript } from '@/config/google/google-script'
import { Providers } from '@/config/providers'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Beach Rats',
  description: 'Encontre amigos para praticar seu esporte preferido na areia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen`}
      >
        <Providers >
          <GoogleScript />
            {children}
        </Providers>
      </body>
    </html>
  )
}
