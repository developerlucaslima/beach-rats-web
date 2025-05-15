'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getErrorMessage } from '@/utils/get-error-message'

import { signIn } from '../services/sign-in'
import { useAuthStore } from '../stores/use-auth-store'
import type { SignInFormData } from '../types/sing-in'

export function useSignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setPlayer = useAuthStore(state => state.setPlayer)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: playerSignInMutation } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInFormData) {
    try {
      const player = await playerSignInMutation(data)
      setPlayer(player)
      router.push('/dashboard')
    } catch (error: unknown) {
      toast.error(getErrorMessage(error))
    }
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    handleSignIn,
  }
}
