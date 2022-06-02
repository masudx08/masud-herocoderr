import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Basic Journey",
    years: "2017",
    content:
      "Learned HTML, CSS, Js Step by Step from W3School, Freecodecamp & Mozilla Development Network.",
  },
  {
    id: 2,
    title: "Intermediate Journey",
    years: "2017 - present",
    content:
      "Covered React, Node, Mongo, Express and others. I have taken 12+ Course to make awesome Backbone",
  },
  {
    id: 3,
    title: "Success Journey",
    years: "2020 - 2022",
    content:
      "Got paid Internship, then Promoted to Job and then promoted to FullStack developer.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    years: "2018 - Present",
    content:
      "Expert in Pixel Perfect Design. I ensure Responsive design for Mobile, Tab & Desktop",
  },
  {
    id: 2,
    title: "Backend Developer",
    years: "2018 - Present",
    content:
      "Professional to manage Server and Database. I ensure Security to the Application",
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    years: "2019 - Present",
    content:
      "Highly Expertise in MERN Stack. I ensure  Standard and Quality Product",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
