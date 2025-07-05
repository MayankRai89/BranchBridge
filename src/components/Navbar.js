// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Branch<span>Bridge</span></h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/branches">Branches</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
