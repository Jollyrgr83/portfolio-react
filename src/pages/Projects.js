import React from "react";

import Project from "../components/Project";
import ProjectLibrary from "../util/ProjectLibrary";

const projectList = Object.keys(ProjectLibrary);

function Projects() {
  return (
  <div id="projects" className="background mx-auto text-center">
    <h2>projects</h2>
    <section className="section-container mx-auto text-center">
      <p className="section-text">
        Here are a few of my favorite projects. Click the button to see a
        screenshot, details, and links.
      </p>
      <select id="project-select">
        {projectList.map(x => {
          return (
            <option id={x}>{x}</option>
          )
        })}
      </select>
    </section>
    <Project projectID="Skyvi3w" />
  </div>
  );
}

export default Projects;
