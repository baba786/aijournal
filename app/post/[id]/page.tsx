import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { posts } from '@/lib/data'

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <article className="space-y-8">
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">&larr; Back to all posts</Link>
      <div>
        <span className="text-sm text-blue-600 dark:text-blue-400">{post.category}</span>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-2">{post.title}</h1>
        <time className="text-sm text-gray-600 dark:text-gray-400 block mt-2">{post.date}</time>
      </div>
      <Image src={post.image} alt={post.title} width={800} height={400} className="w-full rounded-lg" />
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Related Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {relatedPosts.map((relatedPost) => (
            <Link key={relatedPost.id} href={`/post/${relatedPost.id}`} className="block group">
              <article className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={relatedPost.image} alt={relatedPost.title} width={300} height={150} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-blue-600 dark:text-blue-400">{relatedPost.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-2">
                    {relatedPost.title}
                  </h3>
                  <time className="text-sm text-gray-600 dark:text-gray-400">{relatedPost.date}</time>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Comments</h2>
        <form className="space-y-4">
          <Textarea placeholder="Share your thoughts..." className="w-full" />
          <Button type="submit">Post Comment</Button>
        </form>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">John Doe</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Great post! I learned a lot about AI models.</p>
          </div>
        </div>
      </section>
    </article>
  )
}

