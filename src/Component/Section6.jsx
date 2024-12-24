import React from "react";
import "./section.css";
import videotype from "../Commonimages/videotype.png";
import playcircle from "../Commonimages/playcircle.webp";
import comma from "../Commonimages/comma.webp";
import Cardcarsouel from "./Cardcarsouel";
const Section6 = () => {
  return (
    <div className="container-fluid p-0 bgstudent">
      <div className="container">
        <div className="row">
          <div className="sec4head mt-5">
            <h2>Students ❤️ Physics Wallah</h2>
            <p className="mb-0">Hear from our students</p>
          </div>
        </div>
        <div className="row mt-4">
          <div class="card mb-3 border-0 box" style={{ padding: "24px" }}>
            <div class="row g-0">
              <div
                class="col-md-3 position-relative pr-0"
                style={{ width: "20%" }}
              >
                <img
                  src={videotype}
                  class="img-fluid rounded float-start videotype"
                  alt="videotype"
                />
                <div>
                  <img
                    src={playcircle}
                    alt="playcircle"
                    className="playcircle"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body ps-0">
                  <img src={comma} alt="comma" width="5%" />
                  <p class="card-text">
                    My name is Tathagat Awatar. I secured All India Rank 1 by
                    scoring full score in NEET UG 2024. I started my preparation
                    with Physics Wallah in 12th grade by joining the Lakshya
                    NEET batch, then I took 2 drop by joining Yakeen NEET batch
                    and I completed my full preparation from online PW batch. PW
                    teachers and their guidance helps me to acheive AIR1 and
                    motivated me during my drop year....
                  </p>
                  <div class="card-text">
                    <strong class="text-black fw-bold">Multiple Rankers</strong>
                    <div>
                      <label className="bgcolorcode">
                        AIR 1, AIR 86 and other
                        <span
                          style={{
                            color: "gray",
                            marginLeft: "3px",
                            marginRight: "3px",
                          }}
                        >
                          |
                        </span>
                        NEET
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "1%" }}>
          <Cardcarsouel />
        </div>
      </div>
    </div>
  );
};

export default Section6;
