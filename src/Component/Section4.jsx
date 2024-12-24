import React from "react";
import "./section.css";
import Studentcard from "../Studentcard";
import Studentcardsec from "./Studentcardsec";
const Section4 = () => {
  return (
    <div className="container-fluid p-0">
      <div className="offset-md-1 col-md-10 h-385">
        <div className="sec4head">
          <h2>A Platform Trusted by Students Worldwide</h2>
          <p className="mb-0">
            Don't Just Take Our Word for It. Delve into the Numbers and Witness
            the Excellence for Yourself!
          </p>
        </div>
        <div className="row mt-4">
          {Studentcard.map((stdcard, index) => {
            return (
              <Studentcardsec
                imgsrc={stdcard.imgsrc}
                title={stdcard.title}
                para={stdcard.para}
                bg={stdcard.bg}
              />
            );
          })}
        </div>
        <div className="row mt-5">
          <div className="text-center">
            <button className="colorbtn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
