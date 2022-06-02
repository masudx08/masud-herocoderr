import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={false}
      >
        <h2 data-aos='fade-up' className="section-title">{title}</h2>
      </ScrollAnimation>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
