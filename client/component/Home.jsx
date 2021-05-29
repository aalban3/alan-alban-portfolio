import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Background from "./Background";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import options from "../particle-options";
import Articles from "./Articles";

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <Nav />
        <Main />
        <Background options={options} />
      </div>
      <About />
      <Projects />
      <Skills />
      <Articles />
    </div>
  );
}
