import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Examdetail = ({ imgsrc, heading, Classlist }) => {
  console.log(Classlist);
  return (
    <div className="col-md-4 g-3">
      <div className="p-0 cardimage">
        <div className="w-75">
          <div className="p24 fw-bold">{heading}</div>
          <div className="listclass mt-4">
            {Classlist.map((item1) => (
              <Link>{item1.class1}</Link>
            ))}
          </div>
          <div className="mt-4">
            <Link className="text-decoration-none text-black f-18">
              Explore Category <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-25 cardsbg position-relative">
          <img
            src={imgsrc}
            alt="Jee"
            className="bgcardsimage position-absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Examdetail;
