/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KZ6UbFWp1LX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { HomeIcon } from "../ballot/page";

export default function Component() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link href="/">
        <HomeIcon className="h-6 w-6 text-red-900" />
      </Link>
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to create an account
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="id-number">ID Number</Label>
          <Input id="id-number" placeholder="Enter your ID number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="province">Province</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Province</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Gauteng</DropdownMenuItem>
              <DropdownMenuItem>Western Cape</DropdownMenuItem>
              <DropdownMenuItem>KwaZulu-Natal</DropdownMenuItem>
              <DropdownMenuItem>Eastern Cape</DropdownMenuItem>
              <DropdownMenuItem>Free State</DropdownMenuItem>
              <DropdownMenuItem>North West</DropdownMenuItem>
              <DropdownMenuItem>Limpopo</DropdownMenuItem>
              <DropdownMenuItem>Mpumalanga</DropdownMenuItem>
              <DropdownMenuItem>Northern Cape</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button className="w-full">Register</Button>
      </div>
    </div>
  );
}
