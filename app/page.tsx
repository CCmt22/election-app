/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LAihDaAfvwH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/back.png')",
      }}
    >
      <header className="flex items-center justify-between w-full px-4 py-2 border-b border-gray-200 sm:py-4 sm:px-6 lg:py-4 lg:px-8 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <FlagIcon className="h-6 w-6" />
            Home
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-800"
            href="/login"
          >
            <UserIcon className="w-4 h-4" />
            Login
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-800"
            href="/register"
          >
            Register
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </header>
      <main className="flex-1 py-6 lg:py-12 xl:py-24">
        <div className="container grid items-center justify-center gap-2 px-2 text-center md:px-3 lg:gap-5">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-red-800">
              INDONESIA PRESIDENTIAL ELECTION VOTING
            </h1>
          </div>
          <div className="container mx-auto my-6 px-4 md:my-12 md:px-6">
            <div className="grid gap-4 md:gap-6 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold uppercase text-center">
                    About the Candidates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        alt="User"
                        className="rounded-full object-cover border border-gray-200"
                        height="480"
                        src="/ab.png"
                        style={{
                          aspectRatio: "480/480",
                          objectFit: "cover",
                        }}
                        width="480"
                      />
                      <h3 className="font-semibold text-lg">John Doe</h3>
                      <p className="text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="rounded-full" variant="outline">
                            Manifesto
                            <ArrowDownIcon className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <ul className="text-sm text-left">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        alt="User"
                        className="rounded-full object-cover border border-gray-200"
                        height="480"
                        src="/gp.png"
                        style={{
                          aspectRatio: "480/480",
                          objectFit: "cover",
                        }}
                        width="480"
                      />
                      <h3 className="font-semibold text-lg">Jane Smith</h3>
                      <p className="text-sm text-center">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="rounded-full" variant="outline">
                            Manifesto
                            <ArrowDownIcon className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <ul className="text-sm text-left">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                          </ul>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        alt="User"
                        className="rounded-full object-cover border border-gray-200"
                        height="480"
                        src="/ps.png"
                        style={{
                          aspectRatio: "480/480",
                          objectFit: "cover",
                        }}
                        width="480"
                      />
                      <h3 className="font-semibold text-lg">
                        Prabowo Subianto - Advanced Indonesia Coalition
                      </h3>
                      <p className="text-sm text-center">
                        He is a 72-year-old seasoned leader, who brings a wealth
                        of experience, having served as a military general,
                        defense minister, and a two-time presidential candidate.
                        Known for his commitment to national unity, economic
                        prosperity, and environmental sustainability. He
                        envisions a technologically advanced and socially
                        inclusive Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold uppercase text-center">
                    Current Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <h3 className="font-semibold text-lg">John Doe</h3>
                      <div />
                      <p>30</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-semibold text-lg">Jane Smith</h3>
                      <div />
                      <p>30</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="font-semibold text-lg">Alex Johnson</h3>
                      <div />
                      <p>40</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
