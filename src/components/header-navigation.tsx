"use client"
import { CalendarCheck, Menu, ShieldUser, Swords, type LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export interface HeaderNavigationConfigProps {
  icon: LucideIcon
  title: string
  href: string
}

export function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(Boolean)

  const headerNavigationConfig: HeaderNavigationConfigProps[] = [
    {
      icon: ShieldUser,
      title: 'Eu',
      href: '/me'
    },
    {
      icon: Swords,
      title: 'Arena',
      href: '/arena'
    },
    {
      icon: CalendarCheck,
      title: 'Agenda',
      href: '/schedule'
    }
  ]

  return (
    <>
      {/* desktop navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {headerNavigationConfig.map((item) => (
          <Button key={item.href} asChild variant='ghost' size='sm'>
            <Link href={item.href} aria-label={item.title}>
              <item.icon className="h-5 w-5"/>
              <span>
                {item.title}
              </span>
            </Link>
          </Button>
        ))}
        <ModeToggle />
      </nav>

      {/* mobile navigation */}
      <nav className="md:hidden flex gap-1">
        <ModeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5"/>
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
                <Button key={item.href} asChild variant='ghost' size='sm' className="justify-start" onClick={() => setIsOpen(false)}>
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-5 w-5"/>
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}