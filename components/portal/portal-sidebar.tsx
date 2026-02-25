"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import {
  Building2,
  LayoutDashboard,
  Clock,
  User as UserIcon,
  FileText,
  Settings,
} from "lucide-react";

interface StaffProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  department: string | null;
  position: string | null;
  is_admin: boolean;
}

interface PortalSidebarProps {
  user: User;
  profile: StaffProfile | null;
}

const navigation = [
  { name: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { name: "Time Tracking", href: "/portal/time", icon: Clock },
  { name: "My Profile", href: "/portal/profile", icon: UserIcon },
  { name: "Documents", href: "/portal/documents", icon: FileText },
  { name: "Settings", href: "/portal/settings", icon: Settings },
];

export function PortalSidebar({ profile }: PortalSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
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

          {/* User info */}
          <div className="py-4 border-b border-primary-foreground/10">
            <p className="text-sm font-medium text-primary-foreground">
              {profile?.first_name} {profile?.last_name}
            </p>
            <p className="text-xs text-primary-foreground/60">
              {profile?.position || "Staff Member"}
            </p>
            <p className="text-xs text-accent mt-1">
              {profile?.department || "General"}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/portal" && pathname.startsWith(item.href));
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

            {/* Admin link */}
            {profile?.is_admin && (
              <div className="mt-auto pt-4 border-t border-primary-foreground/10">
                <Link
                  href="/admin"
                  className="flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-accent hover:bg-primary-foreground/10 transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  Admin Dashboard
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
