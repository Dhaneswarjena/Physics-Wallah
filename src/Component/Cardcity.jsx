import React from "react";

const Cardcity = ({ imgsrc, title }) => {
  return (
    <div className="col-md-3">
      <div class="card mb-3 p-3">
        <div class="row g-0">
          <div class="col-md-3">
            <img
              src={imgsrc}
              class="img-fluid rounded float-start"
              alt={title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title citycardtitle">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardcity;
