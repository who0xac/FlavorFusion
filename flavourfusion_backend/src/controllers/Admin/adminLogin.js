import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AdminModel from "../../models/Admin/adminModel.js";

dotenv.config();
const adminModel = new AdminModel();

export async function adminLogin(req, res) {
  const { email, password } = req.body;

  try {
    console.log("Login attempt with email:", email);
    const admin = await adminModel.login(email, password);

    if (!admin) {
      console.log("Invalid email or password.");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: admin.id, role: "admin" },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    console.log("Admin logged in successfully, token generated");
    res.status(200).json({ message: "Admin logged in successfully", token });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Error during admin login", error });
  }
}
