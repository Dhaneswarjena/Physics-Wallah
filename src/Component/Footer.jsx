import React from "react";
import "../Component/Footer.css";
import Footerlogo from "../Commonimages/Footerlogo.png";
import applestore from "../Commonimages/applestore.webp";
import googlepay from "../Commonimages/googlepay.webp";
import { Link } from "react-router-dom";
import fb from "../Social/fb.webp";
import inta from "../Social/inta.webp";
import utube from "../Social/utube.webp";
import Linkedin from "../Social/Linkedin.webp";
import Twitter from "../Social/Twitter.webp";
import Artboard from "../Social/Artboard.webp";
const Footer = () => {
  return (
    <div className="container-fluid p-0 bgfooter">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mt-5">
            <div className="footleft">
              <div>
                <label style={{ width: "11%" }}>
                  <img src={Footerlogo} alt="pw" style={{ width: "77%" }} />
                </label>
                <label className="ms-1 colorpw">Physics Wallah</label>
              </div>
              <div className="mt-2" style={{ width: "86%" }}>
                We understand that every student has different needs and
                capabilities, which is why we create such a wonderful and unique
                curriculum that is the best fit for every student.
              </div>
              <div className="d-flex mt-4">
                <Link>
                  <img src={googlepay} alt="googlepay" className="googlepay1" />
                </Link>
                <Link className="ms-3">
                  <img
                    src={applestore}
                    alt="applestore"
                    className="appstore1"
                  />
                </Link>
              </div>
              <div className="mt-3">
                <div className="social mb-2">Let’s get social :</div>
                <div>
                  <Link to="https://www.facebook.com/physicswallah">
                    <img src={fb} alt="fb" className="socialimg" />
                  </Link>
                  <Link to="https://www.instagram.com/physicswallah/">
                    <img src={inta} alt="inta" className="socialimg" />
                  </Link>
                  <Link to="https://www.youtube.com/c/PhysicsWallah">
                    <img src={utube} alt="utube" className="socialimg" />
                  </Link>
                  <Link to="https://www.linkedin.com/company/physicswallah/">
                    <img src={Linkedin} alt="Linkedin" className="socialimg" />
                  </Link>
                  <Link to="https://twitter.com/physicswallahap?lang=en">
                    <img src={Twitter} alt="Twitter" className="socialimg" />
                  </Link>
                  <Link to="https://t.me/Physics_Wallah_Official_Channel">
                    <img src={Artboard} alt="Artboard" className="socialimg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="row g-3">
              <div className="col-4">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Company
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>About Us</Link>
                  <Link>Contact Us</Link>
                  <Link>Careers</Link>
                  <Link>Updates</Link>
                  <Link>Blogs</Link>
                  <Link>Account Deletion</Link>
                </div>
              </div>

              <div className="col-4">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Our Centres
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>New Delhi</Link>
                  <Link>Patna</Link>
                  <Link>Kota</Link>
                  <Link>Noida</Link>
                  <Link>Dhanbad</Link>
                  <Link>Varanasi</Link>
                  <Link>View All</Link>
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Popular Exams
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>IIT JEE</Link>
                  <Link>NEET</Link>
                  <Link>GATE</Link>
                  <Link>NDA</Link>
                  <Link>UPSC</Link>
                  <Link>School Prep</Link>
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Connect With Us
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>Email Us</Link>
                  <Link>Talk to A Counselor</Link>
                </div>
              </div>

              <div className="col-4">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Quick Links
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>PW Prerna</Link>
                  <Link>PW SIP</Link>
                  <Link>PW Gurukulam</Link>
                </div>
              </div>
              <div className="col-4 pe-0">
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Our Products
                </div>
                <div className="mt-2 d-flex flex-column gap-1 cmp">
                  <Link>PW App Learning</Link>
                  <Link>PW Offline Payments (Fin-Z)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
