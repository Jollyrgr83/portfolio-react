import React, { useState } from "react";

import Project from "../components/Project";
import ProjectLibrary from "../util/ProjectLibrary";

const projectList = Object.keys(ProjectLibrary);

function Projects() {
  const [projectSelection, setProjectSelection] = useState();

  return (
  <div id="projects" className="background mx-auto text-center">
    <h2>projects</h2>
    <section className="section-container mx-auto text-center">
      <p className="section-text">
        Here are a few of my favorite projects. Click the button to see a
        screenshot, details, and links.
      </p>
      <select id="project-select" onChange={e => setProjectSelection(e.target.value)}>
        {projectList.map(x => {
          return (
            <option id={x} key={x}>{x}</option>
          )
        })}
      </select>
    </section>
    <Project projectID={projectSelection === undefined ? "Skyvi3w" : projectSelection} />
  </div>
  );
}

export default Projects;
