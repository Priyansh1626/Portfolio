import React from "react";
import Contactform from "./Contactform";
import Title from "./Title";

export default function Contact() {
  return (
    <>
      <div className="section5" id="contact">
        <br />
        <br />
        <br />
        <Title title="CONTACT" />
        <div className="ask">
          <p>Have a question or want to work together?</p>
        </div>
        <Contactform />
      </div>
    </>
  );
}
