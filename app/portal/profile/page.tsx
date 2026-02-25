"use client";

import React from "react"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, User, CheckCircle2 } from "lucide-react";

const departments = [
  "Procurement",
  "Supply Chain & Logistics",
  "Infrastructure Development",
  "Consultancy",
  "Finance",
  "Human Resources",
  "Administration",
  "IT & Technology",
];

interface StaffProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  department: string | null;
  position: string | null;
  avatar_url: string | null;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<StaffProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/login");
        return;
      }

      const { data } = await supabase
        .from("staff_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(
        data || {
          id: user.id,
          first_name: null,
          last_name: null,
          email: user.email || null,
          phone: null,
          department: null,
          position: null,
          avatar_url: null,
        }
      );
      setLoading(false);
    }

    fetchProfile();
  }, [router]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!profile) return;

    setSaving(true);
    setError(null);
    setSuccess(false);

    const supabase = createClient();
    const { error } = await supabase
      .from("staff_profiles")
      .upsert({
        id: profile.id,
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email,
        phone: profile.phone,
        department: profile.department,
        position: profile.position,
      })
      .eq("id", profile.id);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      router.refresh();
      setTimeout(() => setSuccess(false), 3000);
    }

    setSaving(false);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold text-foreground">My Profile</h2>
        <p className="text-muted-foreground">
          Manage your personal information and preferences.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-accent" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Update your profile details visible to your colleagues and managers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-500/50 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-600">
                  Profile updated successfully!
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  value={profile.first_name || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, first_name: e.target.value })
                  }
                  disabled={saving}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  value={profile.last_name || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, last_name: e.target.value })
                  }
                  disabled={saving}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={profile.email || ""}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                value={profile.phone || ""}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                placeholder="+234 800 000 0000"
                disabled={saving}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select
                  value={profile.department || ""}
                  onValueChange={(value) =>
                    setProfile({ ...profile, department: value })
                  }
                  disabled={saving}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  value={profile.position || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, position: e.target.value })
                  }
                  placeholder="Your job title"
                  disabled={saving}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save changes"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
