import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.savedCollege.deleteMany();
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.9,
        placementRate: 98,
        description: "Premier engineering institute of India.",
        courses: ["BTech", "MTech", "MBA"],
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 260000,
        rating: 4.9,
        placementRate: 99,
        description: "Known for innovation and research.",
        courses: ["BTech", "MTech", "PhD"],
      },
      {
        name: "IIT Kanpur",
        location: "Kanpur",
        fees: 245000,
        rating: 4.8,
        placementRate: 97,
        description: "Strong engineering and research culture.",
        courses: ["BTech", "MTech", "MBA"],
      },
      {
        name: "IIT Madras",
        location: "Chennai",
        fees: 255000,
        rating: 4.9,
        placementRate: 98,
        description: "Consistently ranked among India's best institutes.",
        courses: ["BTech", "MTech", "PhD"],
      },
      {
        name: "IIT Roorkee",
        location: "Roorkee",
        fees: 235000,
        rating: 4.8,
        placementRate: 96,
        description: "Historic engineering institution.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "IIT Kharagpur",
        location: "Kharagpur",
        fees: 240000,
        rating: 4.8,
        placementRate: 97,
        description: "Oldest IIT with diverse programs.",
        courses: ["BTech", "MTech", "MBA"],
      },
      {
        name: "IIT Guwahati",
        location: "Guwahati",
        fees: 230000,
        rating: 4.7,
        placementRate: 95,
        description: "Beautiful campus and strong academics.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "IIIT Lucknow",
        location: "Lucknow",
        fees: 180000,
        rating: 4.5,
        placementRate: 92,
        description: "Strong coding culture.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 220000,
        rating: 4.8,
        placementRate: 98,
        description: "Excellent placements and coding environment.",
        courses: ["BTech", "MTech", "Research"],
      },
      {
        name: "NIT Trichy",
        location: "Tiruchirappalli",
        fees: 180000,
        rating: 4.7,
        placementRate: 95,
        description: "Top NIT with excellent placements.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "NIT Surathkal",
        location: "Mangalore",
        fees: 175000,
        rating: 4.7,
        placementRate: 94,
        description: "Well-known NIT near the coast.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "DTU",
        location: "Delhi",
        fees: 165000,
        rating: 4.6,
        placementRate: 93,
        description: "One of Delhi's premier engineering colleges.",
        courses: ["BTech", "MTech", "MBA"],
      },
      {
        name: "NSUT",
        location: "Delhi",
        fees: 170000,
        rating: 4.5,
        placementRate: 92,
        description: "Excellent placements and industry exposure.",
        courses: ["BTech", "MTech"],
      },
      {
        name: "BITS Pilani",
        location: "Pilani",
        fees: 500000,
        rating: 4.8,
        placementRate: 97,
        description: "Prestigious private engineering institution.",
        courses: ["BTech", "MSc", "MBA"],
      },
      {
        name: "VIT Vellore",
        location: "Vellore",
        fees: 220000,
        rating: 4.4,
        placementRate: 90,
        description: "Large campus with diverse opportunities.",
        courses: ["BTech", "MTech", "MBA"],
      },
      {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        fees: 350000,
        rating: 4.5,
        placementRate: 91,
        description: "Popular private engineering college.",
        courses: ["BTech", "MTech"],
      },
    ],
  });

  console.log("✅ Colleges seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });