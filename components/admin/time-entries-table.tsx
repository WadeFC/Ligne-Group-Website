"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Search, Filter } from "lucide-react";

interface TimeEntry {
  id: string;
  user_id: string;
  clock_in: string;
  clock_out: string | null;
  notes: string | null;
  staff_profiles: {
    first_name: string | null;
    last_name: string | null;
    department: string | null;
    position: string | null;
  } | null;
}

interface TimeEntriesTableProps {
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

export function TimeEntriesTable({ entries }: TimeEntriesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const departments = [
    ...new Set(entries.map((e) => e.staff_profiles?.department).filter(Boolean)),
  ];

  const filteredEntries = entries.filter((entry) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      entry.staff_profiles?.first_name?.toLowerCase().includes(searchLower) ||
      entry.staff_profiles?.last_name?.toLowerCase().includes(searchLower) ||
      entry.staff_profiles?.department?.toLowerCase().includes(searchLower);

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && !entry.clock_out) ||
      (statusFilter === "completed" && entry.clock_out);

    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              All Time Entries
            </CardTitle>
            <CardDescription>
              Showing {filteredEntries.length} of {entries.length} entries
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-full sm:w-48"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {filteredEntries.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No time entries found.</p>
          </div>
        ) : (
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff Member</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Clock In</TableHead>
                  <TableHead>Clock Out</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-medium text-primary-foreground">
                            {entry.staff_profiles?.first_name?.[0]}
                            {entry.staff_profiles?.last_name?.[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {entry.staff_profiles?.first_name}{" "}
                            {entry.staff_profiles?.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {entry.staff_profiles?.department}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {formatDate(entry.clock_in)}
                    </TableCell>
                    <TableCell className="text-sm">
                      {formatTime(entry.clock_in)}
                    </TableCell>
                    <TableCell className="text-sm">
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
                    <TableCell className="max-w-[150px] truncate text-sm text-muted-foreground">
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
