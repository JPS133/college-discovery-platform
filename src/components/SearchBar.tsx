"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    router.push(`/?search=${search}`);
  };

  return (
    <div className="flex gap-2 mb-8 w-full">
      <input
        type="text"
        placeholder="Search colleges..."
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        Search
      </button>
    </div>
  );
}