import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // Ensure environment variables are available
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("ADMIN_EMAIL or ADMIN_PASSWORD is missing in the .env file");
    process.exit(1); // Exit with error
  }

  try {
    // Check if the admin already exists
    const adminExists = await prisma.admin.findUnique({
      where: { email: adminEmail },
    });

    // If the admin doesn't exist, create one
    if (!adminExists) {
      // Use asynchronous password hashing
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await prisma.admin.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
        },
      });

      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error during admin seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
