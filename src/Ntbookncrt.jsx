import React from "react";
import "./HoverEffect.css";
import { GoArrowRight } from "react-icons/go";

const Ntbookncrt = ({ imgsrc, title, para }) => {
  return (
    <div className="col-md-4">
      <div
        class="card cardbgsec border-0 position-relative"
        style={{ height: "350px" }}
      >
        <img src={imgsrc} class="card-img" alt={title} />
        <div class="card-img-overlay">
          <div className="d-flex justify-content-between">
            <h5 class="card-title" style={{ fontSize: "24px" }}>
              {title}
            </h5>
            <div className="hover-arrow">
              <GoArrowRight />
            </div>
          </div>

          <p class="card-text">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Ntbookncrt;
