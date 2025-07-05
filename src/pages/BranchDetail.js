import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BranchDetail.css";




const branchContent = {
  "computer-science": {
    name: "Computer Science",
    description:
      "BTech in Computer Science and Engineering (CSE) is a four-year undergraduate program that combines theoretical and practical knowledge of computer hardware and software. BTech CSE offers a dynamic range of sub-branches, empowering students with expertise to excel in the ever-evolving tech landscape.",
    specializations: [
      { name: "Artificial Intelligence", slug: "artificial-intelligence" },
      { name: "Cybersecurity", slug: "cybersecurity" },
      { name: "Web Development", slug: "web-development" },
      { name: "Data Science", slug: "data-science" },
      { name: "Cloud Computing DevOps", slug: "cloud-computing-devops" },
      { name: "Software Engineering", slug: "software-engineering" },
      { name: "Computer Graphics", slug: "computer-graphics" },
      { name: "NLP", slug: "natural-language-processing" },
    ],
    certifications: ["Google Data Cert", "AWS Cloud Cert", "Coursera AI"],
    companies: ["Google", "Amazon", "TCS", "Infosys"],
  },

  "mechanical-engineering": {
    name: "Mechanical Engineering",
    description: "Explore mechanics, machines, thermodynamics.",
    specializations: [
      { name: "CAD/CAM", slug: "cad-cam" },
      { name: "Thermal Engineering", slug: "thermal-engineering" },
      { name: "Automobile Engineering", slug: "automobile" },
      { name: "Robotics", slug: "robotics" },
    ],
    certifications: ["AutoCAD", "SolidWorks", "NPTEL Thermo"],
    companies: ["TATA", "BHEL", "L&T", "Mahindra"],
  },

  "civil-engineering": {
    name: "Civil Engineering",
    description:
      "Plan, design, and construct buildings, roads, and public works.",
    specializations: [
      { name: "Structural Engineering", slug: "structural-engineering" },
      { name: "Transportation Engineering", slug: "transportation-engineering" },
      { name: "Geotechnical Engineering", slug: "geotechnical-engineering" },
      { name: "Environmental Engineering", slug: "environmental-engineering" },
    ],
    certifications: [
      "AutoCAD Civil",
      "STAAD Pro",
      "NPTEL Structural Design",
    ],
    companies: ["L&T", "TATA Projects", "Gammon", "Shapoorji Pallonji"],
  },

  "chemical-engineering": {
    name: "Chemical Engineering",
    description:
      "Study the transformation of raw materials into useful products through chemical processes and systems.",
    specializations: [
      { name: "Process Engineering", slug: "process-engineering" },
      { name: "Petrochemical Engineering", slug: "petrochemical-engineering" },
      { name: "Biochemical Engineering", slug: "biochemical-engineering" },
      { name: "Polymer Technology", slug: "polymer-technology" },
    ],
    certifications: [
      "Process Safety Management",
      "Aspen HYSYS Certification",
      "NPTEL Chemical Engineering",
    ],
    companies: ["Reliance", "ONGC", "BASF", "Lupin", "TATA Chemicals"],
  },
};


const BranchDetail = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();

  const branch = branchContent[branchId];

  if (!branch) return <h2>Branch not found</h2>;

  return (
    <div className="branch-detail">
      <h1>{branch.name}</h1>
      <p>{branch.description}</p>

      <h3>📌 Specializations</h3>
      <div className="sub-branch-cards">
        {branch.specializations.map((spec, i) => (
          <div
            className="sub-card"
            key={i}
            onClick={() =>
              navigate(`/branches/${branchId}/${spec.slug}`)
            }
          >
            {spec.name}
          </div>
        ))}
      </div>

      <h3>📜 Recommended Certifications</h3>
      <ul>
        {branch.certifications.map((cert, i) => (
          <li key={i}>✅ {cert}</li>
        ))}
      </ul>

      <h3>🏢 Top Hiring Companies</h3>
      <ul>
        {branch.companies.map((comp, i) => (
          <li key={i}>🏢 {comp}</li>
        ))}
      </ul>
    </div>
  );
};

export default BranchDetail;