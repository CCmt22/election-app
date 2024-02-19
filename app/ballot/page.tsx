// v0 by Vercel.
// @see https://v0.dev/t/wFHPhR5cCWu
// Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { signOut } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify"; //I added this to ensure that the success message would pop up once someone cast their vote
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link"; //This is the link used to link the home icon to the homepage
import { auth } from "@/firebase";
import { Voter } from "@/models/voter";
import { Vote } from "@/models/vote";
import database from "@/app/database";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Component() {
  //call methods for voter from db
  const [voter, setVoter] = useState<any>();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const userID = user.uid;
        ``;
        const promisedVoter: Promise<Voter | undefined> =
          database.getVoter(userID);

        promisedVoter.then((voter) => {
          if (voter) {
            setVoter(voter);
          }
        });
      }
    });
  }, []);

  const handleVote = async (candId) => {
    if (voter && !voter.hasVoted) {
      const newVote: Vote = {
        vote_id: `v_${Math.floor(100000 + Math.random() * 900000)}`,
        voter: voter,
        candId: candId,
      };

      console.log(newVote);

      await database.addVote(newVote);

      const updatedVoter: Voter = { ...voter, hasVoted: true };
      await database.updateVoter(updatedVoter);

      router.push("/");
    } else {
      alert("Sorry, you have already voted!");
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.log("Logout catch", e.message);
      });
  };

  return (
    <div className="w-full py-6 space-y-4 bg-red-100">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-red-900" />
        </Link>
      </div>
      <button
        className="bg-red-800 text-white p-2 rounded-md absolute top-4 right-4"
        onClick={logOut}
      >
        LOGOUT
      </button>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-900">
          2024 Election
        </h1>
        <div className="mx-auto max-w-[700px] text-center text-gray-500 md:text-base/relaxed dark:text-gray-400">
          Select a candidate to cast your vote. You can only vote once.
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="text-xl font-bold text-gray-500">How to Vote</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-500 md:text-base/relaxed dark:text-gray-400">
            <li>
              Select the candidate of your choice by checking the circle below
              their name.
            </li>
            <li>Click the "Cast Vote" button to submit your vote.</li>
            <li>
              If you would like to abstain, click the "Abstain" button to submit
              your vote.
            </li>
          </ol>
        </div>
      </div>

      <div className="grid max-w-sm gap-4 mx-auto sm:max-w-md lg:max-w-none lg:grid-cols-3 bg-red-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-bold text-red-900">ANIES BASWEDAN </div>
          <img
            alt="Candidate 1"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/ab.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-sm text-center font-bold">
              COALITION OF CHANGE FOR UNITY
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <AlertDialog>
                <AlertDialogTrigger className="bg-red-800 text-white p-2 rounded-md ">
                  Cast Vote
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently render
                      a cast vote on your account and you will not be allowed to
                      vote again.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleVote("0")}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-bold text-red-900">GANJAR PRANOWO </div>
          <img
            alt="Candidate 1"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/gp.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-sm text-center font-bold">
              INDONESIAN DEMOCRATIC PARTY OF STRUGGLE
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <AlertDialog>
                <AlertDialogTrigger className="bg-red-800 text-white p-2 rounded-md ">
                  Cast Vote
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently render
                      a cast vote on your account and you will not be allowed to
                      vote again.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleVote("1")}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-bold text-red-900">
            {" "}
            PRABOWO SUBIANTO{" "}
          </div>
          <img
            alt="Candidate 1"
            className="rounded-full border overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/ps.png"
            width="200"
          />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-sm text-center font-bold">
              ADVANCED INDONESIA COALITION
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-check">
              <AlertDialog>
                <AlertDialogTrigger className="bg-red-800 text-white p-2 rounded-md ">
                  Cast Vote
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently render
                      a cast vote on your account and you will not be allowed to
                      vote again.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleVote("2")}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          <AlertDialog>
            <AlertDialogTrigger className="bg-red-800 text-white p-2 rounded-md ">
              Abstain Vote
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently render a
                  cast vote on your account and you will not be allowed to vote
                  again.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleVote("3")}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
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
