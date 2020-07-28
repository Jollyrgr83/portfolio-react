import React from "react";

import bioImage from "../images/bio2.jpg";

function Header() {
  return (
    <div className="background mx-auto text-center">
      <img
        src={bioImage}
        className="logo mx-auto"
        alt="Jason Mangin kayaking with his kids"
      />
      <h1 className="mx-auto">jason mangin</h1>
      <section className="section-container mx-auto text-center">
        <nav className="row mx-auto text-center">
          <button className="button mx-auto" id="about-btn">
            about me
          </button>
          <button className="button mx-auto" id="projects-btn">
            projects
          </button>
          <button className="button mx-auto" id="contact-btn">
            contact
          </button>
        </nav>
      </section>
    </div>
  );
}

export default Header;