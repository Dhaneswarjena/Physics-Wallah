import React from "react";
import "../Component/section.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Examcategory from "./Jsonfile/Examcategory";
import Examdetail from "./Examdetail";
import { Link } from "react-router-dom";
const Section2 = () => {
  return (
    <div className="container-fluid p-0 bg-white h-550">
      <div className="container bg-white position-relative">
        <div className="p-0 sectionhead">
          <h1 className="fw-semibold">Exam Categories</h1>
          <p className="fw-semibold">
            PW is preparing students for 18 exam categories. Scroll down to find
            the one you are preparing for
          </p>
        </div>
        <div className="row mt-3">
          {Examcategory.map((item, index) => {
            return (
              <Examdetail
                key={index}
                heading={item.heading}
                imgsrc={item.imgsrc}
                Classlist={item.Classlist}
              />
            );
          })}
        </div>
        <div className="mt-5 text-center justify-content-center">
          <Link className="text-decoration-none f-18 shocategory fw-bold">
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
