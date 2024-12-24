import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Res1 from "../Rescarsouel/Res1.webp";
import Res2 from "../Rescarsouel/Res2.webp";
import Res3 from "../Rescarsouel/Res3.jpg";
import Res4 from "../Rescarsouel/Res4.webp";
import Res5 from "../Rescarsouel/Res5.jpg";
import Res6 from "../Rescarsouel/Res6.jpg";
import Res7 from "../Rescarsouel/Res7.webp";
import Res8 from "../Rescarsouel/Res8.webp";
const Rescarousel = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carouselborder">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={Res1} class="d-block w-100" alt="slide1" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res2} class="d-block w-100" alt="slide2" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res3} class="d-block w-100" alt="slide3" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res4} class="d-block w-100" alt="slide4" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res5} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res6} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res7} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Res8} class="d-block w-100" alt="slide5" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Rescarousel;
