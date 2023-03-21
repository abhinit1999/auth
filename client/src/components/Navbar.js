import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink className="nav_link" to="/">
          Home
        </NavLink>
        <NavLink
          className="nav_link"
          to="/about"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underLine" : "" };
          }}
          sx={{ color: "white", textTransform: "none" }}
        >
          About
        </NavLink>
        <NavLink
          className="nav_link"
          to="/details"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underLine" : "" };
          }}
          sx={{ color: "white", textTransform: "none" }}
        >
          Details
        </NavLink>
        <NavLink
          className="nav_link"
          to="/user/signup"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underLine" : "" };
          }}
          sx={{ color: "white", textTransform: "none" }}
        >
          Signup
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
