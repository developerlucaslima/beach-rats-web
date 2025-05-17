'use client'

import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/config/providers/react-query"
import { Toaster } from "@/config/providers/sonner"
import { ThemeProvider } from '@/config/providers/theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-center" />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}