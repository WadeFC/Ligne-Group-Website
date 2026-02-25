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
  Settings,
  Building2,
  LayoutDashboard,
  Clock,
  FileText,
} from "lucide-react";

interface StaffProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  department: string | null;
  position: string | null;
  is_admin: boolean;
}

interface PortalHeaderProps {
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

export function PortalHeader({ user, profile }: PortalHeaderProps) {
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
    : user.email?.[0]?.toUpperCase() || "U";

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
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/portal" && pathname.startsWith(item.href));
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
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 items-center">
          <h1 className="text-lg font-semibold text-foreground">Staff Portal</h1>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2"
              >
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">
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
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/portal/profile" className="cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/portal/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
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
