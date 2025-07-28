import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-pink-600 dark:text-blue-600">
        Portfolio Builder
      </h1>
      <nav className="space-x-4 text-sm">
        <Link
          to="/"
          className="text-gray-600 dark:text-gray-300 hover:underline"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}
