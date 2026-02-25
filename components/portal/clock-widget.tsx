"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Clock, Play, Square, Loader2 } from "lucide-react";

interface TimeEntry {
  id: string;
  user_id: string;
  clock_in: string;
  clock_out: string | null;
  notes: string | null;
}

interface ClockWidgetProps {
  activeEntry: TimeEntry | null;
}

export function ClockWidget({ activeEntry }: ClockWidgetProps) {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState("00:00:00");
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeEntry) {
      const updateElapsed = () => {
        const clockIn = new Date(activeEntry.clock_in);
        const now = new Date();
        const diff = now.getTime() - clockIn.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setElapsedTime(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      };
      updateElapsed();
      const timer = setInterval(updateElapsed, 1000);
      return () => clearInterval(timer);
    }
  }, [activeEntry]);

  async function handleClockIn() {
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    await supabase.from("time_entries").insert({
      user_id: user.id,
      clock_in: new Date().toISOString(),
      notes: notes || null,
    });

    setNotes("");
    router.refresh();
    setLoading(false);
  }

  async function handleClockOut() {
    if (!activeEntry) return;
    setLoading(true);
    const supabase = createClient();

    await supabase
      .from("time_entries")
      .update({
        clock_out: new Date().toISOString(),
        notes: notes || activeEntry.notes,
      })
      .eq("id", activeEntry.id);

    setNotes("");
    router.refresh();
    setLoading(false);
  }

  const formattedTime = currentTime.toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-accent" />
          Time Clock
        </CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current time display */}
        <div className="text-center py-6 bg-muted/50 rounded-lg">
          <p className="text-4xl font-mono font-bold text-foreground">
            {formattedTime}
          </p>
          {activeEntry && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Time worked</p>
              <p className="text-2xl font-mono font-semibold text-accent">
                {elapsedTime}
              </p>
            </div>
          )}
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2">
          <div
            className={`h-3 w-3 rounded-full ${
              activeEntry ? "bg-green-500 animate-pulse" : "bg-muted-foreground"
            }`}
          />
          <span className="text-sm font-medium">
            {activeEntry ? "Currently clocked in" : "Not clocked in"}
          </span>
        </div>

        {/* Notes field */}
        <div className="space-y-2">
          <Label htmlFor="notes">Notes (optional)</Label>
          <Textarea
            id="notes"
            placeholder={
              activeEntry
                ? "Add notes before clocking out..."
                : "Add notes for this shift..."
            }
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />
        </div>

        {/* Clock in/out button */}
        {activeEntry ? (
          <Button
            onClick={handleClockOut}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Clocking out...
              </>
            ) : (
              <>
                <Square className="mr-2 h-5 w-5" />
                Clock Out
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={handleClockIn}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Clocking in...
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" />
                Clock In
              </>
            )}
          </Button>
        )}

        {activeEntry && (
          <p className="text-xs text-muted-foreground text-center">
            Clocked in at{" "}
            {new Date(activeEntry.clock_in).toLocaleTimeString("en-NG", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
