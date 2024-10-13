import express from "express";
import dotenv from "dotenv";
import route from "../src/routes/route.js"
// Initialize dotenv for environment variables
dotenv.config();

// Initialize express app
const app = express();

// Enable JSON parsing
app.use(express.json());

const port = process.env.PORT || 3000;

// Root route
app.use("/", route);


// Start server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
