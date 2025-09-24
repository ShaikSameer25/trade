'use client'

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import {
  Bot,
  CandlestickChart,
  LayoutDashboard,
  LineChart,
  Settings,
  Wallet,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { UserNav } from '@/components/dashboard/user-nav'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const menuItems = [
    {
      href: '/dashboard',
      label: 'Trading',
      icon: LayoutDashboard,
    },
    {
      href: '/dashboard/analytics',
      label: 'Analytics',
      icon: LineChart,
    },
    {
      href: '/dashboard/ai-signals',
      label: 'AI Signals',
      icon: Bot,
    },
    {
        href: '/dashboard/profile',
        label: 'Profile & Wallet',
        icon: Wallet,
    }
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <CandlestickChart className="w-8 h-8 text-sidebar-primary" />
            <span className="text-xl font-semibold text-sidebar-foreground">TradeSim</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={{ children: 'Settings' }}>
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Can add breadcrumbs or page title here */}
          </div>
          <UserNav />
        </header>
        <main className="flex-1 p-4 sm:p-6 bg-background/90">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
