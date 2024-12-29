'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Search } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          My AI Journey
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Home
          </Link>
          <Link href="/category/gpt" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            GPT Models
          </Link>
          <Link href="/category/image" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Image Generation
          </Link>
          <Link href="/category/projects" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            AI Projects
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search posts..."
              className="py-2 px-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </form>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

