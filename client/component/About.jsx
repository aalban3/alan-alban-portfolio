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
              FullStack Academy in 2021.
            </p>
            <p>
              Since then, I have worked as a full-stack developer at Strategic Financial Solutions, 
              building cutting edge financial tools using React and .NET Core. 
              I also have three years of experience working in an agile developer team, building and
              deploying applications in the financial sector.
            </p>
          </section>
          <LinkButton
            source="https://drive.google.com/file/d/1wjr4lA_lbWmCuKhXEH2J8Qn4gy1OViMA/view"
            label="My Resume"
          />
        </div>
        <img
          className="about-image"
          src="https://aa-portfolio-static.s3.amazonaws.com/aa_pro_shot.png"
        />
      </div>
    </div>
  );
}
