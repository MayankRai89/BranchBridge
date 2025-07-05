// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Welcome to <span>BranchBridge</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hero-subtitle"
      >
        Helping you choose the right engineering stream with confidence.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <Link to="/branches" className="hero-btn">Explore Branches</Link>
        <Link to="/quiz" className="hero-btn outline">Take Quiz</Link>
      </motion.div>
    </div>
  );
};

export default Home;
