import React from "react";
import About_hexagon from "./About_hexagon";
import Title from "./Title";
import aboutHexData from "./AaboutHexData";
import Priyansh_Image from "../images/Priyansh_Image.jpeg";

export default function About() {
  return (
    <>
      <section className="section2" id="about">
        <div className="abtclr">
          <br />
          <br />
          <br />
          <Title title="ABOUT" />
          <div className="hexa_About_box">
            {aboutHexData.map((elem, index) => {
              return (
                <About_hexagon
                  key={elem.id}
                  img={elem.img}
                  title={elem.title}
                  desc={elem.desc}
                />
              );
            })}
          </div>
          <div className="main_about_box">
            <div className="left">
              <div className="left_Box">
                <div className="imgBox">
                  <img src={Priyansh_Image} alt="myImage" />
                </div>
                <div className="title">Who's this guy?</div>
                <div className="desc">
                  <p>
                    I'm a Full-Stack Web Developer studing in
                    <span>
                      <a
                        href="https://kiit.ac.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Kalinga Institute of Industrial Technology{" "}
                      </a>
                    </span>
                    in Bhubneshwar, OR. I have serious passion for UI effects,
                    animations and creating intuitive, dynamic websites.
                    <br />
                    <span>
                      <a href="#contact">Let's make something special.</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>
    </>
  );
}
