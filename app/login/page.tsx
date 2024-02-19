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
import { auth, firestore } from "../../firebase";
import { useRouter } from "next/navigation";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState("");

  const isLoginDisabled = email.trim() === "" || password.trim() === "";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear previous errors when email is changed
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear previous errors when password is changed
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    // Perform data validation
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    try {
      // Call your authentication function here
      await signInWithEmailAndPassword(auth, email, password);
      //login should route them to the ballot page
      console.log("Login with:", user, email);
      router.push("/ballot"); //if the password and email has been entered then push to the ballot page
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
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
        <Card className="w-full max-w-2xl p-8 bg-slate-200 relative">
          <CardHeader className="space-y-1">
            <div className="absolute top-4 left-4">
              <Link href="/">
                <HomeIcon className="h-6 w-6 text-black-900" />
              </Link>
            </div>
            <CardTitle className="text-4xl font-bold">Login</CardTitle>

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
                  value={email}
                  onChange={handleEmailChange}
                />{" "}
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
                {/*//This is the code that we use to add the email and password and remove the email*/}
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
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <Button
                className={`w-full ${
                  isLoginDisabled ? "bg-gray-500" : "bg-black"
                } text-white`}
                type="submit"
                disabled={isLoginDisabled}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?
              <Link className="underline" href="/register">
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
