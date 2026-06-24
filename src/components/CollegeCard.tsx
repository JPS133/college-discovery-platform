import Link from "next/link";
import { College } from "@/types/college";

interface Props {
  college: College;
}

export default function CollegeCard({
  college,
}: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:border-blue-500 transition duration-300">
      <h2 className="text-xl font-bold text-white mb-3">
        {college.name}
      </h2>

      <p className="text-gray-400 mb-2">
        📍 {college.location}
      </p>

      <div className="flex justify-between mb-2">
        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-sm">
          ⭐ {college.rating}
        </span>

        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
          {college.placementRate}% Placement
        </span>
      </div>

      <div className="mt-3 mb-4">
        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
          💰 ₹{college.fees.toLocaleString()}
        </span>
      </div>

      <Link
        href={`/colleges/${college.id}`}
        className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        View Details
      </Link>
    </div>
  );
}