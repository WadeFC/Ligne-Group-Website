import { createClient } from "@/lib/supabase/server";
import { ClockWidget } from "@/components/portal/clock-widget";
import { RecentTimeEntries } from "@/components/portal/recent-time-entries";
import { StatsCards } from "@/components/portal/stats-cards";

export default async function PortalDashboard() {
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

  // Get recent time entries
  const { data: recentEntries } = await supabase
    .from("time_entries")
    .select("*")
    .eq("user_id", user.id)
    .order("clock_in", { ascending: false })
    .limit(10);

  // Get this week's stats
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const { data: weekEntries } = await supabase
    .from("time_entries")
    .select("*")
    .eq("user_id", user.id)
    .gte("clock_in", startOfWeek.toISOString())
    .not("clock_out", "is", null);

  // Calculate total hours this week
  const totalHoursThisWeek =
    weekEntries?.reduce((acc, entry) => {
      const clockIn = new Date(entry.clock_in);
      const clockOut = new Date(entry.clock_out);
      const hours = (clockOut.getTime() - clockIn.getTime()) / (1000 * 60 * 60);
      return acc + hours;
    }, 0) || 0;

  // Get today's entries
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayEntries = weekEntries?.filter(
    (entry) => new Date(entry.clock_in) >= today
  );
  const hoursToday =
    todayEntries?.reduce((acc, entry) => {
      const clockIn = new Date(entry.clock_in);
      const clockOut = new Date(entry.clock_out);
      const hours = (clockOut.getTime() - clockIn.getTime()) / (1000 * 60 * 60);
      return acc + hours;
    }, 0) || 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your time tracking overview.
        </p>
      </div>

      <StatsCards
        hoursToday={hoursToday}
        hoursThisWeek={totalHoursThisWeek}
        daysWorkedThisWeek={weekEntries?.length || 0}
        isClockedIn={!!activeEntry}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <ClockWidget activeEntry={activeEntry} />
        <RecentTimeEntries entries={recentEntries || []} />
      </div>
    </div>
  );
}
