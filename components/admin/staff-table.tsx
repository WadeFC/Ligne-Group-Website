"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Users, MoreHorizontal, Shield, ShieldOff, Search } from "lucide-react";

interface StaffMember {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  department: string | null;
  position: string | null;
  phone: string | null;
  is_admin: boolean;
  is_clocked_in: boolean;
  created_at: string;
}

interface StaffTableProps {
  staff: StaffMember[];
}

export function StaffTable({ staff }: StaffTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();

  const filteredStaff = staff.filter((member) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      member.first_name?.toLowerCase().includes(searchLower) ||
      member.last_name?.toLowerCase().includes(searchLower) ||
      member.email?.toLowerCase().includes(searchLower) ||
      member.department?.toLowerCase().includes(searchLower)
    );
  });

  async function toggleAdmin(staffId: string, currentStatus: boolean) {
    setUpdating(staffId);
    const supabase = createClient();

    await supabase
      .from("staff_profiles")
      .update({ is_admin: !currentStatus })
      .eq("id", staffId);

    router.refresh();
    setUpdating(null);
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              All Staff Members
            </CardTitle>
            <CardDescription>
              {staff.length} total staff members registered
            </CardDescription>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {filteredStaff.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No staff members found.</p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStaff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs font-medium text-primary-foreground">
                            {member.first_name?.[0]}
                            {member.last_name?.[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">
                            {member.first_name} {member.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{member.department || "-"}</TableCell>
                    <TableCell>{member.position || "-"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={member.is_clocked_in ? "default" : "secondary"}
                        className={
                          member.is_clocked_in
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : ""
                        }
                      >
                        {member.is_clocked_in ? "Working" : "Offline"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {member.is_admin ? (
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          <Shield className="h-3 w-3 mr-1" />
                          Admin
                        </Badge>
                      ) : (
                        <Badge variant="outline">Staff</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={updating === member.id}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                              toggleAdmin(member.id, member.is_admin)
                            }
                          >
                            {member.is_admin ? (
                              <>
                                <ShieldOff className="mr-2 h-4 w-4" />
                                Remove Admin
                              </>
                            ) : (
                              <>
                                <Shield className="mr-2 h-4 w-4" />
                                Make Admin
                              </>
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
