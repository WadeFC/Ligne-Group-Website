"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Menu,
  LogOut,
  User as UserIcon,
  Building2,
  LayoutDashboard,
  Users,
  Clock,
  FileBarChart,
  Settings,
  ArrowLeft,
  Shield,
} from "lucide-react";

interface StaffProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  department: string | null;
  position: string | null;
  is_admin: boolean;
}

interface AdminHeaderProps {
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

export function AdminHeader({ user, profile }: AdminHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const displayName = profile?.first_name
    ? `${profile.first_name} ${profile.last_name || ""}`
    : user.email;

  const initials = profile?.first_name
    ? `${profile.first_name[0]}${profile.last_name?.[0] || ""}`
    : user.email?.[0]?.toUpperCase() || "A";

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-card px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-primary p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center px-6 border-b border-primary-foreground/10">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Building2 className="h-8 w-8 text-accent" />
                <span className="text-lg font-serif font-bold text-primary-foreground">
                  Ligne Group
                </span>
              </Link>
            </div>
            <div className="py-3 px-4 mx-4 mt-4 bg-accent/20 rounded-lg">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                Admin Dashboard
              </p>
            </div>
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/admin" && pathname.startsWith(item.href));
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-x-3 rounded-md p-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-4 border-t border-primary-foreground/10">
                <Link
                  href="/portal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-primary-foreground/70"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Portal
                </Link>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <h1 className="text-lg font-semibold text-foreground">Admin Panel</h1>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-medium text-accent-foreground">
                    {initials}
                  </span>
                </div>
                <span className="hidden sm:block text-sm font-medium">
                  {displayName}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{displayName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <p className="text-xs text-accent font-medium">Administrator</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/portal/profile" className="cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="text-destructive cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
