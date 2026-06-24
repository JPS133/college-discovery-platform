import Link from "next/link";
import { College } from "@/types/college";

interface Props {
  college: College;
}

export default function CollegeCard({ college }: Props) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition">
      <h2 className="text-xl font-bold">
        {college.name}
      </h2>

      <p className="text-gray-600">
        📍 {college.location}
      </p>

      <p>
        ⭐ {college.rating}
      </p>

      <p>
        💰 ₹{college.fees.toLocaleString()}
      </p>

      <p>
        Placement: {college.placementRate}%
      </p>

      <Link
        href={`/colleges/${college.id}`}
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}