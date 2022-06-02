import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "Frontend",
    icon: "images/price-1.svg",
    content: [
      {
        id: 0,
        text: "Awesome Pixel-Perfect and Responsive design with dynamic functionality",
      },
      {
        id: 2,
        text: "7 days free support",
      },
    ],
    price: 5,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Full Stack",
    icon: "images/price-3.svg",
    content: [
      {
        id: 1,
        text: "Full package of standard quality Application",
      },
      {
        id: 2,
        text: "1 month free support",
      },
    ],
    price: 15,
    best: true,
    badge: "Recommended",
  },
  {
    id: 3,
    title: "Backend",
    icon: "images/price-2.svg",
    content: [
      { id: 1, text: "Standard API implementation and Super Secure backend application" },
      { id: 2, text: "7 days free support" },
    ],
    price: 10,
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="Pricing Plans" />
        <div className="row align-items-center" data-aos='fade-up'>
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
