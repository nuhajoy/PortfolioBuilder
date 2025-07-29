import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link to="/" className="text-xl font-bold text-pink-600 dark:text-blue-600 hover:text-pink-700 dark:hover:text-blue-500 transition-colors">
        Portfolio Builder
      </Link>
      <nav className="space-x-6 text-sm">
        <Link
          to="/"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/builder"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Builder
        </Link>
      </nav>
    </header>
  );
}
