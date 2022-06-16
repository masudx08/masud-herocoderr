import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Masud Rana",
  avatarImage: "/images/avatar-2.svg",
  content:
    `I am a professional MERN Stack Web developer & React JS Specialist.
    I am a certified Data Structure and Algorithm expert on Freecodecamp and a problem solver on HackerRank .
    I have 5 years of web development experience with many projects and 5 different teams. 
    And also have 2 years of job experience in two different company.`,
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
              <img src="images/profile.png" style={{width:'150px', height:'150px'}} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a target='_blank' href="https://drive.google.com/drive/folders/1reBKPmCwW7oQI6QpqOuDXowX0Pd8aPKB?usp=sharing" className="btn btn-default">
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
