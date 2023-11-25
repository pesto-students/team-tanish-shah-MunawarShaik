import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/ProjectDetails/ProjectDetail";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        {/* Add routes for Blog and BlogPost components (advanced task) */}
      </Routes>
    </div>
  );
}

export default App;
