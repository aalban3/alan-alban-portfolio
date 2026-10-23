export const EMAIL = "alan.alban10@gmail.com";
export const GITHUB_URL = "https://github.com/aalban3";
export const LINKEDIN_URL = "https://linkedin.com/in/alan-alban";
// Live Google Doc (shared as "anyone with the link can view"), so edits show up without a deploy.
export const RESUME_URL = "https://docs.google.com/document/d/1V-ZF-KuNBS1y2wDS3-0ly2OO78IWw9rkr1iLaz_Br7U/preview";

export const work = [
  {
    company: "Dashdoc",
    role: "Co-Founder",
    years: "Now",
    title: "An EMR for speech-language pathologists",
    desc: "Co-founded Dashdoc and lead engineering. Clinicians get faster access to patient goals and documents, and AI drafts the routine parts of their notes for review.",
    stack: ["Microservices", ".NET", "AWS", "AI", "React", "TypeScript"],
    caseStudy: "/work/dashdoc",
  },
  {
    company: "Cox Automotive",
    years: "2024 – Now",
    title: "Making a high-traffic marketplace faster",
    desc: "Tuned the Listings and Search services: better SQL query plans, targeted PostgreSQL indexes, less redundant OpenSearch work and simpler BFF logic, for higher throughput and better Apdex scores. Also helped move the platform off a PHP monolith to .NET and React on AWS, and opened listing offers to public marketplaces.",
    stack: [".NET", "PostgreSQL", "OpenSearch", "AWS", "React"],
  },
  {
    company: "Strategic Financial Solutions",
    years: "2021 – 2024",
    title: "A Redis caching layer for sales and servicing",
    desc: "Designed the caching layer that cut latency across core platforms, and architected services during the move from Node.js to .NET 6 and React. Contributed to a significant reduction in Azure spend.",
    stack: ["Redis", ".NET 6", "React", "Azure"],
  },
  {
    company: "FactSet",
    years: "2016 – 2019",
    title: "Data filtering for client-facing financial apps",
    desc: "Built backend filtering systems for dynamic content delivery and maintained the Excel plugin API services used by enterprise customers.",
    stack: ["SQL", "C++", "APIs"],
  },
];

export const timeline = [
  { short: "2014", role: "BS Electrical Engineering", org: "University of Florida" },
  { short: "2014", role: "Solutions Engineer", org: "IBM" },
  { short: "2016", role: "Product Architect", org: "FactSet" },
  { short: "2021", role: "Software Engineering Certificate", org: "Fullstack Academy" },
  { short: "2021", role: "Software Engineer II", org: "Strategic Financial Solutions" },
  { short: "2024", role: "Software Engineer II", org: "Cox Automotive" },
  { short: "2026", role: "MS Computer Science (OMSCS)", org: "Georgia Tech" },
  { short: "Now", role: "Co-Founder", org: "Dashdoc" },
];

export const projects = [
  {
    name: "Jade Finance",
    desc: "Personal finance app with a social layer, on the App Store. Built auth, navigation and the Plaid + GraphQL integration.",
    gh: "https://github.com/FSA-Team-Mercury/jade",
  },
  {
    name: "Grace Hopper Motors",
    desc: "E-commerce app for vehicles. Built login, checkout and the inventory admin.",
    gh: "https://github.com/aalban3/graceshopper",
  },
  {
    name: "Social Grapher",
    desc: "Social network graph prototype on the GRANDstack, written in TypeScript.",
    gh: "https://github.com/aalban3/social-network-graph",
  },
];

export const articles = [
  {
    title: "The GRAND dilemma",
    sub: "Setting up the GRANDstack with TypeScript",
    url: "https://alan-alban.medium.com/the-grand-dilemma-e608bca16bbf",
  },
  {
    title: "Deploying Your Express.js Apps to AWS in 7 Steps",
    sub: "A practical deployment guide",
    url: "https://alan-alban.medium.com/deploying-your-express-js-apps-to-aws-in-7-steps-883d51365406",
  },
];
