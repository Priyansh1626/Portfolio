import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import projectCardData from "./ProjectCardData";

export default function Projects() {
  return (
    <>
      <div className="section3" id="projects">
        <div className="allinProject">
          <br />
          <br />
          <br />
          <br />
          <Title title="PROJECTS" />
          <div className="project_main_box container">
            <div className="row p-3">
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
    </>
  );
}
