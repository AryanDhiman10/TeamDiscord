import { ExitIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ActionTooltip } from "../action-tooltip"
import Link from "next/link"
import { UserAvatar } from "../user-avatar"

interface profileProps {
  imageUrl?: string
}

export function NavigationLogout(
  { imageUrl }: profileProps
) {
  return (
    <ActionTooltip
      side="right"
      align="center"
      label="Logout"
    >
      <Link href='/api/auth/signout'>
        <Button variant="outline" size="icon" name="Logout" className="bg-transparent border-0">
            <UserAvatar src={imageUrl} />
        </Button>
      </Link>
    </ActionTooltip>
  )
}
