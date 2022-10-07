import React from "react";

export default function AboutDetailsCard(prop) {
  return (
    <>
      <div className="col-sm-6 p-0">
        <div className="abtDataContainer">
          <div className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className="heading">
            <p>{prop.title}:</p>
          </div>
          <div className="desc">
            <p> {prop.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
