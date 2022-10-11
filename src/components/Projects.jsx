import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import projectCardData from "./ProjectCardData";

export default function Projects() {
  return (
    <>
      <section className="projectSection" id="projects">
        <div className="clr">
          <div className="clr2">
            <div className="allinProject">
              <br />
              <br />
              <br />
              <Title title="PROJECTS" />
              <div
                className="project_main_box"
                data-aos="fade-out"
                data-aos-duration="1000"
              >
                <div className="row m-0 p-0">
                  {projectCardData.map((currElm) => {
                    return (
                      <ProjectCard
                        key={currElm.id}
                        img={currElm.img}
                        top={currElm.top}
                        bottom={currElm.bottom}
                        btnLink={currElm.btnLink}
                        btn={currElm.btn}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
