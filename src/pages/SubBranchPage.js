// src/pages/SubBranchPage.js
import React from "react";
import { useParams } from "react-router-dom";
import "./SubBranchPage.css";
import { motion } from "framer-motion";


const subBranchInfo = {
  "computer-science": {
    "artificial-intelligence": {
      title: "Artificial Intelligence",
      description: "AI deals with machine learning, deep learning, and intelligent systems.",
      skills: ["Python", "TensorFlow", "Machine Learning"],
      jobs: ["AI Engineer", "ML Scientist", "Data Scientist"],
      timeline: [
        "🎓 Learn Python & ML Basics",
        "🧪 Build ML Projects",
        "📜 Earn AI Certification",
        "💼 Internship in AI Startup",
        "💻 AI Engineer Job at Tech Company",
        "🚀 Senior ML Engineer / Researcher",
      ],
    },
    "cybersecurity": {
      title: "Cybersecurity",
      description: "Protect systems from hacking and security breaches.",
      skills: ["Ethical Hacking", "Networking", "Security Tools"],
      jobs: ["Security Analyst", "Penetration Tester", "SOC Specialist"],
    },
  },

  "civil-engineering": {
    "structural-engineering": {
      title: "Structural Engineering",
      description: "Design strong and safe building structures.",
      skills: ["STAAD Pro", "Structural Analysis", "Reinforced Concrete"],
      jobs: ["Structural Engineer", "Bridge Designer", "Building Consultant"],
      timeline: [
        "🎓 Study Civil Core Subjects",
        "📐 Learn Structural Software (STAAD Pro)",
        "📜 Get Structural Certification",
        "💼 Work on Site Projects",
        "🏗 Structural Engineer Job",
      ],
    },
    "transportation-engineering": {
      title: "Transportation Engineering",
      description: "Plan and design transport systems like highways and airports.",
      skills: ["Traffic Analysis", "AutoCAD Civil", "Pavement Design"],
      jobs: ["Transport Planner", "Highway Engineer", "Railway Designer"],
      timeline: [
        "🎓 Study Transport Systems",
        "📜 Certification in Traffic Modelling",
        "🛣 Highway Internship",
        "💼 Job as Transportation Engineer",
      ],
    },
  },

  "chemical-engineering": {
    "process-engineering": {
      title: "Process Engineering",
      description: "Design, implement, and optimize industrial chemical processes.",
      skills: ["Process Simulation", "Aspen HYSYS", "Heat & Mass Transfer"],
      jobs: ["Process Engineer", "Plant Operator", "Process Design Consultant"],
      timeline: [
        "🎓 Study Chemical & Process Subjects",
        "📘 Learn Simulation Software (Aspen)",
        "📜 Certification in Process Engineering",
        "🏭 Internship at Manufacturing Plant",
        "💼 Process Engineer Job",
      ],
    },
    "petrochemical-engineering": {
      title: "Petrochemical Engineering",
      description: "Work in the production and refining of petroleum-based products.",
      skills: ["Refining Processes", "Catalysis", "Energy Systems"],
      jobs: ["Petroleum Engineer", "Refinery Engineer", "R&D Chemist"],
      timeline: [
        "🎓 Study Petrochemicals & Refining",
        "🏭 Industry Visit / Mini Projects",
        "📜 Certification in Oil & Gas",
        "💼 Job at ONGC, Reliance, etc.",
      ],
    },
  },
};


const SubBranchPage = () => {
    const { branchId, subBranchId } = useParams();
    const data = subBranchInfo[branchId]?.[subBranchId];

    if (!data) return <h2>Sub-branch not found</h2>;

    return (
        <div className="sub-branch-page">
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <h3>🚀 Skills You’ll Learn</h3>
            <ul>
                {data.skills.map((skill, i) => (
                    <li key={i}>✅ {skill}</li>
                ))}
            </ul>

            <h3>💼 Career Options</h3>
            <ul>
                {data.jobs.map((job, i) => (
                    <li key={i}>📌 {job}</li>
                ))}
            </ul>

            {data.timeline && (
                <>
                    <h3>🗺 Career Path Timeline</h3>
                    <div className="timeline-container">
                        {data.timeline.map((step, i) => (
                            <motion.div
                                className="timeline-step"
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                {step}
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

export default SubBranchPage;
