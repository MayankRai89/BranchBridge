// src/pages/Branches.js
import React from "react";
import BranchCard from "../components/BranchCard";
import { FaLaptopCode, FaCog, FaMicrochip, FaTools, FaFlask  } from "react-icons/fa";
import "./Branches.css";

const branches = [
  {
    title: "Computer Science",
    description: "Learn programming, software, and systems.",
    icon: <FaLaptopCode />,
    slug: "computer-science",
  },
  {
    title: "Mechanical Engineering",
    description: "Explore machines, mechanics, and robotics.",
    icon: <FaCog />,
    slug: "mechanical-engineering",
  },
  {
    title: "Electronics & Communication",
    description: "Work with circuits, chips, and telecom.",
    icon: <FaMicrochip />,
    slug: "electronics-communication",
  },
  {
    title: "Civil",
    description: "Design and build infrastructure like bridges, roads, and buildings.",
    icon: <FaTools />,
    slug: "civil-engineering",
  },
  {
  title: "Chemical Engineering",
  description: "Transform raw materials into valuable products through processes and chemistry.",
  icon: <FaFlask />,
  slug: "chemical-engineering",
}

];

const Branches = () => {
  return (

    <>
      <div className="description">
        <h2>
          "Engineering is a practical way for human society to change, modify and improve the physical world around us so that humans can have a better life."Engineering involves various activities to build, create or modify things such as machines, tools and environments. While there are dozens of types of engineering, four major categories include:
        </h2>
      </div>

      <div className="branches-section">
        <h2>Explore Branches</h2>
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <BranchCard key={index} {...branch} />
          ))}
        </div>
      </div>
    </>
  );

};

export default Branches;
