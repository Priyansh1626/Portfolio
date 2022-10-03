import React from "react";

window.onscroll = () => {
  let header = document.querySelector(".header_container");
  let sections = document.querySelectorAll("section");
  let navli = document.querySelectorAll(".nav_link");
  let top = window.scrollY;
  if (top < 650) {
    header.style.opacity = 0;
  } else {
    header.style.opacity = 1;
  }
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (top >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });
  navli.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

export default function Navbar() {
  return (
    <>
      <header className="container-fluid header_container">
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
          <li className="nav_link skill">
            <a href="#skill" id="actSkill">
              Skills
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
        </ul>
      </header>
    </>
  );
}
