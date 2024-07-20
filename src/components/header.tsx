import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Settings } from '@geist-ui/icons';
import { Button } from "@/components/ui/button"


export default function Header() {

    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-muted">
        <h1 className="text-2xl font-bold">Password Manager</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="w-6 h-6" />
              <span className="sr-only">Open settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card dark:bg-background">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="dark:hover:bg-muted">
              {/* <UserIcon className="w-4 h-4 mr-2" /> */}
              Manage Account
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-muted">
              {/* <LockIcon className="w-4 h-4 mr-2" /> */}
              Change Master Password
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-muted">
              {/* <SlidersVerticalIcon className="w-4 h-4 mr-2" /> */}
              App Preferences
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    )

}

