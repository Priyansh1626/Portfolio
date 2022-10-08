import React, { useState } from "react";
import Title from "./Title";
import skillData from "./SkillData";
import SkillCard from "./SkillCard";

const allCatValues = [
  ...new Set(
    skillData.map((curr) => {
      return curr.category;
    })
  ),
  "All",
];

export default function Skill() {
  const [item, setItem] = useState(skillData);
  const [catItems] = useState(allCatValues);

  const filterItem = (categItem) => {
    if (categItem === "All") {
      setItem(skillData);
      return;
    }
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
                {catItems.map((curr, index) => {
                  return (
                    <button
                      key={index}
                      className="filterBtn"
                      onClick={() => filterItem(curr)}
                    >
                      {curr}
                    </button>
                  );
                })}
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
            <div className="lineHide"></div>
          </div>
        </div>
      </section>
    </>
  );
}
