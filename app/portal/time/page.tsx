import { createClient } from "@/lib/supabase/server";
import { ClockWidget } from "@/components/portal/clock-widget";
import { TimeHistory } from "@/components/portal/time-history";

export default async function TimePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Get active clock-in (if any)
  const { data: activeEntry } = await supabase
    .from("time_entries")
    .select("*")
    .eq("user_id", user.id)
    .is("clock_out", null)
    .order("clock_in", { ascending: false })
    .limit(1)
    .single();

  // Get all time entries for history
  const { data: allEntries } = await supabase
    .from("time_entries")
    .select("*")
    .eq("user_id", user.id)
    .order("clock_in", { ascending: false })
    .limit(50);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Time Tracking</h2>
        <p className="text-muted-foreground">
          Clock in and out, and view your complete time history.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ClockWidget activeEntry={activeEntry} />
        </div>
        <div className="lg:col-span-2">
          <TimeHistory entries={allEntries || []} />
        </div>
      </div>
    </div>
  );
}
