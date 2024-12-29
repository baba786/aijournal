import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-xl font-semibold text-gray-800">
          My AI Journal
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/category" className="text-gray-600 hover:text-gray-800">
            Categories
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search posts..."
              className="py-2 px-4 pr-10 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              aria-label="Search"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}