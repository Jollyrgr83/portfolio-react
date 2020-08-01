import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import resume from "../images/jason-mangin-resume.pdf";

function Contact() {
  return (
    <div>
      <h2>links and resume</h2>
      <section className="section-container mx-auto">
        <div className="row mx-auto text-center">
          <a
            className="square linkedin mx-auto"
            href="https://www.linkedin.com/in/jason-mangin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="square github mx-auto"
            href="https://github.com/Jollyrgr83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="square resume mx-auto"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </section>
      <h2>contact me at</h2>
      <section className="section-container mx-auto">
        <div className="contact-info mx-auto text-center">
          <a
            href="mailto:jasongmangin@gmail.com"
            className="mx-auto"
            style={{ color: "navy" }}
          >
            jasongmangin@gmail.com
          </a>
        </div>
        <p className="contact-info mx-auto">843.437.5934</p>
      </section>
      <h2>or send a message</h2>
      <section className="section-container mx-auto">
        <form action="https://formspree.io/mvobedaz" method="POST">
          <label htmlFor="nameInput">name</label>
          <input
            type="name"
            id="nameInput"
            placeholder="your name here"
            name="name"
          />
          <label htmlFor="emailInput">email address</label>
          <input
            type="email"
            id="emailInput"
            placeholder="name@example.com"
            name="_replyto"
          />
          <label htmlFor="messageInput">message</label>
          <textarea id="messageInput" rows="9" name="message"></textarea>
          <div className="text-right">
            <button type="submit" className="button">
              submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
