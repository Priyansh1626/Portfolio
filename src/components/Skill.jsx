import React, { useState } from "react";
import Title from "./Title";
import skillData from "./SkillData";
import SkillCard from "./SkillCard";

export default function Skill() {
  const [item, setItem] = useState(skillData);

  const filterItem = (categItem) => {
    const updatedItems = skillData.filter((elem) => {
      return elem.category === categItem;
    });
    setItem(updatedItems);
  };

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
                <button
                  className="frontEnd filterBtn"
                  onClick={() => filterItem("frontEnd")}
                >
                  FrontEnd
                </button>
                <button
                  className="BackEnd filterBtn"
                  onClick={() => filterItem("backEnd")}
                >
                  BackEnd
                </button>
                <button
                  className="All filterBtn"
                  onClick={() => setItem(skillData)}
                >
                  All
                </button>
              </div>
            </div>
            <div className="filterDataBox">
              {item.map((currElm) => {
                return (
                  <SkillCard
                    key={currElm.id}
                    language={currElm.language}
                    img={currElm.img}
                  />
                );
              })}
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
