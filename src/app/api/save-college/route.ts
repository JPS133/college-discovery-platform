import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { collegeId } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

    await prisma.savedCollege.upsert({
        where: {
        userId_collegeId: {
        userId: user.id,
        collegeId,
        },
        },
        update: {},
        create: {
        userId: user.id,
        collegeId,
        },
    });

  return NextResponse.json({
    success: true,
  });
}