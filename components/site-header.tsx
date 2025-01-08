import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            sudhanshu.
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex items-center space-x-6 text-sm">
              <Link href="/posts" className="hover:underline">
                writing
              </Link>
              <Link href="/about" className="hover:underline">
                about
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}