import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css"; // Import the custom CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear previous errors
    try {
      const response = await axios.post("/adminlogin", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token); // Save JWT
      setLoading(false); // Stop loading after success
      navigate("/admin"); // Redirect to admin dashboard
    } catch (err) {
      setLoading(false); // Stop loading
      setError("Invalid email or password"); // Set error message
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="brand-name">FlavorFusion</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Disable input during loading
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading} // Disable input during loading
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"} {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
