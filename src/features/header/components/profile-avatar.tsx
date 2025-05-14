import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

export const ProfileAvatar = () => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
