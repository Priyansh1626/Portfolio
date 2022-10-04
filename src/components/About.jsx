import React from "react";
import Title from "./Title";
import Priyansh_Image from "../images/Priyansh_Image.jpeg";
import resume from "./Data/Resume_5thSem.pdf";
import AboutDetailsCard from "./AboutDetailsCard";
import aboutData from "./AboutData";

let aboutMe = ` I am passionate about building websites that can solve
real-world challenges faced by individual or organisations.
Beside my college studies I am trying to build different
projects to grab my hand in Web Development. Being a begginer
I am sure that I can build fast,working,dynamic and responsive
websites. Currently my focus is on BackEnd Development.`;

export default function About() {
  return (
    <>
      <section className="section2" id="about">
        <div className="abtclr">
          <br />
          <br />
          <br />
          <Title title="ABOUT" />
          <div className="row m-0 p-0 my-5">
            <div className="col-lg-6 p-0 col-md-12 abtLeft">
              <div className="leftBox">
                <div className="row m-0 p-0">
                  <div className="col-lg-12 p-0">
                    <div className="imgBox text-center">
                      <img src={Priyansh_Image} alt="myImage" />
                    </div>
                  </div>
                  <div className="col-lg-12 p-0">
                    <div className="text-center middleBox">Who's this guy?</div>
                  </div>
                  <div className="col-lg-12 p-0 ">
                    <div className=" text-center bottomBox">
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
                        in Bhubneshwar, OD. I have serious passion for UI
                        effects, animations and creating intuitive, dynamic
                        websites.
                        <br />
                        <span>
                          <a href="#contact">Let's make something special.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 abtRight">
              <div className="rightBox">
                <div className="abtHeading">
                  <p>
                    <span style={{ color: "#e31b6d" }}>Full-Stack</span>{" "}
                    Developer
                  </p>
                </div>
                <p className="abtPara">
                  {" "}
                  I am passionate about building websites that can solve
                  real-world challenges faced by individual or organisations.
                  Beside my college studies I am trying to build different
                  projects to grab my hand in Web Development. Being a begginer
                  I am sure that I can build fast,working,dynamic and responsive
                  websites. Currently my focus is on BackEnd Development.
                </p>
                <div className="row m-0 p-0">
                  {aboutData.map((curr, index) => {
                    return (
                      <AboutDetailsCard
                        key={index}
                        title={curr.title}
                        desc={curr.desc}
                      />
                    );
                  })}
                </div>
                <p className="abtPara my-2">
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
