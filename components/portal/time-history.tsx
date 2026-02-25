"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

interface TimeEntry {
  id: string;
  user_id: string;
  clock_in: string;
  clock_out: string | null;
  notes: string | null;
}

interface TimeHistoryProps {
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
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function TimeHistory({ entries }: TimeHistoryProps) {
  // Group entries by date
  const groupedEntries = entries.reduce(
    (groups, entry) => {
      const date = new Date(entry.clock_in).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(entry);
      return groups;
    },
    {} as Record<string, TimeEntry[]>
  );

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-accent" />
          Time History
        </CardTitle>
        <CardDescription>Your complete attendance record</CardDescription>
      </CardHeader>
      <CardContent>
        {entries.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <CalendarDays className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No time entries yet.</p>
            <p className="text-sm">Your attendance history will appear here.</p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Clock In</TableHead>
                  <TableHead>Clock Out</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">
                      {formatDate(entry.clock_in)}
                    </TableCell>
                    <TableCell>{formatTime(entry.clock_in)}</TableCell>
                    <TableCell>
                      {entry.clock_out ? formatTime(entry.clock_out) : "-"}
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-muted-foreground">
                      {entry.notes || "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
