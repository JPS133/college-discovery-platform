import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
      <Link
        href="/"
        className="text-2xl font-bold text-white hover:text-blue-400 transition"
      >
        🎓 College Discovery Platform
      </Link>

      <div className="flex items-center gap-6 font-medium">
        <Link
          href="/"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
          href="/saved"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Saved Colleges
        </Link>

        <Link
          href="/login"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}