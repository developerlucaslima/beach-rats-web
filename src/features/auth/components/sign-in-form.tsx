'use client'

import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { useSignIn } from '../hooks/use-sign-in'
import { GoogleButton } from './google-button'

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { handleSignIn, handleSubmit, isSubmitting, register} = useSignIn()

  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-4 p-6">
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <div className="text-xs">
                <a href="#" className="font-medium text-primary hover:text-primary/90">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div className="flex gap-1">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
              />
              <Button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                size="icon"
                variant="ghost"
              >
                {showPassword ? <Eye className="h-4 w-4" /> : <EyeClosed className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-2 text-muted-foreground">Ou continue com</span>
          </div>
        </div>
        <GoogleButton />
      </CardContent>
    </Card>
  )
}
