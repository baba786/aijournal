import { getAllPosts } from '@/lib/data'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Posts</h1>
      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="flex max-w-xl flex-col items-start">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-gray-500">
                {post.date}
              </time>
              {post.category && (
                <Link
                  href={`/category/${post.category}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </Link>
              )}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={`/post/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}