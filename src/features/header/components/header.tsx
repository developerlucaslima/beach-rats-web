import { BeachRatsLogo } from "@/components/commons/logo";

import { headerActionsConfig } from "../config/header-actions-config";
import { headerNavigationConfig } from "../config/header-navigation-config";
import { DesktopNavigation } from "./desktop-navigation";
import { HeaderActions } from "./header-actions";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <BeachRatsLogo />
        <DesktopNavigation headerNavigationConfig={headerNavigationConfig} />
        <HeaderActions headerActionsConfig={headerActionsConfig} />
      </div>
    </header>
  )
}