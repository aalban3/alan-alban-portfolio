// Draft content from the design: services, diagram and copy are placeholders
// until they're replaced with Dashdoc's real architecture.
export default {
  draft: true,
  eyebrow: "CASE STUDY · DASHDOC",
  title: "Building an EMR that writes the paperwork with you",
  lede: "Speech-language pathologists spend hours on evaluations, SOAP notes and plans. Dashdoc gives them faster access to patient goals and documents, and uses AI to draft the routine parts.",
  facts: [
    { label: "Role", value: "Co-Founder, Engineering" },
    { label: "Timeline", value: "2025 – Now" },
    { label: "Stack", value: ".NET · React/TS · AWS · AI" },
    { label: "Users", value: "SLPs and small practices" },
  ],
  // Diagram coordinates are in a 540×400 viewBox; each node is 140×52.
  nodes: {
    web: { x: 200, y: 10, label: "Web App", tech: "React · TypeScript", note: "Clinician-facing app: dashboard, clients, document editor." },
    gw: { x: 200, y: 100, label: "API Gateway", tech: "AWS", note: "Single entry point. Routes requests and enforces auth." },
    auth: { x: 20, y: 200, label: "Auth Service", tech: ".NET", note: "Users, roles and practice membership." },
    docs: { x: 200, y: 200, label: "Documents", tech: ".NET", note: "Evaluations, SOAP notes, plans and goal banks." },
    ai: { x: 380, y: 200, label: "AI Service", tech: ".NET", note: "Builds prompts from session context and returns drafts for review." },
    db: { x: 110, y: 320, label: "PostgreSQL", tech: "Encrypted at rest", note: "Structured clinical records." },
    s3: { x: 290, y: 320, label: "File Storage", tech: "S3", note: "Uploaded files and generated PDFs." },
    llm: { x: 380, y: 100, label: "LLM Provider", tech: "External", note: "Model calls with PHI minimized before sending." },
  },
  edges: [
    ["web", "gw"],
    ["gw", "auth"],
    ["gw", "docs"],
    ["gw", "ai"],
    ["docs", "db"],
    ["docs", "s3"],
    ["ai", "llm"],
    ["ai", "docs"],
  ],
  steps: [
    {
      title: "The system at a glance",
      ids: ["web", "gw", "auth", "docs", "ai", "db", "s3", "llm"],
      body: "A React front end talks to a set of .NET services behind a gateway on AWS. Each service owns its data, so documents, auth and AI can ship and scale independently.",
    },
    {
      title: "Request path and access control",
      ids: ["web", "gw", "auth"],
      body: "Every request goes through the gateway and is checked against the user's role and practice. Clinical data never leaves a practice boundary.",
    },
    {
      title: "Documents as the core",
      ids: ["docs", "db", "s3"],
      body: "Evaluations, SOAP notes and plans are versioned records. Drafts autosave; finalized documents are locked and rendered to PDF.",
    },
    {
      title: "AI-assisted notes",
      ids: ["ai", "llm", "docs"],
      body: "The AI service pulls goals and session context, strips identifiers, and drafts sections for the clinician to edit. Nothing is saved without review.",
    },
    {
      title: "What I'd do differently",
      ids: [],
      body: "Placeholder: one honest lesson, e.g. a boundary you would draw differently or something you would measure earlier.",
    },
  ],
  decisions: [
    { title: "Microservices from day one", body: "Placeholder: why separate services made sense for a small team, and what it cost." },
    { title: "Human-in-the-loop AI", body: "Placeholder: drafts only, never auto-finalized. How that shaped the UI and data model." },
    { title: "Health data on AWS", body: "Placeholder: encryption, audit logging and how PHI is handled across services." },
  ],
};
