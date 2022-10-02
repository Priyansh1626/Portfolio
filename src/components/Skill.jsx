import React from "react";
import Title from "./Title";
import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <>
      <section className="skillsBox" id="skill">
        <div className="bgSkill">
          <div className="bgSkill2">
            <br />
            <br />
            <br />
            <Title title="SKILLS" />
            <div className="filterContainer">
              <div className="filterBox">
                <button className="All filterBtn">All</button>
                <button className="frontEnd filterBtn">FrontEnd</button>
                <button className="BackEnd filterBtn">BackEnd</button>
              </div>
            </div>
            <div className="filterDataBox">
              <SkillCard language="Node" />
              <SkillCard language="Node" />
              <SkillCard language="Node" />
              <SkillCard language="Node" />
              <SkillCard language="Node" />
              <SkillCard language="Node" />
            </div>
            <div className="skillAnimationBox">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="lineHide"></div>
          </div>
        </div>
      </section>
    </>
  );
}
