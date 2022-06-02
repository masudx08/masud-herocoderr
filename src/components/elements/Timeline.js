import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={false}
    >
      <div className="timeline-container">
        <div className="content"  data-aos='fade-up'>
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
