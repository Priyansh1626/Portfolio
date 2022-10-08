import React from "react";

export default function Title(prop) {
  const { title } = prop;
  return (
    <>
      <div className="headerbox">{title}</div>
    </>
  );
}
