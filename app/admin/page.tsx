import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, UserCheck, UserX } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Get all staff profiles
  const { data: allStaff, count: totalStaff } = await supabase
    .from("staff_profiles")
    .select("*", { count: "exact" });

  // Get currently clocked-in staff
  const { data: activeEntries } = await supabase
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
    .is("clock_out", null);

  // Get today's entries
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const { data: todayEntries } = await supabase
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
    .gte("clock_in", today.toISOString())
    .order("clock_in", { ascending: false });

  const clockedInCount = activeEntries?.length || 0;
  const uniqueTodayStaff = new Set(todayEntries?.map((e) => e.user_id)).size;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of staff attendance and time tracking.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Staff
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStaff || 0}</div>
            <p className="text-xs text-muted-foreground">Registered employees</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Currently Working
            </CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {clockedInCount}
            </div>
            <p className="text-xs text-muted-foreground">Staff clocked in now</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Worked Today
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueTodayStaff}</div>
            <p className="text-xs text-muted-foreground">Unique staff today</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Not Working
            </CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(totalStaff || 0) - clockedInCount}
            </div>
            <p className="text-xs text-muted-foreground">Not clocked in</p>
          </CardContent>
        </Card>
      </div>

      {/* Currently working section */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              Currently Working
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Staff members currently clocked in
            </p>
          </div>
          <Link
            href="/admin/time-entries"
            className="text-sm text-primary hover:underline"
          >
            View all entries
          </Link>
        </CardHeader>
        <CardContent>
          {activeEntries && activeEntries.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeEntries.map((entry) => {
                const clockIn = new Date(entry.clock_in);
                const now = new Date();
                const diff = now.getTime() - clockIn.getTime();
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor(
                  (diff % (1000 * 60 * 60)) / (1000 * 60)
                );

                return (
                  <div
                    key={entry.id}
                    className="p-4 rounded-lg bg-green-500/5 border border-green-500/20"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">
                          {entry.staff_profiles?.first_name}{" "}
                          {entry.staff_profiles?.last_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {entry.staff_profiles?.position || "Staff"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {entry.staff_profiles?.department}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-500/10 text-green-600 border-green-500/30"
                      >
                        {hours}h {minutes}m
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Clocked in at{" "}
                      {clockIn.toLocaleTimeString("en-NG", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <UserX className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No staff members currently clocked in.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Today's activity */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Today&apos;s Activity</CardTitle>
          <p className="text-sm text-muted-foreground">
            All clock in/out events for today
          </p>
        </CardHeader>
        <CardContent>
          {todayEntries && todayEntries.length > 0 ? (
            <div className="space-y-3">
              {todayEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-foreground">
                        {entry.staff_profiles?.first_name?.[0]}
                        {entry.staff_profiles?.last_name?.[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">
                        {entry.staff_profiles?.first_name}{" "}
                        {entry.staff_profiles?.last_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {entry.staff_profiles?.department}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {new Date(entry.clock_in).toLocaleTimeString("en-NG", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                      {entry.clock_out && (
                        <>
                          {" - "}
                          {new Date(entry.clock_out).toLocaleTimeString(
                            "en-NG",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                        </>
                      )}
                    </p>
                    <Badge variant={entry.clock_out ? "secondary" : "default"}>
                      {entry.clock_out ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No activity recorded today yet.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
