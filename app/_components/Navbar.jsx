"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-100"
              >
                <svg
                  className="h-6 w-6 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Icon/Logo SVG here */}
                </svg>
                <span className="font-bold">GameSage Hub</span>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/guides" className="py-5 px-3 hover:bg-gray-700">
                Guides
              </Link>
              <Link href="/reviews" className="py-5 px-3 hover:bg-gray-700">
                Reviews
              </Link>
              <Link href="/challenges" className="py-5 px-3 hover:bg-gray-700">
                Challenges
              </Link>
            </div>
          </div>

          {/* Auth Nav */}
          <div className="hidden md:flex items-center space-x-3 ">
            {!session && (
              <>
                <button
                  onClick={() => signIn("google")}
                  className="py-2 px-2 font-medium hover:bg-gray-700"
                >
                  Login
                </button>
              </>
            )}
            {session && (
              <>
                <Link
                  href={`/profile/${session.user.name}`}
                  className="py-2 px-2 font-medium hover:bg-gray-700"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="py-2 px-2 font-medium hover:bg-gray-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          href="/guides"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          Guides
        </Link>
        <Link
          href="/reviews"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          Reviews
        </Link>
        <Link
          href="/challenges"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          Challenges
        </Link>

        {/* Auth Mobile */}
        {!session && (
          <>
            <button
              onClick={() => signIn("google")}
              className="block py-2 px-4 text-sm hover:bg-gray-700"
            >
              Login
            </button>
          </>
        )}
        {session && (
          <>
            <Link
              href={`/profile/${session.user.name}`}
              className="block py-2 px-4 text-sm hover:bg-gray-700"
            >
              Profile
            </Link>
            <button
              onClick={() => signOut()}
              className="py-2 px-2 font-medium hover:bg-gray-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
