import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const adminExists = await prisma.admin.findUnique({
    where: { email: process.env.ADMIN_EMAIL },
  });

  if (!adminExists) {
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

    await prisma.admin.create({
      data: {
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
      },
    });

    console.log("Admin user created");
  } else {
    console.log("Admin user already exists");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
