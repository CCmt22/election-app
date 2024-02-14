/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wr6CKYHrMNv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "../ballot/page";

export default function Component() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/">
        <HomeIcon className="h-6 w-6 text-red-900" />
      </Link>
      <Card className="w-full max-w-md p-6 bg-slate-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link className="underline" href="/register">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
