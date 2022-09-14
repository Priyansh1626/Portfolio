import React from "react";

export default function Title(prop) {
  return (
    <>
      <div className={`headerbox ${prop.headClr}`}>{prop.title}</div>
    </>
  );
}
