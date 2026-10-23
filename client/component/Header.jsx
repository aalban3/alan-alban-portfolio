import React from "react";
import { Link } from "react-router-dom";
import { EMAIL } from "../data";

// The home page shows section links; subpages show a link back to the work grid.
const Header = ({ home }) => {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="logo">
          alan alban<span className="accent-orange">.</span>
        </Link>
        {home ? (
          <>
            <nav className="site-nav">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#writing">Writing</a>
            </nav>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Get in Touch
            </a>
          </>
        ) : (
          <Link to="/#work" className="back-link">
            ← All Work
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
