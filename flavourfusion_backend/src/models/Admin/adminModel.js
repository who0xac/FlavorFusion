import { prisma } from "../../utils/prisma.js";
import bcrypt from "bcrypt";

class AdminModel {
  constructor() {
    this.prisma = prisma;
  }

  async login(email, password) {
    if (email && password) {
      // Use findUnique to find the admin by email
      const admin = await this.prisma.admin.findUnique({
        where: { email },
      });

      if (admin) {
        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
          return admin;
        }
      }

      return null;
    }
  }
}

export default AdminModel;


