"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import {
  Building2,
  LayoutDashboard,
  Users,
  Clock,
  FileBarChart,
  Settings,
  ArrowLeft,
} from "lucide-react";

interface StaffProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  department: string | null;
  position: string | null;
  is_admin: boolean;
}

interface AdminSidebarProps {
  user: User;
  profile: StaffProfile | null;
}

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Staff Management", href: "/admin/staff", icon: Users },
  { name: "Time Entries", href: "/admin/time-entries", icon: Clock },
  { name: "Reports", href: "/admin/reports", icon: FileBarChart },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar({ profile }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center border-b border-primary-foreground/10">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-lg font-serif font-bold text-primary-foreground">
              Ligne Group
            </span>
          </Link>
        </div>

        {/* Admin badge */}
        <div className="py-3 px-3 bg-accent/20 rounded-lg">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider">
            Admin Dashboard
          </p>
          <p className="text-sm text-primary-foreground mt-1">
            {profile?.first_name} {profile?.last_name}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Back to portal */}
          <div className="mt-auto pt-4 border-t border-primary-foreground/10">
            <Link
              href="/portal"
              className="flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Portal
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
