import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <p>{new Date().getFullYear()} Alan Alban</p>
      <section className="contact-links">
        <a
          href="https://www.facebook.com/aalban3"
          target="_blank"
          rel="noreferrer"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://www.instagram.com/alandoingthings"
          target="_blank"
          rel="noreferrer"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://www.linkedin.com/in/alan-alban/"
          target="_blank"
          rel="noreferrer"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://github.com/aalban3"
          target="_blank"
          rel="noreferrer"
          className="fa fa-github"
        ></a>
      </section>
    </div>
  );
}
