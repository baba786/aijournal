import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/data'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: PostPageProps
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4">
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

        <div className="space-y-4 animate-fade-in">
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
                  href={`/category/${post.category.toLowerCase()}`}
                  className="hover:text-foreground transition-colors"
                >
                  {post.category}
                </Link>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            {post.title}
          </h1>
        </div>

        <div 
          className="prose mt-12 animate-fade-in animate-fade-in-delay-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}