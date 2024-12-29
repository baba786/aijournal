import { getAllPosts } from '@/lib/data'
import Link from 'next/link'

export default async function Categories() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Categories</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category}`}
            className="block rounded-lg border border-gray-200 p-6 hover:border-gray-400"
          >
            <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {posts.filter(post => post.category === category).length} posts
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}