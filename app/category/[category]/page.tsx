import { getPostsByCategory, getAllPosts } from '@/lib/data'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))
  
  return categories.map((category) => ({
    category: category,
  }))
}

export default async function Category({ params }: { params: { category: string } }) {
  const posts = await getPostsByCategory(params.category)

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link 
          href="/category"
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          ← Back to categories
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Category: {params.category}
        </h1>
      </div>
      
      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="flex max-w-xl flex-col items-start">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-gray-500">
                {post.date}
              </time>
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