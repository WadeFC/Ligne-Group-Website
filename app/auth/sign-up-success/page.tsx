import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Mail, CheckCircle2 } from "lucide-react";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Building2 className="h-10 w-10 text-accent" />
            <span className="text-2xl font-serif font-bold text-primary-foreground">
              Ligne Group
            </span>
          </Link>
        </div>

        <Card className="border-0 shadow-2xl text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-semibold">
              Check your email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground">
              We have sent a confirmation link to your email address. Please click
              the link to verify your account and complete registration.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                {"Didn't receive the email? Check your spam folder or "}
                <Link href="/auth/sign-up" className="text-primary hover:underline">
                  try again
                </Link>
              </p>
            </div>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/auth/login">Back to login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
