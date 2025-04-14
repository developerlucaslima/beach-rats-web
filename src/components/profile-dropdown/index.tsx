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

import { Button } from "../ui/button"
import { profileDropdownConfig } from "./config"
import { ProfileAvatar } from "./profile-avatar"

export function ProfileAvatarDropdown() {
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
                  <DropdownMenuItem key={itemIndex} disabled={item.disabled}>
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
