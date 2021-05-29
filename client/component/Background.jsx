import React from "react";
import Particles from "react-particles-js";

const Background = ({ options }) => {
  return (
    <div className="particles">
      <Particles id="tsparticles" params={options} />
    </div>
  );
};
export default Background;
