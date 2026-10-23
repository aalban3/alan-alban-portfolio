// Public, high-level view of Dashdoc prod. Leave out account IDs, CIDRs, hostnames,
// sizes and secret names; the detailed diagram lives in Dashdoc.Infra.
// Set `draft: true` to show a placeholder banner at the top of the page.

// AWS architecture icon category colors.
const NET = "#8C4FFF";
const CMP = "#ED7100";
const DB = "#C925D1";
const STO = "#7AA116";
const AI = "#01A88D";
const SEC = "#DD344C";
const EXT = "#5F6368";
const GRAFANA = "#F46800";

export default {
  draft: false,
  eyebrow: "CASE STUDY · DASHDOC",
  title: "Building an EMR that writes the paperwork with you",
  lede: "Speech-language pathologists spend hours on evaluations, SOAP notes and plans. Dashdoc gives them faster access to patient goals and documents, and uses AI to draft the routine parts.",
  facts: [
    { label: "Role", value: "Co-Founder, Engineering" },
    { label: "Timeline", value: "2024 – Now" },
    { label: "Stack", value: ".NET · React · AWS · Bedrock" },
    { label: "Users", value: "SLPs and small practices" },
  ],

  // Canvas is 676×550 and scales down to fit. Nodes are 144×58 at (x, y).
  // Kept in sync with docs/dashdoc-architecture-high-level.drawio.
  canvas: { width: 676, height: 550 },
  groups: [
    { kind: "cloud", x: 0, y: 100, width: 676, height: 442, label: "AWS Cloud · Prod", pos: "tl" },
    { kind: "vpc", x: 8, y: 130, width: 496, height: 404, label: "VPC", pos: "tl" },
    { kind: "public", x: 16, y: 150, width: 480, height: 80, label: "PUBLIC SUBNET", pos: "tr" },
    { kind: "compute", x: 16, y: 246, width: 480, height: 94, label: "ECS FARGATE · PRIVATE SUBNET", pos: "tr" },
    { kind: "data", x: 16, y: 356, width: 480, height: 170, label: "DATA · PRIVATE SUBNET", pos: "bl" },
    { kind: "label", x: 520, y: 136, label: "MANAGED SERVICES" },
  ],
  nodes: {
    user: { x: 184, y: 20, label: "Clinician", svc: "Browser", cat: EXT, icon: "person", note: "SLPs and practice staff using the Dashdoc web app." },
    grafana: { x: 520, y: 20, label: "Grafana Cloud", svc: "OpenTelemetry", cat: GRAFANA, icon: "monitoring", note: "Receives traces from the Core API, so slow requests and errors show up end to end." },
    alb: { x: 184, y: 161, label: "Load Balancer", svc: "Application LB", cat: NET, icon: "alt_route", note: "HTTPS entry point. Terminates TLS and routes traffic to the services in the private subnet." },
    cognito: { x: 520, y: 161, label: "Cognito", svc: "Amazon Cognito", cat: SEC, icon: "passkey", note: "User pool for sign-in and MFA. Issues the JWTs that every service validates." },
    api: { x: 20, y: 269, label: "Core API", svc: ".NET · Fargate", cat: CMP, icon: "api", note: "Core API: practices, users, roles and clients. A stateless resource server." },
    bff: { x: 184, y: 269, label: "Web Gateway", full: "Web Gateway (BFF)", svc: ".NET · Fargate", cat: CMP, icon: "shield_person", note: "Serves the React app and acts as its backend-for-frontend. Owns sign-in and the session cookie, then calls the services on the user's behalf." },
    docs: { x: 348, y: 269, label: "Document Engine", svc: ".NET · Fargate", cat: CMP, icon: "description", note: "Evaluations, SOAP notes and plans, plus PDF generation." },
    bedrock: { x: 520, y: 269, label: "Bedrock", svc: "Titan Embeddings", cat: AI, icon: "neurology", note: "Embeds document content. Model calls stay inside the AWS account." },
    apidb: { x: 20, y: 390, label: "Core DB", svc: "RDS PostgreSQL", cat: DB, icon: "database", note: "The Core API's own database. Multi-AZ, encrypted at rest." },
    docdb: { x: 348, y: 390, label: "Documents DB", svc: "RDS PostgreSQL", cat: DB, icon: "database", note: "The Document Engine's own database. Multi-AZ, encrypted at rest." },
    s3: { x: 520, y: 390, label: "File Storage", svc: "Amazon S3", cat: STO, icon: "inventory_2", note: "Generated PDFs in a versioned bucket." },
  },
  // Each edge is drawn through explicit waypoints so wires never cross a box or group label.
  // Group labels sit at a corner (`pos`: tl, tr, bl) chosen to stay clear of wires.
  edges: [
    { from: "user", to: "alb", points: [[256, 78], [256, 161]] },
    { from: "alb", to: "bff", points: [[256, 219], [256, 269]] },
    { from: "bff", to: "api", points: [[184, 298], [164, 298]] },
    { from: "bff", to: "docs", points: [[328, 298], [348, 298]] },
    { from: "bff", to: "cognito", points: [[300, 269], [300, 240], [508, 240], [508, 190], [520, 190]] },
    { from: "api", to: "apidb", points: [[92, 327], [92, 390]] },
    { from: "docs", to: "docdb", points: [[420, 327], [420, 390]] },
    { from: "docs", to: "bedrock", points: [[492, 298], [520, 298]] },
    { from: "docs", to: "s3", points: [[492, 315], [510, 315], [510, 419], [520, 419]] },
    { from: "api", to: "grafana", kind: "telemetry", points: [[150, 269], [150, 90], [592, 90], [592, 78]] },
  ],
  steps: [
    {
      title: "The system at a glance",
      ids: ["user", "grafana", "alb", "cognito", "api", "bff", "docs", "bedrock", "apidb", "docdb", "s3"],
      body: "Three .NET services run on ECS Fargate in private subnets behind a load balancer, with the Web Gateway acting as a backend-for-frontend (BFF). Each service owns its own PostgreSQL database, and production runs in its own AWS account.",
    },
    {
      title: "Auth at the BFF",
      ids: ["user", "alb", "bff", "cognito"],
      body: "The Web Gateway runs the login flow against Cognito, MFA included, and gives the browser a session cookie instead of tokens. The services behind it are stateless and validate the Cognito JWT on every call.",
    },
    {
      title: "Services own their data",
      ids: ["bff", "api", "docs", "apidb", "docdb", "s3"],
      body: "The Core API and Document Engine each have their own PostgreSQL database, Multi-AZ in production. Evaluations, notes and plans live with the Document Engine, and generated PDFs go to a versioned S3 bucket.",
    },
    {
      title: "AI on Amazon Bedrock",
      ids: ["docs", "bedrock"],
      body: "The Document Engine calls Amazon Bedrock (Titan Embeddings) to embed document content. Model calls stay inside our AWS account instead of going to an outside AI provider.",
    },
    {
      title: "Observability with Grafana Cloud",
      ids: ["api", "grafana"],
      body: "The Core API exports OpenTelemetry traces to Grafana Cloud, so slow requests and errors show up with their full trace.",
    },
    {
      title: "What I'd do differently",
      ids: [],
      body: "Placeholder: one honest lesson, e.g. a boundary you would draw differently or something you would measure earlier.",
    },
  ],
  decisions: [
    {
      title: "A BFF in front of stateless services",
      body: "The browser never holds tokens: the BFF owns sign-in and the session, and the services only validate a JWT. The cost is an extra hop and one more service to run.",
    },
    {
      title: "A database per service",
      body: "The Core API and Document Engine deploy and migrate independently. The tradeoff is no cross-service joins, so shared data moves over synchronous HTTP. That's simple for now, but it couples their availability.",
    },
    {
      title: "AI inside the AWS boundary",
      body: "Using Bedrock keeps clinical text in our own account, with IAM scoped to the one model we use. We give up some model choice compared with calling outside AI providers directly.",
    },
    {
      title: "An isolated prod account, keyless deploys",
      body: "Production lives in its own AWS account, separate from dev and stage. GitHub Actions deploys over OIDC, and prod runs the same container images that were built and tested in nonprod.",
    },
  ],
};
