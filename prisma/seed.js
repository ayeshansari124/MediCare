import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("ayesha", 10);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: "ayeshansari124@gmail.com" },
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }

  await prisma.user.create({
    data: {
      email: "ayeshansari124@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin created successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });