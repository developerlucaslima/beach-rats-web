
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const BeachRatsLogo = () => (
  <div className="flex items-center gap-2">
    <Link href="/" className="flex items-center space-x-2">
      <Avatar className="cursor-pointer size-10 rounded-xl">
        <AvatarImage src="/beach-rats-logo.png" alt="Beach rats logo" />
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
      <span className="font-bold hidden sm:inline-block">Beach Rats</span>
    </Link>
  </div>
)