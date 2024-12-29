'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { name: 'All Posts', path: '/' },
  { name: 'GPT Models', path: '/category/gpt' },
  { name: 'Image Generation', path: '/category/image' },
  { name: 'Prompt Engineering', path: '/category/prompt' },
  { name: 'AI Projects', path: '/category/projects' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 mr-8 hidden md:block">
      <nav className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.path}
            href={category.path}
            className={`block px-4 py-2 rounded-md transition-colors ${
              pathname === category.path
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

