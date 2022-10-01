import React from "react";

export default function BackToTopBtn() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <button className="upBox" onClick={goToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
