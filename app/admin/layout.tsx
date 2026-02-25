import React from "react"
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export default async function AdminLayout({
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

  // Fetch staff profile and check admin status
  const { data: profile } = await supabase
    .from("staff_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  // Check if user is admin
  if (!profile?.is_admin) {
    redirect("/portal");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar user={user} profile={profile} />
      <div className="lg:pl-64">
        <AdminHeader user={user} profile={profile} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
