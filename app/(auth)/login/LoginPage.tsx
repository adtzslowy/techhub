"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";


export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    setLoading(false);

    if (res?.error) {
      setError("Email dan password salah.");
      return;
    }

    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 font-display">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">
            Sign In TechHub
          </CardTitle>
          <p className="text-sm text-zinc-500">
            Masuk untuk mengelola dashboard
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Masukkan Email Anda." required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passsword">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Masukkan Password Anda. " required />
            </div>

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
              {loading ? "Memproses..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
