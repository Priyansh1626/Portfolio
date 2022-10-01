import React from "react";
import About_hexagon from "./About_hexagon";
import Title from "./Title";
import aboutHexData from "./AaboutHexData";
import Priyansh_Image from "../images/Priyansh_Image.jpeg";
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet possimus, vel quasi sint corrupti ratione eaque.
                  Officiis ex, deserunt totam inventore excepturi explicabo
                  commodi rerum voluptatem iste velit deleniti ipsam? Repellat
                  excepturi recusandae possimus distinctio corporis! Atque
                  doloremque modi veniam, optio magni nam corrupti. Iure ipsum
                  adipisci ab quisquam odio. Quam molestiae dolores id repellat
                  consequatur.
                </p>
                <div className="abtData">
                  <div className="abtLeft">
                    <AboutDataTD title="Birthday" desc="16 May 2002" />
                    <AboutDataTD title="Age" desc={age} />
                    <AboutDataTD title="Phone" desc="+91 7987071870" />
                  </div>
                  <div className="abtRight">
                    <AboutDataTD title="Degree" desc="Major in cse" />
                    <AboutDataTD title="Email" desc="2028186@kiit.ac.in" />
                    <AboutDataTD title="Freelance" desc="Available" />
                  </div>
                </div>
                <p>
                  My focus is on Natural Language Processing and its applied
                  tasks in question-answering systems and information retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
