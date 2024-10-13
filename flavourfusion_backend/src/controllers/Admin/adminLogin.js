import AdminModel from "../../models/Admin/adminModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const adminModel = new AdminModel();

export async function adminLogin(req, res) {
  const { email, password } = req.body;

  try {
    // Find the admin by email and password using the AdminModel class
    const admin = await adminModel.login(email, password);

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: admin.id, role: "admin" },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Admin logged in successfully", token });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Error during admin login", error });
  }
}
