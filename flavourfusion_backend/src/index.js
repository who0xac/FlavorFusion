import express from "express";
import dotenv from "dotenv";
// import route from "./routes/route.js";
// import cros from "cors";

const connectdb = require("../config/db");
const app = express();

app.use(express.json());
// Connect to MongoDB
connectdb();
// Configuration of dotenv
dotenv.config();


// Enable CORS for all domains (allow requests from any origin)
// app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3000;

// Routes
// app.use("/", route);
app.use("/",(req,res)=>{
    res.send("Heloo");
});

// Create a server
app.listen(port, () => {
  console.log("listening on port " + port);
});
