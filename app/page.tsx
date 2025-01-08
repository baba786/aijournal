import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <Link href="/posts/test">View a post</Link>
    </div>
  )
}