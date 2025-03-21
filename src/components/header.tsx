import Link from "next/link";
import { HeaderNavigation } from "./header-navigation";
import { ModeToggle } from "./mode-toggle";
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold hidden sm:inline-block">Tatuí App</span>
          </Link>
        </div>

        <HeaderNavigation />
      </div>
    </header>
  )
}