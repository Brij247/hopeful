import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img className="h-12 w-12 rounded-full" src="/hope-logo.png" alt="Excel Hope Logo" />
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">Excel HOPE</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-pink-600 font-medium">Home</Link>
            <Link href="/about-us" className="hover:text-pink-600 font-medium">About Us</Link>
            <Link href="/project" className="hover:text-pink-600 font-medium">Projects</Link>
            <Link
              href="/sponser-a-child"
              className="text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-5 py-2 rounded-lg font-semibold text-base transition duration-300 shadow-lg ml-2"
            >
              <span className="text-lg">💝</span> Sponsor a Child
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="h-8 w-8 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white bg-opacity-95 rounded-lg shadow-lg mt-2 py-4 px-6 flex flex-col gap-4 animate-fade-in-down">
            <Link href="/" className="hover:text-pink-600 font-medium" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" className="hover:text-pink-600 font-medium" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/project" className="hover:text-pink-600 font-medium" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link
              href="/sponser-a-child"
              className="text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-5 py-2 rounded-lg font-semibold text-base transition duration-300 shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-lg">💝</span> Sponsor a Child
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
