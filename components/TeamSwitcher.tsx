"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, Building2, Users } from "lucide-react"
import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { CreateTeamDialog } from "@/components/CreateTeamDialog"

const teams = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Personal Events",
    type: "personal" as const,
    slug: "personal",
    role: "owner" as const,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002", 
    name: "Event Organizers",
    type: "organization" as const,
    slug: "event-organizers",
    role: "admin" as const,
  },
]

const mockUser = {
  organizer_status: "approved" as const,
}

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = useState(teams[0])
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  const handleTeamSelect = (team: typeof teams[0]) => {
    setActiveTeam(team)
    console.log("Switching to team:", team)
  }

  const handleCreateTeam = (newTeam: any) => {
    console.log("Created new team:", newTeam)
    // In real app, this would update the teams list and switch to the new team
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {activeTeam.type === "personal" ? (
                    <Users className="size-4" />
                  ) : (
                    <Building2 className="size-4" />
                  )}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{activeTeam.name}</span>
                  <div className="flex items-center gap-1">
                    <span className="truncate text-xs capitalize">{activeTeam.type}</span>
                    {mockUser.organizer_status === "approved" && (
                      <Badge variant="secondary" className="text-[10px] px-1 py-0">
                        Organizer
                      </Badge>
                    )}
                  </div>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Teams
              </DropdownMenuLabel>
              {teams.map((team) => (
                <DropdownMenuItem
                  key={team.id}
                  onClick={() => handleTeamSelect(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border bg-background">
                    {team.type === "personal" ? (
                      <Users className="size-4" />
                    ) : (
                      <Building2 className="size-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{team.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {team.type} • {team.role}
                    </div>
                  </div>
                  {activeTeam.id === team.id && (
                    <DropdownMenuShortcut>✓</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="gap-2 p-2"
                onClick={() => setShowCreateDialog(true)}
              >
                <div className="flex size-6 items-center justify-center rounded-md border border-dashed bg-muted">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">Create team</div>
              </DropdownMenuItem>
              
              {mockUser.organizer_status !== "approved" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 p-2 text-blue-600">
                    <div className="font-medium">Apply as Organizer</div>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <CreateTeamDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onSuccess={handleCreateTeam}
      />
    </>
  )
}