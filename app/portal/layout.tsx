import React from "react"
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { PortalHeader } from "@/components/portal/portal-header";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Fetch staff profile
  const { data: profile } = await supabase
    .from("staff_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div className="min-h-screen bg-muted/30">
      <PortalSidebar user={user} profile={profile} />
      <div className="lg:pl-64">
        <PortalHeader user={user} profile={profile} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
