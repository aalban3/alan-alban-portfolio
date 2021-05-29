import React from "react";
import LinkButton from "./LinkButton";
export default function Main() {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Hello World, I&apos;m Alan!</h1>
        <LinkButton
          source="https://www.linkedin.com/in/alan-alban/"
          label="Let's Connect"
        />
      </div>
    </div>
  );
}
