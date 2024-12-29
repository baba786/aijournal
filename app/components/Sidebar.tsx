import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 p-6 space-y-6">
      <Link href="/all-posts" className="block text-blue-500 font-semibold hover:text-blue-400">
        All Posts
      </Link>
      
      <div className="space-y-4">
        <Link href="/gpt-models" className="block text-gray-300 hover:text-white">
          GPT Models
        </Link>
        <Link href="/image-generation" className="block text-gray-300 hover:text-white">
          Image Generation
        </Link>
        <Link href="/prompt-engineering" className="block text-gray-300 hover:text-white">
          Prompt Engineering
        </Link>
        <Link href="/ai-projects" className="block text-gray-300 hover:text-white">
          AI Projects
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;