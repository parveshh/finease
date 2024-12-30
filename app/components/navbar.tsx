'use client'
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  SunIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-b flex items-center w-full">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-semibold text-2xl animate-pulse duration-3000">
            finease<span className="text-2xl text-amber-500">.</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
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

            <SunIcon size={20} className="cursor-pointer hover:text-amber-500" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      
        </div>
      </div>
    </div>
  )
}
