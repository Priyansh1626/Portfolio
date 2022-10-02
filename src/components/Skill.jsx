import React from "react";
import Title from "./Title";

export default function Skill() {
  return (
    <>
      <section className="skillsBox" id="skill">
        <div className="bgSkill">
          <div className="bgSkill2">
            <br />
            <br />
            <Title title="SKILLS" />
            <div className="skillContainer">
              <div className="filterBox">
                <button className="All filterBtn">All</button>
                <button className="frontEnd filterBtn">FrontEnd</button>
                <button className="BackEnd filterBtn">BackEnd</button>
              </div>
            </div>
            <div className="filterDataBox">
              <div className="filterDataContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
