import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">
            College Discovery
          </h1>
        </Link>

        <div className="flex gap-4">
          <Link href="/">
            Home
          </Link>

          <Link href="/saved">
            Saved Colleges
          </Link>
        </div>
      </div>
    </nav>
  );
}