import React from "react";
import Particle from "./Particle";

export default function Home() {
  return (
    <>
      {/* <div className="home_bg_image" id="section1"></div> */}
      <Particle />
      <div className="homeBody" id="home">
        <div className="homeMain_box">
          <div className="mid">
            <p>
              Hello, I am <span>Priyansh Pandey</span>
              <br />
              I'm a <span className="typeHome">full-stack</span> web developer.
            </p>
            <div className="project_btn">
              <button className="myWorkBtn">
                <a href="#about">
                  View my work <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
