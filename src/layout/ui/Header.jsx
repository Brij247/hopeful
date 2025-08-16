import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { session, status } = useSession();

  return (
    <header className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img className="h-20 w-auto" src="./hope-logo.png" alt="Logo" />
          </div>
          <nav className="space-x-10">
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/project">Projects</Link>
            <button
              type="button"
              className="bg-fuchsia-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              <Link href={"/sponser-a-child"}>Sponser a child</Link>
            </button>
            {/* <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
              onClick={
                status === "authenticated" ? () => signOut() : () => signIn()
              }
            >
              {status === "authenticated" ? "Sign out" : "Sign in"}
            </button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
