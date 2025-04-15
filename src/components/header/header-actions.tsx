import Link from "next/link"

import { ProfileAvatarDropdown } from "../profile-dropdown"
import { Button } from "../ui/button"
import type { HeaderActionsConfigProps } from "./config"
import { headerNavigationConfig } from "./navigation/config"
import { MobileNavigation } from "./navigation/mobile-navigation"

export interface HeaderActionsProps {
  headerActionsConfig: HeaderActionsConfigProps[]
}

export const HeaderActions = ({ headerActionsConfig }: HeaderActionsProps) => {
  return (
    <nav className="flex items-center gap-1">
      {headerActionsConfig.map((item) => (
        <Button key={item.title} asChild variant='ghost' size='sm'>
          <Link href={item.title} aria-label={item.title}>
            <item.icon size={20} className="h-5 w-5" />
          </Link>
        </Button>
      ))}
      <ProfileAvatarDropdown />
      <MobileNavigation headerNavigationConfig={headerNavigationConfig} />
    </nav>
  )
}