// File: src/components/adminHeader/AdminHeader.jsx
import React from "react";
import "../../assets/css/header.css"; // Use existing CSS for header
import logo from "../../assets/icons/fflogo.jpg"; // Adjust the path to your logo file

const AdminHeader = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="FlavorFusion Logo" className="logo" />{" "}
        {/* Add logo here */}
        <span className="brand-name">FlavorFusion Admin</span>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <span>Welcome Admin</span> {/* Welcome message for admin */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
