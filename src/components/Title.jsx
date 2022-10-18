import React from "react";

export default function Title(prop) {
  const { title } = prop;

  return (
    <>
      <div className="headerbox" data-aos="fade-right">
        {title}
      </div>
    </>
  );
}
