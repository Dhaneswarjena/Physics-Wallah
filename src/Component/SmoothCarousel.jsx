import React from "react";
import "./SmoothCarousel.css";
import Gold from "../Commonimages/gold.webp";
import Diamond from "../Commonimages/Diamond.png";
const SmoothCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Physics Wallah",
      num: "11.5 M",
      content: "Subscribers",
      imgsrc: Diamond,
    },
    {
      id: 2,
      title: "Competition Wallah",
      num: "2.71 M",
      content: "Subscribers",
      imgsrc: Gold,
    },
    {
      id: 3,
      title: "JEE Wallah",
      num: "1.69 M",
      content: "Subscribers",
      imgsrc: Gold,
    },
    {
      id: 4,
      title: "NCERT Wallah",
      num: "1.35 M",
      content: "Subscribers",
      imgsrc: Gold,
    },
    {
      id: 5,
      title: "PhysicsWallah Foundation",
      num: "3.48 M",
      content: "Subscribers",
      imgsrc: Gold,
    },
  ];

  return (
    <div className="smooth-carousel-container">
      <div className="smooth-carousel-track">
        {cards.map((card) => (
          <div
            key={card.id}
            className="smooth-carousel-card"
            title={card.title}
          >
            <div>
              <img src={card.imgsrc} alt={card.title} />
            </div>
            <h3 className="mt-2" style={{ fontSize: "20px" }}>
              {card.title}
            </h3>
            <p>
              <strong>{card.num}</strong>
              <label className="ms-1" style={{ color: "#757575" }}>
                {card.content}
              </label>
            </p>
          </div>
        ))}
        {cards.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="smooth-carousel-card"
            title={card.title}
          >
            <div>
              <img src={card.imgsrc} alt={card.title} />
            </div>
            <h3 className="mt-2" style={{ fontSize: "20px" }}>
              {card.title}
            </h3>
            <p>
              <strong>{card.num}</strong>
              <label className="ms-1" style={{ color: "#757575" }}>
                {card.content}
              </label>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothCarousel;
