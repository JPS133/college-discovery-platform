import { prisma } from "@/lib/prisma";
import SaveCollegeButton from "@/components/SaveCollegeButton";

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
    return <div>College not found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p>{college.description}</p>

      <p>📍 {college.location}</p>

      <p>⭐ {college.rating}</p>

      <p>💰 ₹{college.fees.toLocaleString()}</p>

      <p>
        Placement Rate: {college.placementRate}%
      </p>

      <div className="mt-4">
        <h2 className="font-bold">
          Courses Offered
        </h2>

        <ul>
          {college.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>

      <SaveCollegeButton
        collegeId={college.id}
      />
    </main>
  );
}