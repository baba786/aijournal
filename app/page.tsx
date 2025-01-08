import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog/test">Test Blog Post</Link>
    </div>
  )
}