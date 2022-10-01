import React from "react";

export default function AboutDataTD(prop) {
  return (
    <>
      <div className="flex abtDataContainer">
        <div className="icon ">
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="heading">
          <h4>{prop.title}:</h4>
        </div>
        <div className="desc ">
          <p> {prop.desc}</p>
        </div>
      </div>
    </>
  );
}
