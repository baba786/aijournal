import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export type Post = {
  slug: string
  title: string
  date: string
  category?: string
  excerpt: string
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return undefined
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt || content.slice(0, 150) + '...',
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return undefined
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = (await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return getPostBySlug(slug)
    })
  )).filter((post): post is Post => post !== undefined)

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category?.toLowerCase() === category.toLowerCase())
}