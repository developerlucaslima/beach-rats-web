import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import type { HeaderNavigationConfigProps } from "../config/header-navigation-config"

export interface MobileNavigationProps {
  headerNavigationConfig: HeaderNavigationConfigProps[]
}

export const MobileNavigation = ({ headerNavigationConfig }: MobileNavigationProps) => {
  return (
    <nav className="md:hidden flex gap-1">
      <Sheet >
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
          <SheetHeader>
            <SheetTitle className="hidden">My Hidden Title</SheetTitle>
            <SheetDescription className="hidden">Additional description if needed.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            {headerNavigationConfig.map(item => (
              <Link key={item.href} href={item.href}>
                <item.icon size={20} className="mr-2 h-5 w-5" />
                <span>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav >
  )
}