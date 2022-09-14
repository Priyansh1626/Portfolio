import React from "react";
import Priyansh_Image from "../images/projImg1.jfif";

export default function ProjectCard(prop) {
  return (
    <>
      <div className="col-md-4 p-0">
        <div className="projectCard">
          <img src={Priyansh_Image} alt="" />
          <div className="hoverDivBox">
            <div className="top">{prop.top}</div>
            <div className="bottom">{prop.bottom}</div>
          </div>
          <div className="hoverButtonBox">
            <button>
              <a href={prop.btnLink} target="_black">
                {prop.btn}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
