import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(
      authOptions
    );

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Please login first",
        },
        {
          status: 401,
        }
      );
    }

    const { collegeId } =
      await req.json();

    const user =
      await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const existing =
      await prisma.savedCollege.findUnique(
        {
          where: {
            userId_collegeId: {
              userId: user.id,
              collegeId,
            },
          },
        }
      );

    if (existing) {
      return NextResponse.json({
        success: true,
        message:
          "College already saved",
      });
    }

    await prisma.savedCollege.create({
      data: {
        userId: user.id,
        collegeId,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        "College saved successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}