import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/back.png')",
      }}
    >
      <header className="flex items-center justify-between w-full px-4 py-2 border-b border-gray-200 sm:py-4 sm:px-6 lg:py-4 lg:px-8 dark:border-gray-800">
        <div className="flex items-center justify-between p-4 border-b-2 border-gray-100 border-gray-100 dark:border-gray-800">
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-900">
              INDONESIA PRESIDENTIAL ELECTION
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="inline-flex items-center gap-2 text-lg font-semibold bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full px-6 py-2"
            href="/login"
          >
            <UserIcon className="w-6 h-6" />
            Login
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-lg font-semibold bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full px-6 py-2"
            href="/register"
          >
            Register
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>
      <div className="flex-1 py-6">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold tracking-tighter uppercase md:text-4xl lg:text-2xl xl:text-4xl text-red-900">
              About the Candidates
            </h1>
          </div>
          <div className="mx-auto grid grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            {/* Candidate 1 */}
            <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
              <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                <CardHeader>
                  <CardTitle>ANIES BASWEDAN</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Candidate 1 details */}
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
                  <h1 className="text-2xl font-bold tracking-tighter uppercase md:text-4xl lg:text-2xl xl:text-4xl text-red-900">
                    Manifesto
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    He is a 54 year-old leader with a dynamic vision and a
                    wealth of administrative experience. Renowned for his prior
                    role as the Governor of Jakarta, He is committed to ushering
                    in a transformative era for Indonesia. His candidacy
                    revolves around principles of unity, progress, and social
                    harmony. His manifesto underscores the importance of
                    inclusive governance, economic revitalization, and
                    sustainable policies for a prosperous Indonesia.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Candidate 2 */}
            <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
              <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                <CardHeader>
                  <CardTitle>GANJAR PRANOWO</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Candidate 2 details */}

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
                  <h1 className="text-2xl font-bold tracking-tighter uppercase md:text-4xl lg:text-2xl xl:text-4xl text-red-900">
                    Manifesto
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    He is a 53 year-old who brings a wealth of experience,
                    having served as the Governor of Central Java. Renowned for
                    his pragmatic leadership and commitment to public service,
                    his candidacy revolves around principles of inclusivity,
                    social welfare, and progressive governance. His manifesto
                    outlines a vision for a united and prosperous Indonesia,
                    built on the foundations of democratic values and
                    sustainable development.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Candidate 3 */}
            <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
              <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                <CardHeader>
                  <CardTitle>PRABOWO SUBIANTO</CardTitle>
                </CardHeader>
                <CardContent>
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
                  <h1 className="text-2xl font-bold tracking-tighter uppercase md:text-4xl lg:text-2xl xl:text-4xl text-red-900">
                    Manifesto
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    He is a 72-year-old seasoned leader, who brings a wealth of
                    experience, having served as a military general, defense
                    minister, and a two-time presidential candidate. Known for
                    his commitment to national unity, economic prosperity, and
                    environmental sustainability. He envisions a technologically
                    advanced and socially inclusive Indonesia. His manifesto
                    emphasizes transparent governance, social welfare, and
                    democratic values, highlighting a comprehensive approach to
                    address the nation's challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Votes Section */}
          <div className="mt-8 space-y-3">
            <h1 className="text-2xl font-bold tracking-tighter uppercase md:text-4xl lg:text-2xl xl:text-4xl dark:text-gray-400">
              Current Results
            </h1>

            <div className="mx-auto grid grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              {/* Current Votes for Candidate 1 */}
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                  <CardHeader>
                    <CardTitle>ANIES BASWEDAN</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Votes: 500</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full mt-2">
                      <div
                        className="h-full bg-green-500 dark:bg-green
                        rounded-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Votes for Candidate 2 */}
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                  <CardHeader>
                    <CardTitle>GANJAR PRANOWO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Votes: 700</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full mt-2">
                      <div className="h-full bg-blue-500 dark:bg-blue-400 rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Votes for Candidate 3 */}
              <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
                <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-200 transition duration-300">
                  <CardHeader>
                    <CardTitle>PRABOWO SUBIANTO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">Votes: 400</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full mt-2">
                      <div className="h-full bg-yellow-500 dark:bg-yellow-400 rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
