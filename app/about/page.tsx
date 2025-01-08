import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "About AI Journey Blog and its mission",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl py-20 md:py-28">
        <div 
          className="space-y-8 animate-fade-in"
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">About</h1>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Sudhanshu, a software developer fascinated by artificial intelligence and its potential to transform how we solve problems.
            </p>
            
            <p>
              This space serves as my digital garden where I document my learning journey in AI. I write about experiments, share tutorials, and explore ideas at the intersection of software development and artificial intelligence.
            </p>

            <p>
              When I'm not coding, you'll find me reading research papers, tinkering with new AI models, or trying to explain complex concepts in simple terms.
            </p>
          </div>

          <div className="pt-8 flex gap-6">
            <Link 
              href="https://github.com/sshugautam"
              className="group text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <Github className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              GitHub
            </Link>
            <Link 
              href="https://twitter.com/sshugautam"
              className="group text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <Twitter className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}