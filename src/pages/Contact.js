import React from "react";

import uImage from "../images/u-crop.png";
import aImage from "../images/a-crop.png";
import nImage from "../images/navy-crop.png";

function Contact() {
  return (
    <div className="background mx-auto text-center">
      <div id="about">
        <h2>about me</h2>
        <section className="section-container mx-auto">
          <p className="section-text">
            &emsp;I am a full stack developer with a lifelong passion for
            programming and problem-solving. Originally born and raised in Iowa,
            I am a Navy veteran who has spent a large portion of my life on
            nuclear submarines.
          </p>
          <p className="section-text">
            &emsp;I have extensive experience in leadership, problem-solving,
            consulting, auditing, process improvement, and adult learning.
          </p>
        </section>
        <h2>education</h2>
        <section className="section-container mx-auto">
          <img
            src={uImage}
            className="ed mx-auto"
            alt="university of utah logo"
          />
          <div className="ed-text-container">
            <h3>University of Utah</h3>
            <h4>Full Stack Flex Certificate</h4>
            <p className="ed-text">
              html, css, javascript, bootstrap, jQuery, node.js, mongoDB,
              express, react
            </p>
          </div>
        </section>
        <section className="section-container mx-auto">
          <img
            src={aImage}
            className="ed mx-auto"
            alt="auburn university logo"
          />
          <div className="ed-text-container">
            <h3>Auburn University</h3>
            <h4>B.S Applied Mathematics</h4>
            <p className="ed-text">
              mathematical modeling, system optimization, cryptography, algorithms
            </p>
          </div>
        </section>
        <section className="section-container mx-auto">
          <img
            src={nImage}
            className="ed mx-auto"
            alt="united states navy seal"
          />
          <div className="ed-text-container">
            <h3>United States Navy</h3>
            <h4>Nuclear Power School</h4>
            <p className="ed-text">
            Nuclear, Mechanical, Electrical, and Chemical theory, design,
            troubleshooting, operation, and leadership
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
