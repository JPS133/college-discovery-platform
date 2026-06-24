import CollegeCard from "@/components/CollegeCard";
import SearchBar from "@/components/SearchBar";
import LocationFilter from "@/components/LocationFilter";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";

async function getColleges(search = "", location = "") {
  let url = "/api/colleges?";

  if (search) {
    url += `search=${search}&`;
  }

  if (location) {
    url += `location=${location}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    location?: string;
  }>;
}) {
  const params = await searchParams;

  const data = await getColleges(
    params.search || "",
    params.location || ""
  );

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        College Discovery Platform
      </h1>

      <UserInfo />

      <Link
  href="/saved"
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  My Saved Colleges
</Link>

      <div className="flex gap-4 mb-6">
        <SearchBar />
        <LocationFilter />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.colleges.map((college: any) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>
    </main>
  );
}