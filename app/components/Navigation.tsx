import Link from 'next/link';
import { useTheme } from 'next-themes';
import SearchBar from './SearchBar';

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold text-white">
          My AI Journey
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/gpt-models" className="text-gray-300 hover:text-white">
            GPT Models
          </Link>
          <Link href="/image-generation" className="text-gray-300 hover:text-white">
            Image Generation
          </Link>
          <Link href="/ai-projects" className="text-gray-300 hover:text-white">
            AI Projects
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <SearchBar />
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          {theme === 'dark' ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;