"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";


export default function Header() {
  const session = useSession();
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="items-center flex gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          GOURMET GO
        </Link>
        <Link href="/">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>
      <nav className="items-center flex gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
          <Link href={'/profile'} className="whitespace-nowrap">
          welcome, {userName}
          </Link>
           <button
            onClick={() => signOut()}
            className="bg-primary text-white rounded-full px-8 py-2"
          >
            Logout
          </button>
          </>
         
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary text-white rounded-full px-8 py-2"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
