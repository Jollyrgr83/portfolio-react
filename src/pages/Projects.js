import React from "react";

import Project from "../components/Project";

function Projects() {
  return (
  <div id="projects">
    <h2>projects</h2>
    <section className="section-container mx-auto text-center">
      <p className="section-text">
        Here are a few of my favorite projects. Click the button to see a
        screenshot, details, and links.
      </p>
      <select id="project-select"></select>
    </section>
    <Project projectID="Skyvi3w" />
  </div>
  );
}

export default Projects;
