import React from "react";
import "../Component/section.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import herostudentw from "../../src/herostudentw.webp";
import Imagetext from "./Imagetext";
import Cardimagetext from "./Cardimagetext";
const Section = () => {
  return (
    <div className="container-fluid p-0 sectionbg">
      <div className="container columdirect">
        <div class="chat-container">
          <div class="chat-bubble">
            PW is India’s leading Edtech Company that is democratizing education
            at Scale.
          </div>
        </div>
        <div class="chat-container1">
          <div class="chat-bubble1">Alakh Sir, What is PW?</div>
        </div>
        <div className="d-flex secleftright">
          <div className="w-50 d-flex1 md1">
            <div className="p-0 secdiv">
              <p className="fw-bold herofont">
                Bharat’s
                <span className="textcol ms-1">Biggest & Most Trusted</span>
                <span className="ms-1">Educational Platform</span>
              </p>

              <p className="herofontpara">
                Unlock your potential by signing up with Physics Wallah-The most
                affordable learning solution
              </p>
              <button className="colorbtn">Get Started</button>
            </div>
          </div>
          <div className="w-50 imgsec md2">
            <img
              src={herostudentw}
              alt="herostudentw"
              className="herostudent"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row p-0 div4sec divsec2">
          {Imagetext.map((item, index) => {
            return (
              <Cardimagetext
                key={index}
                imgsrc={item.imgsrc}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
