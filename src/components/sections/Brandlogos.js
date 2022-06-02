import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/tech/bootstrap.svg",
  },
  {
    id: 3,
    image: "images/tech/express.svg",
  },
  {
    id: 4,
    image: "images/tech/firebase.svg",
  },
  {
    id: 5,
    image: "images/tech/html.svg",
  },
  {
    id: 6,
    image: "images/tech/javascript.svg",
  },
  {
    id: 7,
    image: "images/tech/mongo.svg",
  },
  {
    id: 8,
    image: "images/tech/next.svg",
  },
  {
    id: 9,
    image: "images/tech/node.svg",
  },
  {
    id: 10,
    image: "images/tech/react.svg",
  },
  {
    id: 11,
    image: "images/tech/redux.svg",
  },
  {
    id: 12,
    image: "images/tech/sass.svg",
  },
  {
    id: 13,
    image: "images/tech/typescript.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos" data-aos='fade-up'>
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img style={{maxWidth:'100px'}} src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
