import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/header.css";
import logo from "../../assets/icons/fflogo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="FlavorFusion Logo" className="logo" />
        <span className="brand-name">FlavorFusion</span>{" "}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes" activeClassName="active">
              <i className="fas fa-utensils"></i> Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName="active">
              <i className="fas fa-envelope"></i> Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              <i className="fas fa-info-circle"></i> About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
