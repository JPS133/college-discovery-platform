import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.9,
        placementRate: 98,
        description: "Premier engineering institute",
        courses: ["BTech", "MTech", "MBA"]
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 260000,
        rating: 4.9,
        placementRate: 99,
        description: "Top ranked IIT",
        courses: ["BTech", "MTech", "PhD"]
      },
      {
        name: "IIIT Lucknow",
        location: "Lucknow",
        fees: 180000,
        rating: 4.5,
        placementRate: 92,
        description: "Strong coding culture",
        courses: ["BTech", "MTech"]
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });