import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get("search") || "";
    const location = searchParams.get("location") || "";
    const page = Number(searchParams.get("page")) || 1;

    const limit = 6;
    const skip = (page - 1) * limit;

    const colleges = await prisma.college.findMany({
      where: {
        AND: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          location
            ? {
                location: {
                  equals: location,
                },
              }
            : {},
        ],
      },
      skip,
      take: limit,
      orderBy: {
        rating: "desc",
      },
    });

    const total = await prisma.college.count();

    return Response.json({
      colleges,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to fetch colleges",
      },
      {
        status: 500,
      }
    );
  }
}