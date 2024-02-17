"use client";
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
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoginDisabled = email.trim() === "" || password.trim() === "";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/back3.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="absolute top-4 right-4">
          <Link href="/">
            <HomeIcon className="h-6 w-6 text-red-900" />
          </Link>
        </div>
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
                  onChange={handleEmailChange}
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
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={handlePasswordChange}
                />
              </div>
              <Button
                className={`w-full ${
                  isLoginDisabled ? "bg-gray-500" : "bg-black"
                } text-white`}
                type="submit"
                disabled={isLoginDisabled}
              >
                <Link className="underline" href="/ballot">
                  Login
                </Link>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?
              <Link className="underline" href="/Register">
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
