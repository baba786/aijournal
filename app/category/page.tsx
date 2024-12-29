import Link from 'next/link'
import { getAllPosts } from '@/lib/data'

export default async function Categories() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link 
          href="/"
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Categories
        </h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category?.toLowerCase()}`}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {category}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {posts.filter(post => post.category === category).length} posts
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}