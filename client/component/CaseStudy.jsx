import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ArchitectureDiagram, { DiagramDetail } from "./ArchitectureDiagram";
import { LINKEDIN_URL } from "../data";

const CaseStudy = ({ study }) => {
  const [step, setStep] = useState(0);
  const [node, setNode] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    document.title = `${study.title} | Alan Alban`;
    window.scrollTo(0, 0);
  }, [study]);

  return (
    <div className="page">
      <Header />

      <main className="container">
        {study.draft && <div className="draft-banner">Draft: some sections below are still placeholders.</div>}

        <section className="cs-hero">
          <div className="eyebrow accent-orange">{study.eyebrow}</div>
          <h1 className="cs-hero__title">{study.title}</h1>
          <p className="lede">{study.lede}</p>
        </section>

        <div className="facts">
          {study.facts.map((f) => (
            <div key={f.label} className="facts__cell">
              <span className="muted-sm">{f.label}</span>
              <span className="facts__value">{f.value}</span>
            </div>
          ))}
        </div>

        <section className="cs-arch">
          <div className="cs-steps-col">
            <div className="eyebrow">ARCHITECTURE · PICK A STEP</div>
            {/* A column of expanding cards on desktop; a swipeable row of tabs on small screens. */}
            <div className="cs-steps">
              {study.steps.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  className={i === step ? "cs-step is-active" : "cs-step"}
                  onClick={() => {
                    setStep(i);
                    setNode(null);
                  }}
                  aria-expanded={i === step}
                >
                  <span className="cs-step__head">
                    <span className="cs-step__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cs-step__title">{s.title}</span>
                  </span>
                  {i === step && <span className="cs-step__body">{s.body}</span>}
                </button>
              ))}
            </div>
            <p className="cs-step-body--mobile">{study.steps[step].body}</p>
          </div>

          <div className="cs-diagram">
            <ArchitectureDiagram
              study={study}
              step={step}
              node={node}
              onNode={setNode}
              hover={hover}
              onHover={setHover}
            />
            <DiagramDetail study={study} id={hover || node} />
          </div>
        </section>

        <section className="cs-decisions">
          <h2 className="h2">Decisions and tradeoffs</h2>
          <div className="cs-decisions__grid">
            {study.decisions.map((d) => (
              <div key={d.title} className="decision">
                <span className="decision__title">{d.title}</span>
                <span className="decision__body">{d.body}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-next">
          <div className="cs-next__copy">
            <span className="eyebrow">MORE WORK</span>
            <Link to="/#work" className="cs-next__link">
              See all selected work →
            </Link>
          </div>
          <a href={LINKEDIN_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default CaseStudy;
