import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Shubham's AI Notes",
    template: "%s | Shubham's AI Notes",
  },
  description: 'Personal notes and experiments from my journey into AI and machine learning',
  keywords: ['AI', 'Machine Learning', 'Programming', 'Personal Blog', 'Tech Notes'],
  authors: [
    {
      name: 'Shubham Gautam',
      url: 'https://github.com/sshugautam',
    },
  ],
  creator: 'Shubham Gautam',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-journey-blog.com',
    title: 'AI Journey Blog',
    description: 'A blog about my journey in AI and machine learning',
    siteName: 'AI Journey Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Journey Blog',
    description: 'A blog about my journey in AI and machine learning',
    creator: '@aijourney',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
