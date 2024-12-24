import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import download from "../download.jpg";
import "../Component/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={download} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/vidyapeeth">
                  Vidyapeeth
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upskilling">
                  Upskilling - Job Assistance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pwstore">
                  PW Store (Books)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/realstate">
                  REAL Test
                </Link>
              </li>
            </ul>
            <button className="colorbtn">Login/Register</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
