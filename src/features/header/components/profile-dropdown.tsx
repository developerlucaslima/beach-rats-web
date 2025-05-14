"use client"
import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/features/auth/stores/use-auth-store"

import { Button } from "../../../components/ui/button"
import { profileDropdownConfig } from "../config/profile-dropdown-config"
import { ProfileAvatar } from "./profile-avatar"

export function ProfileAvatarDropdown() {
  const router = useRouter()
  const logout = useAuthStore(state => state.logout)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="size-8 rounded-full m-1">
          <ProfileAvatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{profileDropdownConfig.menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {profileDropdownConfig.groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <DropdownMenuGroup>
              {group.items.map((item, itemIndex) =>
                item.children ? (
                  <DropdownMenuSub key={itemIndex}>
                    <DropdownMenuSubTrigger>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {item.children.map((child, childIndex) => (
                          <DropdownMenuItem key={childIndex}>
                            <child.icon className="mr-2 h-4 w-4" />
                            <span>{child.label}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem
                    key={itemIndex}
                    disabled={item.disabled}
                    onClick={() => {
                      if (item.label === 'Sair') {
                        logout()
                        router.push('/sign-in')
                      }
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                    {item.shortCut && (
                      <DropdownMenuShortcut>{item.shortCut}</DropdownMenuShortcut>
                    )}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuGroup>
            {groupIndex < profileDropdownConfig.groups.length - 1 && (
              <DropdownMenuSeparator />
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
