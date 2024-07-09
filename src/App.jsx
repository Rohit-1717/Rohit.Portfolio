import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Admin from "./components/Admin";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {/* <Loader /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
