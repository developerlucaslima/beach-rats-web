import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProfileAvatarDropdown } from "@/features/header/components/profile-dropdown"

import type { HeaderActionsConfigProps } from "../config/header-actions-config"
import { headerNavigationConfig } from "../config/header-navigation-config"
import { MobileNavigation } from "./mobile-navigation"

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