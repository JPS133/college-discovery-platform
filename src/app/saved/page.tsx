import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function SavedPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return <div>Please login first</div>;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  const saved = await prisma.savedCollege.findMany({
    where: {
      userId: user.id,
    },
    include: {
      college: true,
    },
  });

  // EMPTY STATE
  if (saved.length === 0) {
    return (
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          My Saved Colleges
        </h1>

        <div className="border rounded-lg p-6 text-center">
          No saved colleges yet.
        </div>
      </main>
    );
  }

  // NORMAL PAGE
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        My Saved Colleges
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {saved.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-bold">
              {item.college.name}
            </h2>

            <p>📍 {item.college.location}</p>

            <p>⭐ {item.college.rating}</p>

            <p>
              Placement: {item.college.placementRate}%
            </p>

            <Link
              href={`/colleges/${item.college.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}