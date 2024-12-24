import React from "react";
import "./section.css";
import Tick from "../Commonimages/Tick.webp";
import googlepay from "../Commonimages/googlepay.webp";
import applestore from "../Commonimages/applestore.webp";
import leftrightimg from "../leftrightimg.webp";
import { Link } from "react-router-dom";
const Leftrightcard = () => {
  return (
    <div className="leftrightcard p-0 position-relative">
      <div className="lefttextdiv">
        <div className="leftcardtext">
          <h2 className="mt10 fw-bold ">
            Join 15 Million students on the app today!
          </h2>

          <div className="d-flex">
            <label>
              <img src={Tick} alt="oneimage" height="20" />
            </label>
            <label className="ms-2 fw-bold">
              Live & recorded classes available at ease
            </label>
          </div>
          <div className="d-flex mt-3">
            <label>
              <img src={Tick} alt="oneimage" height="20" />
            </label>
            <label className="ms-2 fw-bold">
              Dashboard for progress tracking
            </label>
          </div>
          <div className="d-flex mt-3">
            <label>
              <img src={Tick} alt="oneimage" height="20" />
            </label>
            <label className="ms-2 fw-bold">
              Millions of practice questions at your fingertips
            </label>
          </div>
          <div className="d-flex mt-4">
            <Link>
              <img src={googlepay} alt="googlepay" className="googlepay" />
            </Link>
            <Link className="ms-3">
              <img src={applestore} alt="applestore" className="appstore" />
            </Link>
          </div>
        </div>
      </div>
      <div className="rightsideimageidv">
        <img
          src={leftrightimg}
          alt="leftrightcard"
          className="leftrightimgage"
        />
      </div>
    </div>
  );
};

export default Leftrightcard;
