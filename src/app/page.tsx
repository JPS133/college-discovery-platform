import CollegeCard from "@/components/CollegeCard";
import SearchBar from "@/components/SearchBar";
import LocationFilter from "@/components/LocationFilter";
import UserInfo from "@/components/UserInfo";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    location?: string;
  }>;
}) {
  const params = await searchParams;

  const colleges = await prisma.college.findMany({
    where: {
      ...(params.search
        ? {
            name: {
              contains: params.search,
              mode: "insensitive",
            },
          }
        : {}),
      ...(params.location
        ? {
            location: params.location,
          }
        : {}),
    },
  });

  return (
    <main className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-8">
        College Discovery Platform
      </h1>

      {/* User Info */}
      <div className="mb-6">
        <UserInfo />
      </div>

      {/* Saved Colleges Button */}
      <div className="mb-8">
        <Link
          href="/saved"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium"
        >
          My Saved Colleges
        </Link>
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <SearchBar />
        <LocationFilter />
      </div>

      {/* Featured Colleges */}
      <h2 className="text-3xl font-bold mb-6">
        Featured Colleges
      </h2>

      {/* Colleges Grid */}
      {colleges.length === 0 ? (
        <div className="border border-gray-700 bg-gray-900 rounded-lg p-8 text-center text-gray-400">
          No colleges found.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2026 College Discovery Platform
      </footer>
    </main>
  );
}