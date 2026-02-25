"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, TrendingUp, Activity } from "lucide-react";

interface StatsCardsProps {
  hoursToday: number;
  hoursThisWeek: number;
  daysWorkedThisWeek: number;
  isClockedIn: boolean;
}

export function StatsCards({
  hoursToday,
  hoursThisWeek,
  daysWorkedThisWeek,
  isClockedIn,
}: StatsCardsProps) {
  const stats = [
    {
      title: "Hours Today",
      value: hoursToday.toFixed(1),
      unit: "hrs",
      icon: Clock,
      description: "Time worked today",
    },
    {
      title: "Hours This Week",
      value: hoursThisWeek.toFixed(1),
      unit: "hrs",
      icon: TrendingUp,
      description: "Total weekly hours",
    },
    {
      title: "Days Worked",
      value: daysWorkedThisWeek.toString(),
      unit: "days",
      icon: Calendar,
      description: "This week",
    },
    {
      title: "Status",
      value: isClockedIn ? "Active" : "Inactive",
      unit: "",
      icon: Activity,
      description: isClockedIn ? "Currently working" : "Not clocked in",
      highlight: isClockedIn,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon
              className={`h-4 w-4 ${
                stat.highlight ? "text-green-500" : "text-muted-foreground"
              }`}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stat.value}
              {stat.unit && (
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  {stat.unit}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
