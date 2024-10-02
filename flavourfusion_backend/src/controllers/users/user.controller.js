import User from "../../models/userModel.js"; 

class UserController {
  constructor() {
    this.user = User; 
  }

  // Register a new user
  async registerUser(req, res) {
    const { username, email, password } = req.body;

    try {
     
      const userExists = await this.user.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new this.user({
        username,
        email,
        password,
      });

      await newUser.save();
      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.log("Error registering user:", error); 
      res.status(500).json({ message: "Error registering user" }); 
    }
  }

  // Login a user
  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
    
      const user = await this.user.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      res.status(200).json({
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.log("Error logging in:", error); 
      res.status(500).json({ message: "Error logging in" }); 
    }
  }
}

export default UserController;
