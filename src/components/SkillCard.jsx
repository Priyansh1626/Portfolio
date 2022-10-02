import React from "react";
import reactImg from "../images/reactImg.png";

export default function SkillCard(prop) {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <div className="text-center img-box-shape">
            {/* <img src={reactImg} alt=" " className="card-img skillImg" /> */}
          </div>
        </div>
        <div className="cardName text-center">Php</div>
      </div>
    </>
  );
}
