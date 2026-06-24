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
    <div className="flex gap-2 mb-8">
      <input
        type="text"
        placeholder="Search colleges..."
        className="border rounded px-4 py-2 flex-1 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}