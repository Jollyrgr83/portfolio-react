import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Content({ contentSelection }) {
  switch (contentSelection) {
    case "projects-btn":
      return (
        <Projects />
      );
    case "contact-btn":
      return (
        <Contact />
      );
    default:
      return (
        <About />
      );
  }
}
  
export default Content;
