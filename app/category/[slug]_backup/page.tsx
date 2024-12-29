import Link from 'next/link'
import { posts } from '@/lib/data'

export default function Category({ params }: { params: { slug: string } }) {
  const category = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const categoryPosts = posts.filter(post => post.category.toLowerCase() === params.slug.toLowerCase())

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">{category} Posts</h1>
      {categoryPosts.length > 0 ? (
        <div className="space-y-6">
          {categoryPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
              <Link href={`/post/${post.id}`} className="block group">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-600 dark:text-gray-400">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No posts found in this category.</p>
      )}
    </div>
  )
}

