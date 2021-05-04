import React from "react";
import Particles from "react-particles-js";
import options from "../particle-options";

const Background = () => {
  return (
    <div className="particles">
      <Particles id="tsparticles" params={options} />
    </div>
  );
};
export default Background;
