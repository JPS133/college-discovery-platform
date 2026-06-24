"use client";

import { useRouter } from "next/navigation";

export default function LocationFilter() {
  const router = useRouter();

  return (
    <select
      className="border rounded px-4 py-2 text-black"
      onChange={(e) => {
        const value = e.target.value;

        if (value) {
          router.push(`/?location=${value}`);
        } else {
          router.push("/");
        }
      }}
    >
      <option value="">All Locations</option>
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Lucknow">Lucknow</option>
    </select>
  );
}