import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] max-w-4xl flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[50rem] flex-col items-center justify-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Not Found
        </h1>
        <p className="mt-4 text-center text-muted-foreground sm:text-xl">
          Sorry, we couldn't find what you were looking for.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  )
}