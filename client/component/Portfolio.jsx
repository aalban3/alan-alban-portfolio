import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, work, timeline, projects, articles } from "../data";
import headshot from "../assets/alan.jpg";

const WorkCard = ({ w }) => {
  const body = (
    <>
      <div className="work-card__meta">
        <span className="accent-orange">{w.company}</span>
        <span className="muted">{w.years}</span>
      </div>
      <div className="work-card__title">{w.title}</div>
      <div className="work-card__desc">{w.desc}</div>
      <div className="chips">
        {w.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      {w.caseStudy && <span className="work-card__cta">Read the case study →</span>}
    </>
  );
  return w.caseStudy ? (
    <Link to={w.caseStudy} className="card work-card work-card--link">
      {body}
    </Link>
  ) : (
    <div className="card work-card">{body}</div>
  );
};

const Portfolio = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Alan Alban | Software Engineer";
  }, []);

  // Arriving from a subpage via /#section: scroll once the section exists.
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="page">
      <Header home />

      <main id="top" className="container">
        <section className="hero">
          <div className="hero__copy">
            <div className="hero__status">
              <span className="status-dot" />
              Software Engineer · Atlanta, GA
            </div>
            <h1 className="hero__title">
              Hello world,
              <br />
              I'm <span className="accent-blue">Alan</span>.
            </h1>
            <p className="lede">
              I build backend systems that hold up under traffic: .NET microservices on AWS, caching layers, and the
              APIs behind marketplaces and financial tools. I first learned to code in Pascal, in high school in
              Ecuador.
            </p>
            <div className="btn-row">
              <a href="#work" className="btn btn--light">
                View Work
              </a>
              <a href={LINKEDIN_URL} className="btn btn--outline">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="hero__photo">
            <img src={headshot} alt="Alan Alban" />
            <div className="hero__badge">
              <span className="muted-sm">Currently</span>
              <span>Co-Founder, Dashdoc · MS CS at Georgia Tech</span>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section__head">
            <h2 className="h2">Selected work</h2>
            <span className="muted">Professional, 2016 to now</span>
          </div>
          <div className="work-grid">
            {work.map((w) => (
              <WorkCard key={w.company} w={w} />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="h2">From circuits to services</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.org + t.role} className="timeline__item">
                <span className="timeline__year">{t.short}</span>
                <span className="timeline__org">{t.org}</span>
                <span className="timeline__role">{t.role}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section section--split">
          <div className="list-col">
            <h2 className="h3">Earlier projects</h2>
            {projects.map((p) => (
              <div key={p.name} className="list-item">
                <div className="list-item__head">
                  <span className="list-item__title">{p.name}</span>
                  <a href={p.gh} className="small-link">
                    GitHub ↗
                  </a>
                </div>
                <span className="list-item__desc">{p.desc}</span>
              </div>
            ))}
          </div>
          <div id="writing" className="list-col">
            <h2 className="h3">Writing</h2>
            {articles.map((a) => (
              <a key={a.url} href={a.url} className="list-item list-item--link">
                <span className="list-item__title">{a.title}</span>
                <span className="list-item__desc">{a.sub} · Medium ↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__contact">
              <span className="eyebrow">CONTACT</span>
              <div className="site-footer__title">Let's build something.</div>
              <a href={`mailto:${EMAIL}`} className="site-footer__email">
                {EMAIL}
              </a>
            </div>
            <div className="site-footer__links">
              <a href={GITHUB_URL}>GitHub ↗</a>
              <a href={LINKEDIN_URL}>LinkedIn ↗</a>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Alan Alban</span>
            <span>Atlanta, GA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
