import { ExitIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ActionTooltip } from "../action-tooltip"
import Link from "next/link"

export function NavigationLogout() {
  return (
    <ActionTooltip
      side="right"
      align="center"
      label="Logout"
    >
      <Link href='/api/auth/signout'>
        <Button variant="outline" size="icon" name="Logout" className="bg-transparent border-0">
            <ExitIcon className="h-4 w-4"/>
        </Button>
      </Link>
    </ActionTooltip>
  )
}
