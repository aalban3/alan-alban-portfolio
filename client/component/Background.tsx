import React from "react";
import Particles from "react-tsparticles";
import options from "../particle-options";

const Background = () => {
  return (
    <div className="particles">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};
export default Background;
