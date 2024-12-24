import React from "react";
import Ntbookncrt from "../Ntbookncrt";
import Sec7 from "../Sec7";
import SmoothCarousel from "./SmoothCarousel";

const Section7 = () => {
  return (
    <div className="container-fluid p-0 sec7bg">
      <div className="container">
        <div className="row">
          <div className="sec4head mt-5">
            <h2>Study Resources</h2>
            <p className="mb-0">
              A diverse array of learning materials to enhance your educational
              journey.
            </p>
          </div>
          <div className="mt-4">
            <div className="row">
              {Sec7.map((item, index) => (
                <Ntbookncrt
                  key={index}
                  imgsrc={item.imgsrc}
                  title={item.title}
                  para={item.para}
                  marginsec={item.marginsec}
                  marginsec1={item.marginsecl}
                  widthsec={item.widthsec}
                />
              ))}
            </div>
          </div>
          <div className="">
            <div className="text-center mt10 mb-5">
              <h2>Join Bharat’s Most Loved Educational Platform Today</h2>
              <p className="mb-0">
                Explore our 72 YouTube Channels and subscribe to get access to
                quality education for free.
              </p>
            </div>
            <div className="">
              <SmoothCarousel />
            </div>
            <div className="text-center mt-4" style={{ marginBottom: "6%" }}>
              <button className="colorbtn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
