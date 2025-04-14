import Link from "next/link"

import { Button } from "../../ui/button"
import type { HeaderNavigationConfigProps } from "./config"

export interface DesktopNavigationProps {
  headerNavigationConfig: HeaderNavigationConfigProps[]
}

export const DesktopNavigation = ({ headerNavigationConfig }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {headerNavigationConfig.map((item) => (
        <Button key={item.href} asChild variant='ghost' size='sm'>
          <Link href={item.href} aria-label={item.title}>
            <item.icon size={20} className="h-5 w-5" />
            <span>
              {item.title}
            </span>
          </Link>
        </Button>
      ))}
    </nav>
  )
}