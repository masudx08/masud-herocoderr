import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I am a professional Frontend Web developer and MERN Stack developer. After 4 years of experience with a company and some teams, I think I am perfect for providing awesome frontend service. I am highly experienced in working with React.",
};

const progressData = [
  {
    id: 1,
    title: "Frontend Development",
    percantage: 99,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Backend Development",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    percantage: 97,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section  id="about">
      <div  className="container" >
        <Pagetitle  title="About Me" />
        <div className="row" data-aos='fade-up'>
          <div className="col-md-3">
            <div  className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="mailto:rana028511@gmail.com" className="btn btn-default">
                      View CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing" data-aos='fade-up'>
          {counterData.map((counter) => (
            <div  key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
