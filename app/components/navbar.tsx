"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  return (
    <div className="border-b flex items-center justify-center w-full">
      <div className="flex h-16 flex-wrap items-center px-4 container justify-between overflow-visible">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="font-semibold text-2xl animate-pulse duration-3000"
          >
            finease<span className="text-2xl text-amber-500">.</span>
          </Link>
        </div>
        <div className="ml-auto md:flex items-center space-x-4 hidden">
          <Link
            href="/home"
            className="text-sm font-medium transition-colors hover:text-amber-500"
          >
            Home
          </Link>
          <Link
            href="/subscribe"
            className="text-sm font-medium transition-colors hover:text-amber-500"
          >
            Subscribe
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-amber-500"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium transition-colors hover:text-amber-500"
          >
            Signup
          </Link>
          <span className="mx-2  h-5 w-px bg-gray-500"></span>

          <SunIcon
            size={20}
            className="cursor-pointer hover:text-amber-500"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          onClick={() => setOpen(!open)}
          type="button"
          className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`flex items-end justify-end mt-2 w-full z-50 md:hidden ${open ? "block" : "hidden"}`} id="mobile-menu">
        <ul className="flex-col flex gap-5 p-10 w-1/2 dark:bg-slate-800 bg-slate-100 rounded-md mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                href="/home"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/subscribe"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Subscribe
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-sm font-medium transition-colors hover:text-amber-500"
              >
                Signup
              </Link>
            </li>
            <li>
              <SunIcon
                size={20}
                className="cursor-pointer hover:text-amber-500"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
