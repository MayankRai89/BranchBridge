 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Branches from "./pages/Branches";
import BranchDetail from "./pages/BranchDetail";
import SubBranchPage from "./pages/SubBranchPage";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
         <Route path="/branches/:branchId" element={<BranchDetail />} />
         <Route path="/branches/:branchId/:subBranchId" element={<SubBranchPage />} />
        {/* more routes coming later */}
      </Routes>
    </Router>
  );
}

export default App;
