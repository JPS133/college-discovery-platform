"use client";

import { useRouter } from "next/navigation";

export default function LocationFilter() {
  const router = useRouter();

  return (
    <select
      className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <option value="Kanpur">Kanpur</option>
      <option value="Chennai">Chennai</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Pilani">Pilani</option>
    </select>
  );
}