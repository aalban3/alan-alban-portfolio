import React from "react";
import { animateScroll as scroll } from "react-scroll";
import NavDrawer from "./NavDrawer";
export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src="https://www.pngkey.com/png/full/528-5281777_back-to-top-voltron-green-lion-symbol.png"
          className="nav-logo"
          alt="Logo"
          onClick={scrollToTop}
        />
        <NavDrawer />
      </div>
    </nav>
  );
}
