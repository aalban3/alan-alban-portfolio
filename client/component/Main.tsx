import React from "react";
import Button from "@material-ui/core/Button";
export default function Main() {
  return (
    <div>
      <div className="home-title">
        <h1>Hello world, I'm Alan!</h1>
        <Button variant="contained" color="primary">
          <a href="https://www.linkedin.com/in/alan-alban/" target="_blank">
            Let's Connect
          </a>
        </Button>
        <Button variant="contained" color="primary">
          <a
            href="https://drive.google.com/file/d/1UrYik44IVboNyf_bP5U1OJAhyuiNxsiR/view"
            target="_blank"
          >
            My Resume
          </a>
        </Button>
      </div>
    </div>
  );
}
