import Link from "next/link"


export function Navbar() {
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
            href="/about"
            className="text-sm font-medium transition-colors hover:text-amber-500"
          >
            About
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
        </div>
      </div>
    </div>
  )
}
