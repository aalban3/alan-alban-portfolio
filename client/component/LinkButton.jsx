import React from "react";
import Button from "@material-ui/core/Button";

export default function LinkButton({ source, label }) {
  if (label === "image") {
    return (
      <Button variant="contained" className="app-store-btn-bg">
        <a href={source} target="_blank" rel="noreferrer">
          <img
            src="https://aa-portfolio-static.s3.amazonaws.com/app-store.png"
            className="app-store-logo"
          />
        </a>
      </Button>
    );
  }
  return (
    <Button variant="contained" color="primary">
      <a href={source} target="_blank" rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}
