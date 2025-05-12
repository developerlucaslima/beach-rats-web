import { SignInForm } from "@/features/auth/components/sign-in-form";
import { SignInHeader } from "@/features/auth/components/sign-in-header";

export default function SignIn() {
  return (
    // mobile fist
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      <div className="w-full max-w-md space-y-8">
        <SignInHeader />
        <SignInForm />
      </div>
    </div>
  )
}
