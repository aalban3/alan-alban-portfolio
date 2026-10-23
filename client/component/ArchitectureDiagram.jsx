import React, { useEffect, useRef, useState } from "react";

const NODE_W = 144;
const NODE_H = 58;
const CORNER = 6;

// Polyline through the waypoints with rounded corners.
const pathFor = (points) => {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    const next = points[i + 1];
    if (!next) {
      d += ` L${x} ${y}`;
      break;
    }
    const [px, py] = points[i - 1];
    const r1 = Math.min(CORNER, Math.hypot(x - px, y - py) / 2);
    const r2 = Math.min(CORNER, Math.hypot(next[0] - x, next[1] - y) / 2);
    const inX = x - Math.sign(x - px) * r1;
    const inY = y - Math.sign(y - py) * r1;
    const outX = x + Math.sign(next[0] - x) * r2;
    const outY = y + Math.sign(next[1] - y) * r2;
    d += ` L${inX} ${inY} Q${x} ${y} ${outX} ${outY}`;
  }
  return d;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Scales the fixed-size canvas to fit its container, clamped to [min, max].
// Below `min` the canvas stays readable and the frame scrolls horizontally instead.
const useFitScale = (width, min, max) => {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  const [pans, setPans] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      const fit = el.clientWidth / width;
      // Bail out when nothing changed so setting this element's height can't re-trigger the observer.
      setScale((s) => {
        const next = Math.max(min, Math.min(max, fit));
        return Math.abs(next - s) < 0.001 ? s : next;
      });
      setPans(fit < min);
    };
    update();
    if (typeof ResizeObserver === "undefined") return undefined;
    // Defer to the next frame: resizing inside the observer callback causes Chrome's
    // "ResizeObserver loop completed with undelivered notifications" error.
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    });
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [width, min, max]);
  return [ref, scale, pans];
};

const Group = ({ g }) => {
  if (g.kind === "label") {
    return (
      <span className="arch-group__label arch-group__label--free" style={{ left: g.x, top: g.y }}>
        {g.label}
      </span>
    );
  }
  return (
    <div
      className={`arch-group arch-group--${g.kind}`}
      style={{ left: g.x, top: g.y, width: g.width, height: g.height }}
    >
      <span className={`arch-group__label arch-group__label--${g.pos}`}>
        {g.kind === "cloud" && <span className="msym">cloud</span>}
        {g.label}
      </span>
    </div>
  );
};

// `preview` renders a static, non-interactive copy (e.g. inside a link card on the home page).
const ArchitectureDiagram = ({
  study,
  step = 0,
  node = null,
  onNode,
  hover = null,
  onHover: setHover,
  preview = false,
}) => {
  // The interactive diagram never shrinks below 75% (labels stay legible) and grows up to 115%;
  // the decorative preview just fits its card.
  const [frameRef, scale, pans] = useFitScale(study.canvas.width, preview ? 0 : 0.75, preview ? 1 : 1.15);
  const reduceMotion = prefersReducedMotion();

  const { nodes, edges, canvas } = study;
  const focus = hover || node;
  const active = new Set(study.steps[step].ids);
  const touches = (e, id) => e.from === id || e.to === id;
  const edgeOn = (e) => (focus ? touches(e, focus) : active.has(e.from) && active.has(e.to));
  const nodeOn = (id) =>
    focus ? id === focus || edges.some((e) => touches(e, focus) && touches(e, id)) : active.has(id);

  return (
    <div className={preview ? "arch-frame arch-frame--preview" : "arch-frame"} aria-hidden={preview || undefined}>
      {/* Measured inside the frame's padding, so the scale matches the space the canvas really has. */}
      <div ref={frameRef} className="arch-scroll" style={{ height: canvas.height * scale }}>
        <div
          className="arch-canvas"
          style={{
            width: canvas.width,
            height: canvas.height,
            transform: `scale(${scale})`,
            // Reserve the scaled width so the scroll area can pan to the far edge.
            marginRight: canvas.width * (scale - 1),
          }}
        >
          {study.groups.map((g) => (
            <Group key={g.label} g={g} />
          ))}

          <svg className="arch-wires" width={canvas.width} height={canvas.height} aria-hidden="true">
            <defs>
              <marker
                id="arch-arrow"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 z" className="arch-arrow--on" />
              </marker>
              <marker
                id="arch-arrow-tel"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 z" className="arch-arrow--tel" />
              </marker>
              <marker
                id="arch-arrow-off"
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 z" className="arch-arrow--off" />
              </marker>
              <filter id="arch-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
            {edges.map((e, i) => {
              const d = pathFor(e.points);
              const on = edgeOn(e);
              const tel = e.kind === "telemetry";
              const cls = ["arch-wire", on && "is-on", tel && "arch-wire--telemetry"].filter(Boolean).join(" ");
              const marker = on ? (tel ? "arch-arrow-tel" : "arch-arrow") : "arch-arrow-off";
              return (
                <g key={e.from + e.to}>
                  <path d={d} className={cls} markerEnd={`url(#${marker})`} />
                  {on &&
                    !reduceMotion &&
                    [0, 1].map((k) => {
                      // Negative offsets start packets mid-path instead of parked at (0,0).
                      const begin = `-${((i * 0.17 + k * 0.9) % 1.8).toFixed(2)}s`;
                      return (
                        // Keyed by step/focus so packets restart when the highlight changes.
                        <g
                          key={`${k}-${step}-${focus || ""}`}
                          className={tel ? "arch-packet arch-packet--tel" : "arch-packet"}
                        >
                          <circle r="5" className="arch-packet__glow" filter="url(#arch-glow)">
                            <animateMotion dur="1.8s" repeatCount="indefinite" path={d} begin={begin} />
                          </circle>
                          <circle r="2.5" className="arch-packet__core">
                            <animateMotion dur="1.8s" repeatCount="indefinite" path={d} begin={begin} />
                          </circle>
                        </g>
                      );
                    })}
                </g>
              );
            })}
          </svg>

          {Object.entries(nodes).map(([id, n]) => {
            const on = nodeOn(id);
            const picked = node === id;
            const cls = ["arch-node", on && "is-on", picked && "is-picked"].filter(Boolean).join(" ");
            const body = (
              <>
                <span className="arch-node__icon msym" style={{ background: n.cat }}>
                  {n.icon}
                </span>
                <span className="arch-node__text">
                  <span className="arch-node__label">{n.label}</span>
                  <span className="arch-node__svc">{n.svc}</span>
                </span>
              </>
            );
            if (preview) {
              return (
                <span key={id} className={cls} style={{ left: n.x, top: n.y, width: NODE_W, height: NODE_H }}>
                  {body}
                </span>
              );
            }
            return (
              <button
                key={id}
                type="button"
                className={cls}
                style={{ left: n.x, top: n.y, width: NODE_W, height: NODE_H }}
                onClick={() => onNode(node === id ? null : id)}
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(id)}
                onBlur={() => setHover(null)}
                aria-pressed={picked}
              >
                {body}
              </button>
            );
          })}
        </div>
      </div>
      {pans && <div className="arch-pan-hint">Swipe to see the whole diagram →</div>}
    </div>
  );
};

// Detail card under the diagram: the hovered/selected service and what it connects to.
export const DiagramDetail = ({ study, id }) => {
  const n = id && study.nodes[id];
  if (!n) {
    return (
      <div className="card arch-detail">
        <div className="arch-detail__text">
          <span className="arch-detail__title">Explore the diagram</span>
          <span>Hover or tap any service to trace its connections.</span>
        </div>
      </div>
    );
  }
  const name = (x) => x.full || x.label;
  const links = study.edges
    .filter((e) => e.from === id || e.to === id)
    .map((e) => name(study.nodes[e.from === id ? e.to : e.from]));
  return (
    <div className="card arch-detail">
      <span className="arch-detail__icon msym" style={{ background: n.cat }}>
        {n.icon}
      </span>
      <div className="arch-detail__text">
        <span className="arch-detail__head">
          <span className="arch-detail__title">{name(n)}</span>
          <span className="arch-detail__svc">{n.svc}</span>
        </span>
        <span>{n.note}</span>
        <span className="arch-detail__links">Connects to: {links.join(", ")}</span>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
