import React from "react";
import Particle from "./Particle";

export default function Home() {
  return (
    <>
      <Particle />
      <section className="homeSection" id="home">
        <div className="homeMain_box" data-aos="fade-out">
          <div className="mid">
            <p>
              Hello, I am <span>Priyansh Pandey</span>
              <br />
              I'm a <span className="typeHome">full-stack</span> web developer.
            </p>
            <div className="project_btn">
              <a href="#about" className="myWorkBtn">
                View my work <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
