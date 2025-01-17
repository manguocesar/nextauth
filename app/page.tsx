"use server";

import { auth } from "./auth";
import { SignInButton } from "./components/sign-in-button";
import Link from "next/link";
import { SignOutButton } from "./components/sign-out-button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex justify-evenly  m-10 p-2 bg-gray-700 rounded-lg">
        <div className=" hover:bg-slate-400">
          <Link href="/user-info" > User Info </Link>
        </div>
        <SignOutButton  />
      </div>
    );
  }

  return (
    <div className="hover:bg-slate-400">
      <p> You Are Not Signed In</p> <SignInButton />
    </div>
  );
}