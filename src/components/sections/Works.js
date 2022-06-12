import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "frontend",
  },
  {
    id: 3,
    text: "backend",
  },
  {
    id: 4,
    text: "mern",
  }
];

const allData = [
  {
    id: 1,
    title: "Apartment  Hunting Platform",
    category: "mern",
    image: "images/work/apartment-hunt.jpg",
    link: 'https://apartmenthunt-f6708.web.app/',
    popupLink: ["images/work/apartment-hunt.jpg"],
  },
  {
    id: 2,
    title: "Creative Agency",
    category: "backend",
    image: "images/work/creative-agency.jpg",
    link: 'https://creative-agency-fullstack.web.app/',
    popupLink: [
      "images/work/creative-agency.jpg",
    ],
  },
  {
    id: 3,
    title: "Crick AI - Live Cricket Show",
    category: "frontend",
    image: "images/work/crickai.jpg",
    popupLink: ["images/work/crickai.jpg"],
  },
  {
    id: 4,
    title: "Doctor's Portal - Appointment Management tool",
    category: "mern",
    image: "images/work/doctor-portal.jpg",
    link: 'https://doctors-portal-client.web.app/',
    popupLink: [
      "images/work/doctor-portal.jpg",
    ],
  },
  {
    id: 5,
    title: "Gang of Meta",
    category: "frontend",
    image: "images/work/meta-nft.jpg",
    popupLink: ["images/work/meta-nft.jpg"],
  },
  
  {
    id: 6,
    title: "BNB Trading Platform",
    category: "backend",
    image: "images/work/trading.jpg",
    // link: "images/work/trading.jpg",
    popupLink: ["images/work/trading.jpg"]
  },
  {
    id: 7,
    title: "BNB Trading Platform",
    category: "backend",
    image: "images/work/trading-2.jpg",
    popupLink: ["images/work/trading-2.jpg"],
  },
  {
    id: 8,
    title: "Quackland - Simple NFT showcase",
    category: "frontend",
    image: "images/work/quackland-nft.jpg",
    // link: "images/work/quackland-nft.jpg",
    popupLink: ["images/work/quackland-nft.jpg"]
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works" >
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={false}
        >
          <ul className="portfolio-filter list-inline" data-aos='fade-up'>
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper" data-aos='fade-up'>
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
