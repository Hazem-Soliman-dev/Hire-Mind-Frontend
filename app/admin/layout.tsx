"use client"

import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Brain, LayoutDashboard, Building2, Users, DollarSign, BarChart3, Settings, LogOut, ChevronDown, Shield, Database } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Organizations",
    url: "/admin/organizations",
    icon: Building2
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users
  },
  {
    title: "Subscriptions",
    url: "/admin/subscriptions",
    icon: DollarSign
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3
  },
  {
    title: "System",
    url: "/admin/system",
    icon: Database
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings
  }
]

function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center space-x-2 px-2 py-1">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">Hire Mind</span>
              <Shield className="h-4 w-4 text-red-500 ml-auto" />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span>Admin User</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Admin Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div className="h-6 w-px bg-gray-200" />
            <h2 className="text-lg font-semibold text-red-600">Admin Portal</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              System Administrator
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
