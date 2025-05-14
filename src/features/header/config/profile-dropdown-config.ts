import {
  LogOut,
  LucideIcon,
  Settings,
  User,
} from "lucide-react"

export interface DropDownItem {
  icon: LucideIcon
  label: string
  shortCut?: string
  disabled?: boolean
  children?: DropDownItem[]
}

export interface DropDownGroup {
  items: DropDownItem[]
}

export interface ProfileAvatarDropdownConfigProps {
  menuLabel: string
  groups: DropDownGroup[]
}

export const profileDropdownConfig: ProfileAvatarDropdownConfigProps = {
  menuLabel: "Minha conta",
  groups: [
    {
      items: [
        {
          icon: User,
          label: "Editar perfil",
          // shortCut: "⇧⌘P",
          shortCut: "⇧E",
        },
      ],
    },
    // {
    //   items: [
    //     {
    //       icon: Users,
    //       label: "Team",
    //     },
    //     {
    //       icon: UserPlus,
    //       label: "Invite users",
    //       children: [
    //         { icon: Mail, label: "Email" },
    //         { icon: MessageSquare, label: "Message" },
    //         { icon: PlusCircle, label: "More..." },
    //       ],
    //     },
    //     {
    //       icon: Plus,
    //       label: "New Team",
    //       shortCut: "⌘+T",
    //     },
    //   ],
    // },
    {
      items: [
        {
          icon: Settings,
          label: "Configurações",
          disabled: true,
          shortCut: "⇧⌘C",
        },
      ],
    },
    {
      items: [
        {
          icon: LogOut,
          label: "Sair",
          // shortCut: "⇧⌘Q",
          shortCut: "⇧S",
        },
      ],
    },
  ],
}
