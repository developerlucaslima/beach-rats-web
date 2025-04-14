import { BeachRatsLogo } from "../commons/logo";
import { headerActionsConfig } from "./config";
import { HeaderActions } from "./header-actions";
import { headerNavigationConfig } from "./navigation/config";
import { DesktopNavigation } from "./navigation/desktop-navigation";
import { MobileNavigation } from "./navigation/mobile-navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <BeachRatsLogo />
        <DesktopNavigation headerNavigationConfig={headerNavigationConfig} />
        <HeaderActions headerActionsConfig={headerActionsConfig} />
        <MobileNavigation headerNavigationConfig={headerNavigationConfig} />
      </div>
    </header>
  )
}