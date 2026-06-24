import CollegeCard from "@/components/CollegeCard";
import SearchBar from "@/components/SearchBar";
import LocationFilter from "@/components/LocationFilter";
import UserInfo from "@/components/UserInfo";
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
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        College Discovery Platform
      </h1>

      <UserInfo />

      <div className="flex gap-4 mb-6">
        <Link
          href="/saved"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          My Saved Colleges
        </Link>
      </div>

      <div className="flex gap-4 mb-6">
        <SearchBar />
        <LocationFilter />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>
    </main>
  );
}