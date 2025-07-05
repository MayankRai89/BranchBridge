// src/components/BranchCard.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BranchCard.css";
import { useNavigate } from "react-router-dom";

const BranchCard = ({ title, description, icon, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/branches/${slug}`);
  };

   return (
    <motion.div
      className="branch-card"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default BranchCard;
