// In your admin controller
import { prisma } from "../../utils/prisma.js";

export async function adminLogin(req, res) {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await prisma.admin.findUnique({
      where: { email: email },
    });

    // Check if admin exists and password matches
    if (admin && admin.password === password) {
      // For simplicity, just return the admin details or a success message
      return res
        .status(200)
        .json({ message: "Admin logged in successfully", admin });
    }

    return res.status(401).json({ message: "Invalid email or password" });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Error during admin login", error });
  }
}
