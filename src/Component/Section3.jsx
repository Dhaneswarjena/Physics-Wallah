import React from "react";
import "./section.css";
import Cityimage from "../Cityimage";
import Cardcity from "./Cardcity";
const Section3 = () => {
  return (
    <div className="container-fluid p-0">
      <div className="citysection">
        <video
          src="https://static.pw.live/5b09189f7285894d9130ccd0/7c44087d-aff1-438d-aa67-2a493c48504f.mp4"
          playsInline
          autoPlay
          loop
          muted
          controlsList="nofullscreen nodownload noremoteplayback"
          className="videoclass"
        ></video>
        <div class="video-overlay"></div>
        <div className="citycardhead">
          <div className="f24">
            Explore Tech-Enabled Offline Vidyapeeth Centres
          </div>
          <p className="mb-5 mt-3">
            Creating new benchmarks in learning experiences
          </p>
        </div>
        <div className="offset-md-1 col-md-10 offset-md-1">
          <div className="citycard">
            <div className="row cityheading">
              <div className="position-relative">
                <div className="header">
                  Find Vidyapeeth Centre in your city
                </div>
                <hr
                  className="position-absolute"
                  style={{
                    width: "10%",
                    top: "52px",
                    marginLeft: "29%",
                    background: "#B7B7B7",
                  }}
                />
                <div className="para">
                  Available in <span style={{ color: "#4437b8" }}>105</span>{" "}
                  cities
                </div>
                <hr
                  className="position-absolute"
                  style={{
                    width: "10%",
                    top: "52px",
                    marginLeft: "59%",
                    background: "#B7B7B7",
                  }}
                />
              </div>
            </div>
            <div className="row g-3 mt-3">
              {Cityimage.map((card, index) => {
                return (
                  <Cardcity
                    key={index}
                    imgsrc={card.imgsrc}
                    title={card.title}
                  />
                );
              })}
            </div>
            <div className="row mt-3">
              <div className="text-center">
                <button className="colorbtn">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
