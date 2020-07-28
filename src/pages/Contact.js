import React from "react";

function Contact() {
  return (
    <div id="contact" className="background mx-auto text-center">
      <h2>links and resume</h2>
      <section className="section-container mx-auto">
        <div className="row mx-auto text-center">
          <a
            className="square linkedin mx-auto"
            href="https://www.linkedin.com/in/jason-mangin-21032065"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin mx-3"></i>
          </a>
          <a
            className="square github mx-auto"
            href="https://github.com/Jollyrgr83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mx-3"></i>
          </a>
          <a
            className="square resume mx-auto"
            href="./assets/images/jason-mangin-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-file-pdf mx-3"></i>
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
          <label for="nameInput">name</label>
          <input
            type="name"
            id="nameInput"
            placeholder="your name here"
            name="name"
          />
          <label for="emailInput">email address</label>
          <input
            type="email"
            id="emailInput"
            placeholder="name@example.com"
            name="_replyto"
          />
          <label for="messageInput">message</label>
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
