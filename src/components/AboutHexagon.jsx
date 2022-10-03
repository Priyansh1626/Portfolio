import React from "react";

export default function AboutHexagon(prop) {
  return (
    <>
      <div className="hexbox">
        <div className="hexagon">
          <img src={prop.img} alt="" />
        </div>
        <div className="title">{prop.title}</div>
        <div className="desc">{prop.desc}</div>
      </div>
    </>
  );
}
