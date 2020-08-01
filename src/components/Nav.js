import React, { useState } from "react";

import Content from "./Content";

function Nav() {
  const [contentSelection, setContentSelection] = useState();

  return (
    <div className="background mx-auto text-center">
      <section className="section-container mx-auto text-center">
        <nav className="row mx-auto text-center">
          <button
            className="button mx-auto"
            id="about-btn"
            onClick={(e) => setContentSelection(e.target.id)}
          >
            about me
          </button>
          <button
            className="button mx-auto"
            id="projects-btn"
            onClick={(e) => setContentSelection(e.target.id)}
          >
            projects
          </button>
          <button
            className="button mx-auto"
            id="contact-btn"
            onClick={(e) => setContentSelection(e.target.id)}
          >
            contact
          </button>
        </nav>
      </section>
      <Content contentSelection={contentSelection === undefined ? "about-btn" : contentSelection} />
    </div>
  );
}

export default Nav;
