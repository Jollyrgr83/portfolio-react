import React from "react";
import ProjectLibrary from "../util/ProjectLibrary";

function Project({ projectID }) {
  return (
    <div id="project-container">
      <section className="section-container mx-auto text-center">
        <img
          id="project-image"
          className="project-img"
          src={ProjectLibrary[projectID].src}
          alt={ProjectLibrary[projectID].alt}
        />
        <div className="link-container mx-auto text-center">
          <a
            id="project-live-link"
            className="project-link"
            href={ProjectLibrary[projectID].liveLink}
          >
            {projectID} live page
          </a>
        </div>
        <div className="link-container mx-auto text-center">
          <a
            id="project-repo-link"
            className="project-link"
            href={ProjectLibrary[projectID].repoLink}
          >
            {projectID} repository
          </a>
        </div>
        <p
          id="project-text"
          className="project-text"
        >
          {ProjectLibrary[projectID].projectText}
        </p>
      </section>
    </div>
  );
}

export default Project;
