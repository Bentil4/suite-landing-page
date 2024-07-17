import React from "react";
import logo from "../assets/logo.svg";
import "./home.css";
import Man_image from "../assets/image-jeremy-large@2x.png";
import Pattern_curved2 from "../assets/pattern-curved-line-2.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Instagram from "../assets/icon-instagram.svg";
import BackgroundOne from "../assets/image-hero-portrait.png";
import BackgroundTwo from "../assets/image-hero-portrait@2x.png";
import Curved_line from "../assets/pattern-curved-line-1.svg";
import BackgroundSma from "../assets/image-hero-landscape.png";
import BackgroundBig from "../assets/image-hero-landscape@2x.png";

function Home() {
  return (
    <div className="container">
      {/* Nav Bar */}
      <nav>
        <div className="nav-bar">
          <img src={logo} alt="" />
          <button className="nav-btn">Request Beta Access</button>
        </div>
      </nav>

      {/* Main*/}

      <main>
        <div className="sup-sub">
          <div className="sup-sub-left">
            <div className="curved-line">
              <img src={Curved_line} alt="" />
            </div>
            <p className="p-one">
              A <b>super solution</b> for your <b>business</b>.
            </p>
            <p className="p-two">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </p>
            <button className="sub-btn">Request Beta Access</button>
          </div>
          <div className="sup-sub-middle">
            <div className="sup-mid">
              <img src={BackgroundOne} alt="" className="bg-one" />
              {/* <img src={BackgroundSma} alt="" className="bg-small" /> */}
            </div>
          </div>
          <div className="sup-sub-right">
            <div className="top">
              <h3>2K+</h3>
              <p>COMPANIES</p>
            </div>
            <div className="middle">
              <h3>8</h3>
              <p>LANGUAGES</p>
            </div>
            <div className="down">
              <h3>1.2M</h3>
              <p>LEADS</p>
            </div>
          </div>
        </div>
      </main>

      {/* Section */}
      <section>
        <div className="section">
          <div className="left-sec">
            <img src={Man_image} alt="" className="man" />
          </div>
          <div className="middle-sec">
            <img src={Pattern_curved2} alt="" />
          </div>
          <div className="right-sec">
            <div className="right-sec-1">
              <p>
                It just <b>works</b>.
              </p>
            </div>
            <div className="right-sec-2">
              “I really like how it is an all-in-one solution that handle many
              of the tasks that you would normally need separate tools to do the
              same job. This thing is a miracle worker.”
            </div>
            <div className="right-sec-3">
              <h5>JEREMY ROBINSON</h5>
              <p>CMO, FYLO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-bar">
          <div className="footer-1">
            <img src={logo} alt="" />
          </div>
          <div className="footer-2">Copyright - Suite</div>
          <div className="footer-3">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
