import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Frontend Development",
    content:
      "Pixel Perfect Responsive Design. Standard and Easily Maintainable Code",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Backend Development",
    content:
      "Work on MVC pattern and  Micro Service. Provide Secure and Authentic Application",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "MERN Stack  Development",
    content:
      "Professional and World Class Quality maintained project. Easy extendability and User friendly",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle  title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <a
              className="colorpink pointer"
             href='https://www.upwork.com/freelancers/~011219692ea643aa2f'
             target='_blank'
            >
              Click here
            </a>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
