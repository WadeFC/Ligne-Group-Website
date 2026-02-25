import { createClient } from "@/lib/supabase/server";
import { StaffTable } from "@/components/admin/staff-table";

export default async function StaffManagementPage() {
  const supabase = await createClient();

  // Get all staff profiles with their latest time entry
  const { data: staff } = await supabase
    .from("staff_profiles")
    .select("*")
    .order("first_name", { ascending: true });

  // Get active entries to determine who's clocked in
  const { data: activeEntries } = await supabase
    .from("time_entries")
    .select("user_id")
    .is("clock_out", null);

  const activeUserIds = new Set(activeEntries?.map((e) => e.user_id) || []);

  const staffWithStatus =
    staff?.map((s) => ({
      ...s,
      is_clocked_in: activeUserIds.has(s.id),
    })) || [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Staff Management</h2>
        <p className="text-muted-foreground">
          View and manage all staff members and their admin privileges.
        </p>
      </div>

      <StaffTable staff={staffWithStatus} />
    </div>
  );
}
