import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Admin from "./components/Admin";
import ProjectsPage from "./components/ProjectsPage";
import CustomCursor from "./components/CustomCursor";
import AdminSignUp from "./components/AdminSignUp";
import ResetPassword from "./components/ResetPassword";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isNotMobile = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <>
      {isNotMobile && <CustomCursor />}
      {isNotMobile && <Loader />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-signUp" element={<AdminSignUp />} />
          <Route path="/admin/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
