export default function Page({ params }: { params: { slug: string } }) {
  return <div>Blog Post: {params.slug}</div>
}