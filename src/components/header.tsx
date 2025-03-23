import Link from 'next/link'

import { HeaderNavigation } from './header-navigation'

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="hidden font-bold sm:inline-block">Tatuí App</span>
          </Link>
        </div>

        <HeaderNavigation />
      </div>
    </header>
  )
}
