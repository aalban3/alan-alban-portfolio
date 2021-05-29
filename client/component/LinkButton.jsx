import React from "react";
import Button from "@material-ui/core/Button";

export default function LinkButton({ source, label }) {
  return (
    <Button variant="contained" color="primary">
      <a href={source} target="_blank" rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}
