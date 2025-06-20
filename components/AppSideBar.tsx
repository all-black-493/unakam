"use client";

import {
  Calendar,
  ChevronDown,
  Home,
  Search,
  Ticket,
  User,
  Plus,
} from "lucide-react"
import { useState } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "./TeamSwitcher";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://github.com/shadcn.png",
  organizer_status: "approved" as const,
}

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
}

export function AppSidebar() {
  const [eventsOpen, setEventsOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();
  const canCreateEvents = mockUser.organizer_status === "approved";

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push("/sign-in");
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-1">
        <TeamSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/events">
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible open={eventsOpen} onOpenChange={setEventsOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Calendar />
                      <span>Events</span>
                      <ChevronDown className={`ml-auto transition-transform ${eventsOpen ? 'rotate-180' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/events/nearby">Nearby</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/events/trending">Trending</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      {canCreateEvents && (
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="/events/create" className="text-blue-600 font-medium">
                              <Plus className="size-4" />
                              Create Event
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={discoverOpen} onOpenChange={setDiscoverOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Search />
                      <span>Discover Events</span>
                      <ChevronDown className={`ml-auto transition-transform ${discoverOpen ? 'rotate-180' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/discover/filter">Filter Events</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/discover/calendar">Calendar View</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/discover/places">Places View</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/discover/saved">Saved Events</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/tickets">
                    <Ticket />
                    <span>My Tickets</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible open={connectOpen} onOpenChange={setConnectOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <User />
                      <span>Connect</span>
                      <ChevronDown className={`ml-auto transition-transform ${connectOpen ? 'rotate-180' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/connect/friends">Find Friends</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="/connect/eyfa">EYFA</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {mockUser.organizer_status !== "none" && (
          <SidebarGroup>
            <SidebarGroupContent>
              <div className="px-2 py-1">
                <Badge
                  variant={mockUser.organizer_status === "approved" ? "default" : "secondary"}
                  className="w-full justify-center"
                >
                  {mockUser.organizer_status === "approved" && "✓ Verified Organizer"}
                  {mockUser.organizer_status === "pending" && "⏳ Pending Review"}
                  {mockUser.organizer_status === "rejected" && "❌ Application Rejected"}
                </Badge>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )


}