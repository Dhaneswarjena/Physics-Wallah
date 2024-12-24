import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Slide1 from "../../src/Slide1.jpg";
import Slide2 from "../../src/Slide2.jpg";
import Slide3 from "../../src/Slide3.jpg";
import Slide4 from "../../src/Slide4.jpg";
import Slide5 from "../../src/Slide5.webp";
import Slide6 from "../../src/Slide6.webp";
import Slide7 from "../../src/Slide7.webp";
import Slide8 from "../../src/Slide8.jpg";
const Carasouel = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={Slide1} class="d-block w-100" alt="slide1" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide2} class="d-block w-100" alt="slide2" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide3} class="d-block w-100" alt="slide3" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide4} class="d-block w-100" alt="slide4" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide5} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide6} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide7} class="d-block w-100" alt="slide5" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slide8} class="d-block w-100" alt="slide5" />
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

export default Carasouel;
