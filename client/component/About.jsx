import React from "react";
import LinkButton from "./LinkButton";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-description">
          <section>
            <p>Hello, I&apos;m Alan.</p>
            <p>
              I&apos;m a software engineer based in Brooklyn, NY. Coding has
              been a passion of mine ever since I was introduced to Pascal as a
              young boy in Ecuador. After many years in other areas of the
              software industry, I decided to pursue my passion for Software
              Development and enrolled in a full-time immersive program at
              FullStack Academy.
            </p>
            <p>
              In addition to my bootcamp experience, I have three years of
              experience working in an agile developer team, building and
              deploying applications. I also have about four years of experience
              as a Sales Engineer working in the fields of Automation, Cloud and
              SAAS. I&apos;m looking to leverage my industry experience, my
              engineering background and my love for coding to solve problems in
              a new way now, as a full-stack software developer.
            </p>
          </section>
          <LinkButton
            source="https://drive.google.com/file/d/1LzvQpRysHXOlLvtjsKYMqk_Kg-myghU6/view"
            label="My Resume"
          />
        </div>
        <img
          className="about-image"
          src="https://drive.google.com/uc?export=view&id=1A2VcJkiDLN5txoXrHnJGNEuAB8MgdfNd"
        />
      </div>
    </div>
  );
}
