import React from "react";

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
          <li className="nav_link">
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li className="nav_link">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="nav_link">
            <a href="#projects" className="">
              Projects
            </a>
          </li>
          <li className="nav_link">
            <a href="#resume" className="">
              Ressume
            </a>
          </li>
          <li className="nav_link">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
