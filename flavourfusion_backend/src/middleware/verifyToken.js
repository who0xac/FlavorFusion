import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  // Remove the 'Bearer ' part from token if included
  const formattedToken = token.startsWith("Bearer ") ? token.slice(7) : token;

  jwt.verify(formattedToken, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Unauthorized", error: err.message });
    }

    req.adminId = decoded.id;
    next();
  });
};
