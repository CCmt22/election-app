/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Xxb3a4bRZsV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="w-full py-6 space-y-4 bg-red-100">
      <div className="flex items-center justify-between px-4">
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-red-900" />
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-900">
          Spring 2024 Election
        </h1>
        <div className="mx-auto max-w-[700px] text-center text-gray-500 md:text-base/relaxed dark:text-gray-400">
          Select a candidate to cast your vote. You can only vote once.
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="text-xl font-bold text-gray-500">How to Vote</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-500 md:text-base/relaxed dark:text-gray-400">
            <li>
              Select the candidate of your choice by checking the box next to
              their name.
            </li>
            <li>Click the "Cast Vote" button to submit your vote.</li>
          </ol>
        </div>
      </div>
      <div className="grid max-w-sm gap-4 mx-auto sm:max-w-md lg:max-w-none lg:grid-cols-3 bg-red-100">
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="Candidate 1"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/ab.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-xl font-medium">Anies Baswedan</div>
            <div className="text-sm text-center">
              Coalition of Change for Unity (KPP) Candidate
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <Input id="candidate1" name="candidate" type="radio" />
              <label className="ml-2" htmlFor="candidate1">
                Select
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="Candidate 2"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/gp.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-xl font-medium">Ganjar Pranowo </div>
            <div className="text-sm text-center">
              Indonesian Democratic Party of Struggle (PDI-P) Candidate
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <Input id="candidate2" name="candidate" type="radio" />
              <label className="ml-2" htmlFor="candidate2">
                Select
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="Candidate 3"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/ps.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-xl font-medium">Prabowo Subianto </div>
            <div className="text-sm text-center">Unity Party</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <Input id="candidate3" name="candidate" type="radio" />
              <label className="ml-2" htmlFor="candidate3">
                Select
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        <Button className="w-full bg-red-900 text-white">Cast Vote</Button>
      </div>
    </div>
  );
}

export function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
