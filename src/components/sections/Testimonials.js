import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Suresh Gaussian",
    subtitle: "Product designer",
    review:
      "I am very pleased to work with Masud Rana. He was quick to translate my figma design to react code. I would definetly leverage his skills as I develop my app going forward. 100% recommend 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Rico",
    subtitle: "Team Manager",
    review:
      "Great communication, kept me updated along the way, work was 100%. Can't fault in anyway, would highly recommend 🎉",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "David",
    subtitle: "CEO of angelsterritory",
    review:
      "He is awesome MERN stack developer. He made a awesome trading application for me. Masud Rana is real hero 🏅🏅",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container" data-aos='fade-up'>
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
