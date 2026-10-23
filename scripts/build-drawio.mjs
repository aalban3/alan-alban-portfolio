// Regenerates docs/dashdoc-architecture-high-level.drawio from the case study data,
// so the public diagram on the site and the draw.io file never drift apart.
// Usage: node scripts/build-drawio.mjs
import { readFileSync, writeFileSync, mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { pathToFileURL } from "url";

const root = new URL("..", import.meta.url);
const src = readFileSync(new URL("client/caseStudies/dashdoc.js", root), "utf8");
const tmp = join(mkdtempSync(join(tmpdir(), "drawio-")), "data.mjs");
writeFileSync(tmp, src);
const { default: s } = await import(pathToFileURL(tmp).href);

const K = 1.5; // canvas px → draw.io px
const OX = 40, OY = 90, W = 144 * K, H = 58 * K;
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const X = (x) => Math.round(OX + x * K), Y = (y) => Math.round(OY + y * K);

// draw.io AWS 2021 (mxgraph.aws4) shapes for each node.
const icon = {
  user: "shape=mxgraph.aws4.user;fillColor=#5F6368;strokeColor=none;",
  grafana: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch_2;fillColor=#F46800;strokeColor=#ffffff;",
  alb: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_load_balancing;fillColor=#8C4FFF;strokeColor=#ffffff;",
  cognito: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cognito;fillColor=#DD344C;strokeColor=#ffffff;",
  api: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.fargate;fillColor=#ED7100;strokeColor=#ffffff;",
  bff: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.fargate;fillColor=#ED7100;strokeColor=#ffffff;",
  docs: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.fargate;fillColor=#ED7100;strokeColor=#ffffff;",
  bedrock: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.bedrock;fillColor=#01A88D;strokeColor=#ffffff;",
  apidb: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.rds;fillColor=#C925D1;strokeColor=#ffffff;",
  docdb: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.rds;fillColor=#C925D1;strokeColor=#ffffff;",
  s3: "shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.s3;fillColor=#7AA116;strokeColor=#ffffff;",
};
const group = {
  cloud: "shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;fontColor=#232F3E;",
  vpc: "shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;fontColor=#8C4FFF;",
  public: "shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_public_subnet;strokeColor=#7AA116;fillColor=#F2F6E8;fontColor=#248814;",
  compute: "shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_private_subnet;strokeColor=#00A4A6;fillColor=#E6F6F7;fontColor=#147EBA;",
  data: "shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_private_subnet;strokeColor=#00A4A6;fillColor=#E6F6F7;fontColor=#147EBA;",
};
const groupBase = "points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=1;container=0;verticalAlign=top;align=left;spacingLeft=30;dashed=0;";
const sentence = (t) => t.charAt(0) + t.slice(1).toLowerCase();

const cells = [
  `<mxCell id="title" value="Dashdoc · High-level production architecture" style="text;html=1;fontSize=20;fontStyle=1;align=left;" vertex="1" parent="1"><mxGeometry x="${OX}" y="20" width="700" height="30" as="geometry"/></mxCell>`,
  `<mxCell id="sub" value="Public overview generated from the portfolio case study. Detailed diagrams live in Dashdoc.Infra." style="text;html=1;fontSize=12;fontColor=#666666;align=left;" vertex="1" parent="1"><mxGeometry x="${OX}" y="50" width="800" height="20" as="geometry"/></mxCell>`,
];
for (const g of s.groups) {
  if (g.kind === "label") {
    cells.push(`<mxCell id="g-${g.kind}" value="${esc(sentence(g.label))}" style="text;html=1;fontSize=12;fontStyle=1;fontColor=#01A88D;align=left;" vertex="1" parent="1"><mxGeometry x="${X(g.x)}" y="${Y(g.y)}" width="200" height="20" as="geometry"/></mxCell>`);
    continue;
  }
  cells.push(`<mxCell id="g-${g.kind}" value="${esc(sentence(g.label))}" style="${groupBase}${group[g.kind]}" vertex="1" parent="1"><mxGeometry x="${X(g.x)}" y="${Y(g.y)}" width="${Math.round(g.width * K)}" height="${Math.round(g.height * K)}" as="geometry"/></mxCell>`);
}
for (const [id, n] of Object.entries(s.nodes)) {
  const label = `<b>${esc(n.full || n.label)}</b><br><font color="#666666">${esc(n.svc)}</font>`;
  const sz = 48;
  cells.push(`<mxCell id="${id}" value="${esc(label)}" tooltip="${esc(n.note)}" style="sketch=0;outlineConnect=0;html=1;whiteSpace=wrap;fontSize=12;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=6;${icon[id]}" vertex="1" parent="1"><mxGeometry x="${X(n.x) + 8}" y="${Y(n.y) + (H - sz) / 2}" width="${sz}" height="${sz}" as="geometry"/></mxCell>`);
}
s.edges.forEach((e, i) => {
  const tel = e.kind === "telemetry";
  const style = tel
    ? "edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;endArrow=block;endFill=1;dashed=1;dashPattern=2 4;strokeColor=#F46800;fontColor=#F46800;"
    : "edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;endArrow=block;endFill=1;strokeColor=#147EBA;";
  cells.push(`<mxCell id="e${i}" value="${tel ? "OTel traces" : ""}" style="${style}" edge="1" parent="1" source="${e.from}" target="${e.to}"><mxGeometry relative="1" as="geometry"/></mxCell>`);
});

const out = new URL("docs/dashdoc-architecture-high-level.drawio", root);
writeFileSync(out, `<mxfile host="app.diagrams.net" agent="scripts/build-drawio.mjs">
  <diagram id="high-level" name="High-level (public)">
    <mxGraphModel dx="1200" dy="900" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1150" pageHeight="950" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        ${cells.join("\n        ")}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
`);
console.log(`wrote docs/dashdoc-architecture-high-level.drawio (${cells.length} cells)`);
