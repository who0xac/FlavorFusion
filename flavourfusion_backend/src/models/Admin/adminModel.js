import { prisma } from "../../utils/prisma.js"; // Adjust path if necessary
import bcrypt from "bcrypt";

class AdminModel {
  constructor() {
    this.prisma = prisma;
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    // Use findUnique to find the admin by email
    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });

    // Log the admin lookup for debugging
    if (!admin) {
      console.log("Admin not found with email:", email);
      return null;
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (isMatch) {
      return admin; // Return the admin object if passwords match
    } else {
      console.log("Password mismatch for admin with email:", email);
      return null; // Return null if the password does not match
    }
  }
}

export default AdminModel;
