import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getPostsByCategory } from '@/lib/data'

interface PageProps {
  params: {
    type: string
    slug: string
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { type, slug } = params
  
  if (type === 'post') {
    const post = await getPostBySlug(slug)
    if (!post) notFound()
    return <div>Post: {post.title}</div>
  }
  
  if (type === 'category') {
    const posts = await getPostsByCategory(slug)
    if (!posts.length) notFound()
    return <div>Category: {slug}</div>
  }
  
  notFound()
}