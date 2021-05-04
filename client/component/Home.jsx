import React, { useEffect } from "react";
import Background from "./Background";
import Main from "./Main";
export default function Home() {
  return (
    <div className="home-container">
      <Main />
      <Background />
    </div>
  );
}
