import React from "react";
import AboutHexagon from "./AboutHexagon";
import Title from "./Title";
import aboutHexData from "./AaboutHexData";
import Priyansh_Image from "../images/Priyansh_Image.jpeg";
import resume from "./Data/Resume_5thSem.pdf";
import AboutDataTD from "./AboutDataTD";

export default function About() {
  let date = new Date().getFullYear();
  let age = date - 2002;

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
                <AboutHexagon
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
                    in Bhubneshwar, OD. I have serious passion for UI effects,
                    animations and creating intuitive, dynamic websites.
                    <br />
                    <span>
                      <a href="#contact">Let's make something special.</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rightBox">
                <div className="abtHeading">
                  <p>Full-Stack Developer</p>
                </div>
                <p>
                  I am passionate about building websites that can solve
                  real-world challenges faced by individual or organisations.
                  Beside my college studies I am trying to build different
                  projects to grab my hand in Web Development. Being a begginer
                  I am sure that I can build fast,working,dynamic and responsive
                  websites. Currently my focus is on BackEnd Development.
                </p>
                <div className="abtData">
                  <div className="abtLeft">
                    <AboutDataTD title="Name" desc="Priyansh Pandey" />
                    <AboutDataTD title="Age" desc={age} />
                    <AboutDataTD title="Phone" desc="+91 7987071870" />
                  </div>
                  <div className="abtRight">
                    <AboutDataTD title="Email" desc="2028186@kiit.ac.in" />
                    <AboutDataTD title="Degree" desc="Major in cse" />
                    <AboutDataTD title="Freelance" desc="Available" />
                  </div>
                </div>
                <p>
                  You can download my{" "}
                  <span style={{ color: "#e31b6d" }}> resume </span> using the
                  link &gt; {` `}
                  <button>
                    <a href={resume} download="resume">
                      Resume
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
