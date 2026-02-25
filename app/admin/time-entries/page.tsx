import { createClient } from "@/lib/supabase/server";
import { TimeEntriesTable } from "@/components/admin/time-entries-table";

export default async function TimeEntriesPage() {
  const supabase = await createClient();

  // Get all time entries with staff profiles
  const { data: entries } = await supabase
    .from("time_entries")
    .select(
      `
      *,
      staff_profiles (
        first_name,
        last_name,
        department,
        position
      )
    `
    )
    .order("clock_in", { ascending: false })
    .limit(100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Time Entries</h2>
        <p className="text-muted-foreground">
          View all staff clock in/out records.
        </p>
      </div>

      <TimeEntriesTable entries={entries || []} />
    </div>
  );
}
