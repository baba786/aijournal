import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPostsByCategory } from '@/lib/data'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  const posts = await getPostsByCategory(params.category)
  if (!posts.length) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} Posts`,
    description: `All posts in the ${params.category} category`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getPostsByCategory(params.category)

  if (!posts.length) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl py-20 md:py-28">
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to posts
          </Link>
        </div>

        <div className="space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight capitalize">
            {params.category} Posts
          </h1>

          <div className="space-y-16">
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
        </div>
      </div>
    </div>
  )
}