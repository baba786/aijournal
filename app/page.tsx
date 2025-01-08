import { getAllPosts } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4">
      <section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-tight">
            Hey, I'm Sudhanshu — a developer exploring AI and sharing what I learn along the way.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here you'll find my notes, experiments, and thoughts on artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-2xl space-y-16">
          {posts.map((post, index) => (
            <article 
              key={post.slug} 
              className={`group space-y-4 animate-fade-in animate-fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={post.date} className="tabular-nums">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.category && (
                  <>
                    <span>•</span>
                    <Link
                      href={`/category/${post.category?.toLowerCase()}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {post.category}
                    </Link>
                  </>
                )}
              </div>
              <h2 className="text-xl font-medium tracking-tight">
                <Link 
                  href={`/post/${post.slug}`}
                  className="inline-flex items-center gap-2 hover:text-muted-foreground transition-colors"
                >
                  {post.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <Link
            href="/post"
            className="group inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
          >
            View all posts 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}