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
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Skill from "./components/Skill";

export default function App() {
  return (
    <>
      <Home />
      <Navbar />
      <BackToTopBtn />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
