import React from "react";
import resume from "./Data/Resume_5thSem.pdf";

export default function Navbar() {
  return (
    <>
      <header className="container-fluid header_container">
        {/* <div className="brand_name">
          <a href="#section1">PRIYANSH PANDEY</a>
        </div> */}
        <input type="checkbox" className="main_menu_btn" id="menu_btn" />
        <label htmlFor="menu_btn" className="main-menu_icon">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="navbar_links">
          <li className="nav_link active home">
            <a href="#home" id="actHome">
              Home
            </a>
          </li>
          <li className="nav_link about">
            <a href="#about" id="actAbout">
              About
            </a>
          </li>
          <li className="nav_link projects">
            <a href="#projects" id="actProjects">
              Projects
            </a>
          </li>
          <li className="nav_link contact">
            <a href="#contact" id="actContact">
              Contact
            </a>
          </li>
          <li className="nav_link resume">
            <a href={resume} id="actResume" download="resume">
              Resume
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
