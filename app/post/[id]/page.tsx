import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts } from '@/lib/data'

export default async function Post({ params }: { params: { id: string } }) {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === params.id)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter(p => p.slug !== params.id && p.category === post.category)
    .slice(0, 2)

  return (
    <article className="space-y-8">
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">&larr; Back to all posts</Link>
      <div>
        {post.category && (
          <span className="text-sm text-blue-600 dark:text-blue-400">{post.category}</span>
        )}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">{post.title}</h1>
        <time className="text-sm text-gray-600 dark:text-gray-400 block mt-2">{post.date}</time>
      </div>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {relatedPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/post/${relatedPost.slug}`} className="block group">
                <article className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4">
                    {relatedPost.category && (
                      <span className="text-sm text-blue-600 dark:text-blue-400">{relatedPost.category}</span>
                    )}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-2">
                      {relatedPost.title}
                    </h3>
                    <time className="text-sm text-gray-600 dark:text-gray-400">{relatedPost.date}</time>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{relatedPost.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Comments</h2>
        <form className="space-y-4">
          <textarea 
            placeholder="Share your thoughts..." 
            className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Post Comment
          </button>
        </form>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">John Doe</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Great post! I learned a lot about AI assistants.</p>
          </div>
        </div>
      </section>
    </article>
  )
}