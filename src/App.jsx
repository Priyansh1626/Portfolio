import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import More from "./components/More";
import "./main.js";
import For_clip_pathBelowPrjt from "./components/For_clip_pathBelowPrjt";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <For_clip_pathBelowPrjt />
      <Contact />
      <Footer />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </>
  );
}
