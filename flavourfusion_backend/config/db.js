const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("Error to Connecting MongoDb"+error.message);
  }
};

export default connectdb;