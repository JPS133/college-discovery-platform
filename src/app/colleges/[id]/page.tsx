import { prisma } from "@/lib/prisma";
import SaveCollegeButton from "@/components/SaveCollegeButton";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: { id },
  });

  if (!college) {
    return (
      <main className="max-w-4xl mx-auto p-6 text-center">
        <Navbar />
        <h1 className="text-3xl font-bold text-red-500">
          College Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6 min-h-screen bg-gray-950 text-white">
      <Navbar />

      <Link
        href="/"
        className="inline-block mb-6 text-blue-400 hover:text-blue-300"
      >
        ← Back to Home
      </Link>

      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">
          {college.name}
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          {college.description}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">
              Location
            </p>

            <p className="font-semibold">
              📍 {college.location}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">
              Rating
            </p>

            <p className="font-semibold">
              ⭐ {college.rating}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">
              Fees
            </p>

            <p className="font-semibold">
              💰 ₹{college.fees.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-8">
          <p className="text-green-300 font-semibold">
            Placement Rate
          </p>

          <p className="text-2xl font-bold">
            {college.placementRate}%
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Courses Offered
          </h2>

          <div className="flex flex-wrap gap-3">
            {college.courses.map((course) => (
              <span
                key={course}
                className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        <SaveCollegeButton
          collegeId={college.id}
        />
      </div>
    </main>
  );
}