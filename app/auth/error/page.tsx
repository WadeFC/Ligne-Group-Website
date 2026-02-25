import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, AlertTriangle } from "lucide-react";

export default function AuthErrorPage() {
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
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-semibold">
              Authentication Error
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Something went wrong during authentication. This could be due to an
              expired link or an invalid request.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/auth/login">Try again</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/">Back to website</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
