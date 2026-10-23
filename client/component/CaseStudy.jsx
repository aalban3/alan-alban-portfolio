import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { EMAIL } from "../data";

const NODE_W = 140;
const NODE_H = 52;

const ArchitectureDiagram = ({ nodes, edges, active, selected, onSelect }) => (
  <svg className="diagram" viewBox="0 0 540 400" role="img" aria-label="Architecture diagram">
    {edges.map(([a, b]) => {
      const on = active.has(a) && active.has(b);
      return (
        <line
          key={a + b}
          x1={nodes[a].x + NODE_W / 2}
          y1={nodes[a].y + NODE_H / 2}
          x2={nodes[b].x + NODE_W / 2}
          y2={nodes[b].y + NODE_H / 2}
          className={on ? "diagram__edge diagram__edge--on" : "diagram__edge"}
        />
      );
    })}
    {Object.entries(nodes).map(([id, n]) => {
      const cls = ["diagram__node", active.has(id) && "is-active", selected === id && "is-selected"]
        .filter(Boolean)
        .join(" ");
      return (
        <g
          key={id}
          className={cls}
          transform={`translate(${n.x} ${n.y})`}
          onClick={() => onSelect(id)}
          tabIndex={0}
          role="button"
          aria-label={n.label}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(id)}
        >
          <rect width={NODE_W} height={NODE_H} rx="10" />
          <text x="12" y="23" className="diagram__label">
            {n.label}
          </text>
          <text x="12" y="39" className="diagram__tech">
            {n.tech}
          </text>
        </g>
      );
    })}
  </svg>
);

const CaseStudy = ({ study }) => {
  const [step, setStep] = useState(0);
  const [node, setNode] = useState(null);

  useEffect(() => {
    document.title = `${study.title} | Alan Alban`;
    window.scrollTo(0, 0);
  }, [study]);

  const active = new Set(study.steps[step].ids);
  const selected = node ? study.nodes[node] : { label: "Tip", note: "Click any box in the diagram to see what it does." };

  return (
    <div className="page">
      <Header />

      <main className="container">
        {study.draft && (
          <div className="draft-banner">
            Draft: the services, diagram and copy below are placeholders to show the format.
          </div>
        )}

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
          <div className="cs-steps">
            <div className="eyebrow">ARCHITECTURE · CLICK A STEP</div>
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

          <div className="cs-diagram">
            <div className="card cs-diagram__frame">
              <ArchitectureDiagram
                nodes={study.nodes}
                edges={study.edges}
                active={active}
                selected={node}
                onSelect={setNode}
              />
            </div>
            <div className="card cs-diagram__note">
              <span className="accent-orange cs-diagram__note-title">{selected.label}</span>
              <span>{selected.note}</span>
            </div>
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
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default CaseStudy;
