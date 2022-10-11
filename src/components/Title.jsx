import React from "react";

export default function Title(prop) {
  const { title } = prop;

  return (
    <>
      <div className="headerbox" data-aos="slide-right">
        {title}
      </div>
    </>
  );
}
