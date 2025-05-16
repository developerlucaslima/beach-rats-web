import { AuthHeader } from "@/features/auth/components/auth-header";
import { GoogleOneTap } from "@/features/auth/components/google-one-tap";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      <div className="w-full max-w-md space-y-8">
        <GoogleOneTap />
        <AuthHeader title="Acesse sua conta" linkText="crie uma nova conta" linkHref="/sign-up"/>
        <SignInForm />
      </div>
    </div>
  )
}
