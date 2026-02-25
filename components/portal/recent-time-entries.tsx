"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from "lucide-react";

interface TimeEntry {
  id: string;
  user_id: string;
  clock_in: string;
  clock_out: string | null;
  notes: string | null;
}

interface RecentTimeEntriesProps {
  entries: TimeEntry[];
}

function formatDuration(clockIn: string, clockOut: string | null): string {
  if (!clockOut) return "In progress";
  const start = new Date(clockIn);
  const end = new Date(clockOut);
  const diff = end.getTime() - start.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
}

function formatTime(date: string): string {
  return new Date(date).toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-NG", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function RecentTimeEntries({ entries }: RecentTimeEntriesProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5 text-accent" />
          Recent Activity
        </CardTitle>
        <CardDescription>Your recent time entries</CardDescription>
      </CardHeader>
      <CardContent>
        {entries.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No time entries yet.</p>
            <p className="text-sm">Clock in to start tracking your time.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {formatDate(entry.clock_in)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatTime(entry.clock_in)}
                    {entry.clock_out && ` - ${formatTime(entry.clock_out)}`}
                  </p>
                  {entry.notes && (
                    <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                      {entry.notes}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <Badge
                    variant={entry.clock_out ? "secondary" : "default"}
                    className={
                      entry.clock_out
                        ? ""
                        : "bg-green-500/10 text-green-600 border-green-500/20"
                    }
                  >
                    {formatDuration(entry.clock_in, entry.clock_out)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
