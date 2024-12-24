import React, { useState } from "react";
import "./Cardcarasouel.css";
import comma from "../Commonimages/comma.webp";
import std1 from "../STD/std1.jpg";
import std2 from "../STD/std2.png";
import std3 from "../STD/std3.png";
import std4 from "../STD/std4.png";
import std5 from "../STD/std5.png";
import std6 from "../STD/std6.png";
const testimonials = [
  {
    imgsrc: comma,
    text: "I used to regularly follow the youtube videos, prelims booster videos and specially editorial discussion from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly… all these were very helpful during my preparation…",

    stdimage: std1,
    name: "Anmol Rathore",
    result: "UPSC CSE 2023 AIR 7",
    exam: "UPSC",
  },
  {
    imgsrc: comma,
    text: "I am Raja Majhi, and I am thrilled to share that I have secured All India Rank 1 (AIR 1) in the GATE 2024 examination in ECE. From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. The faculty members, with their in-depth knowledge and teaching expertise, ensured that every concept was crystal clear. GATE Wallah not only provided academic support but also fostered a positive and encouraging learning environment. The online resources, interactive sessions, and community forums allowed me to connect with fellow aspirants and learn collaboratively.",

    stdimage: std2,
    name: "Raja Majhi",
    result: "GATE 2024 AIR 1",
    exam: "GATE",
  },
  {
    imgsrc: comma,
    text: "PW helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy.",

    stdimage: std3,
    name: "Amit Kumar Mandal",
    result: "IBPS Topper",
    exam: "Banking",
  },
  {
    imgsrc: comma,
    text: "My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.",

    stdimage: std4,
    name: "Sushant Padha",
    result: "JEE Advanced 2024 - AIR 52",
    exam: "IIT JEE",
  },
  {
    imgsrc: comma,
    text: "My name is Karan Garg, and I secured 710 marks in the NEET UG 2024 exam, achieving an All India Rank of 429. I am thrilled to have had the opportunity to study for my NEET journey with Physics Wallah, as their teachers' content and guidance were superb. Mohit Dhadeech sir was a huge inspiration for me, motivating me to give my best in NEET through his guidance during lectures. Thank you to the entire Physics Wallah team for making my NEET journey easier.",

    stdimage: std5,
    name: "Karan Garg",
    result: "AIR 429",
    exam: "NEET",
  },
  {
    imgsrc: comma,
    text: "Thanks to PW! PW faculties teaches from basic and they are very supportive because of which I am able to secure AIR 99 in JEE Adavnced 2024. I studied from Varun JEE Adanced 2024 Batch.",

    stdimage: std6,
    name: "Tanay",
    result: "JEE Advanced 2024 - AIR 99",
    exam: "IIT JEE",
  },
];

const Cardcarsouel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3; // Show 3 cards at a time

  const handleNext = () => {
    if (currentIndex + cardsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <div className="custom-carousel-container">
      <div
        className="custom-carousel"
        style={{
          transform: `translateX(-${(100 / cardsPerPage) * currentIndex}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="custom-card" key={index}>
            <div className="quote-icon">
              <img src={testimonial.imgsrc} alt="text1" width="12%" />
            </div>
            <div className="textheight">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>
                {testimonial.text}
              </p>
            </div>

            <div className="profile">
              <img src={testimonial.stdimage} alt={testimonial.name} />
              <div>
                <div className="name">{testimonial.name}</div>
                <div className="title">
                  {" "}
                  <div>
                    <label className="bgcolorcode">
                      {testimonial.result}
                      <span
                        style={{
                          color: "gray",
                          marginLeft: "3px",
                          marginRight: "3px",
                          fontWeight: "600",
                        }}
                      >
                        |
                      </span>
                      {testimonial.exam}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="custom-carousel-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          &#10094;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= testimonials.length}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Cardcarsouel;
