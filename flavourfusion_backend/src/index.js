import express from "express";
import dotenv from "dotenv";
import route from "../src/routes/route.js";
import cors from "cors";
// Initialize dotenv for environment variables
dotenv.config();

// Initialize express app
const app = express();

// Enable JSON parsing
app.use(express.json());
app.use(cors({ origin: "*" }));
const port = process.env.PORT || 3000;

// Root route
app.use("/", route);

// Start server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
