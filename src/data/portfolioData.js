export const personalData = {
  name: "Periyaraja S",
  role: "Backend Developer",
  subRole: "PHP · Laravel · Node.js · Express.js",
  status: "Immediate Joiner",
  location: "Madurai, India",
  experienceYears: "3.5+",
  email: "periyaraja1706@gmail.com",
  phone: "+91 7092809308",
  github: "https://github.com/periyaraja-s",
  summary:
    "Backend Developer with 3.5+ years of software development experience specializing in PHP, Laravel, CodeIgniter, and Node.js/Express.js. Experienced in architecting robust REST APIs, business logic, asynchronous queues, database design, payment integrations, and WebSocket engines. Hands-on with MySQL, PostgreSQL, and MongoDB, with working experience in React.js for full-stack application connectivity.",
};

export const keyMetrics = [
  {
    value: "3.5+",
    label: "Years Experience",
    subtext: "Backend & Web Development",
  },
  {
    value: "20+",
    label: "Projects Worked On",
    subtext: "Across multiple business domains",
  },
  {
    value: "10+",
    label: "Team Members Guided",
    subtext: "Mentoring & day-to-day technical support",
  },
];

export const experienceData = [
  {
    id: "amigoways",
    role: "Full Stack Developer",
    company: "Amigoways Technologies",
    location: "Madurai, India",
    period: "Mar 2026 – Jun 2026",
    badge: "Recent",
    bullets: [
      "Architected a real-time chat system using Ratchet PHP WebSocket on the backend, and built the client-side messaging UI with JavaScript — handling live message rendering, connection state management, and reconnect logic with reverse proxy configuration.",
      "Set up Git version control from scratch for the team, introduced branching workflows via GitHub Desktop, and configured Hostinger's Git-based auto-deploy for PHP projects — reducing manual upload errors and standardising deployment across the team.",
      "Integrated and debugged third-party APIs, performed backend system optimisation, and delivered UI/UX improvements for responsive web interfaces across the platform.",
    ],
    tech: ["PHP", "Ratchet WebSocket", "JavaScript", "Reverse Proxy", "Git Deploy", "REST APIs"],
  },
  {
    id: "elroi",
    role: "Laravel Developer",
    company: "ELROI Software Solutions",
    location: "Madurai, India",
    period: "Nov 2024 – Jan 2026",
    badge: "Core Enterprise",
    bullets: [
      "Built and maintained end-to-end ERP modules — GST Billing, POS, CRM, and HRM — designing interactive interfaces backed by Laravel REST APIs and MySQL, serving 100+ client accounts across 3 branches each.",
      "Resolved a critical invoice UI failure: rewrote the client interaction layer and reduced AJAX calls from dozens of redundant triggers down to 1–5 events, lifting the product-per-invoice limit from 10–30 items to 100+ with smooth, error-free operation.",
      "Optimised heavy report generation (50,000+ records per report) using Laravel jobs and queues with per-report chunking and async S3 delivery — cutting wait time from 1–2 minutes to 10–20 seconds with user notification on completion.",
      "Eliminated code duplication across billing and reporting modules by refactoring into reusable Traits and Service Containers, improving maintainability and reducing regression risk across deployments.",
      "Implemented invoice prefix and sequence management with multi-branch, multi-company numbering settings; developed and optimised PDF/Excel export modules for performance and usability across 10–20 actively maintained client deployments.",
    ],
    tech: ["PHP", "Laravel", "PostgreSQL", "MySQL", "Laravel Queues", "AWS S3", "Service Containers"],
  },
  {
    id: "arm",
    role: "PHP Developer",
    company: "ARM Infotech",
    location: "Madurai, India",
    period: "Jul 2022 – Sep 2024",
    badge: "Foundational",
    bullets: [
      "Developed full-stack web applications across e-commerce, blockchain, MLM, and fintech domains using PHP, CodeIgniter, Laravel, and MySQL — owning backend modules, form handling, data management, and frontend templating end-to-end.",
      "Integrated multiple payment gateways including Stripe, PayPal, Web3 (on-chain), and PayKassa — handling transaction processing, webhook callbacks, and error handling across live production environments.",
      "Established CI/CD pipelines for Node.js services including automated build and deployment triggers, reducing release friction and enabling consistent environment parity.",
      "Built blockchain-related features including Solana wallet management, SOL transfer workflows (single and batch), and on-chain automation using Laravel and Node.js — integrated with Telegram Bot API for user-facing interaction flows.",
      "Developed Telegram Bot integrations for user onboarding, plan selection, wallet address generation, and keyword-triggered workflows — without AI/NLP, using structured command flows and backend API calls.",
      "Participated in debugging, performance optimisation, and production deployments; collaborated across teams on feature enhancements and client-reported bug fixes.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express.js", "Stripe", "PayPal", "Telegram Bot API", "CI/CD"],
  },
];

export const projectsData = [
  {
    id: "erp-optimisation",
    title: "ERP Platform & Heavy Queue Optimisation",
    category: "enterprise",
    organization: "ELROI (Abacux Software)",
    period: "2025",
    description:
      "Enterprise ERP performance re-architecture focusing on GST billing, POS transactions, and asynchronous heavy report processing. Diagnosed and resolved severe invoice AJAX bottlenecks and decoupled 50,000+ record report generations into asynchronous worker pipelines.",
    highlights: [
      "Cut report generation time from 1–2 minutes down to 10–20 seconds for 50,000+ row exports",
      "Rebuilt report engine using Laravel Queues, background chunking, and AWS S3 signed URL delivery",
      "Optimized invoice event triggers from dozens of redundant requests to 1–5 controlled events",
      "Elevated maximum product lines per invoice from 30 items to 100+ seamlessly",
    ],
    stack: ["PHP", "Laravel", "PostgreSQL", "Laravel Queues", "AWS S3", "jQuery", "AJAX"],
    github: "#",
    live: "private",
    badge: "Architecture Highlight",
  },
  {
    id: "realtime-chat",
    title: "Real-Time WebSocket Chat System",
    category: "realtime",
    organization: "Amigoways Technologies",
    period: "2026",
    description:
      "Engineered a production-ready real-time communication infrastructure supporting bidirectional messaging between administrators, active users, and system bots. Managed socket connection state, heartbeat monitoring, and automatic reconnection backoff behind reverse proxies.",
    highlights: [
      "Engineered real-time message routing and connection pooling for a platform serving 10,000+ users",
      "Configured Ratchet PHP WebSocket daemon integrated with reverse proxy environment",
      "Implemented graceful reconnection, token handshake validation, and active notification dispatch",
    ],
    stack: ["PHP", "Ratchet", "WebSockets", "JavaScript", "Nginx Proxy"],
    github: "#",
    live: "private",
    badge: "High Concurrency",
  },
  {
    id: "multi-transfer-telegram",
    title: "Multi-Transfer Engine with Telegram Bot",
    category: "fintech",
    organization: "ARM Infotech",
    period: "2024",
    description:
      "A high-security transactional engine coordinating wallet generation, single and batch token transfers, and structured command-driven interactions via Telegram Bot API with strict state machine validation.",
    highlights: [
      "Developed Laravel and Node.js backend orchestration for Solana wallet creation & transfer workflows",
      "Built batch wallet transfer dispatcher with rigorous payload validation and status webhooks",
      "Constructed reliable Telegram Bot workflows for onboarding and plan management using native HTTP APIs",
    ],
    stack: ["PHP", "Laravel", "Node.js", "Express.js", "Telegram Bot API", "Webhooks"],
    github: "#",
    live: "private",
    badge: "Fintech & Automation",
  },
  {
    id: "apparel-erp",
    title: "Apparel ERP – Production Bundle Management System",
    category: "enterprise",
    organization: "Open Source / Independent",
    period: "Production Ready",
    description:
      "An ERP application specialized for garment manufacturing and apparel factory operations. Translates complex assembly line bundle tracking into a robust database-driven management platform with strict state transitions.",
    highlights: [
      "Structured bundle stage tracking from fabric cut to sewing line and finishing",
      "Relational schema for bundle barcodes, operator assignment, and throughput metrics",
      "Role-tailored interfaces for factory supervisors and production management",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Blade", "Bootstrap"],
    github: "https://github.com/periyaraja-s/Production-Bundle-Management-System",
    live: "#",
    badge: "Open Source",
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    category: "fullstack",
    organization: "Independent Application",
    period: "Deployed 2026",
    description:
      "A deployed full-stack e-commerce application with separate customer and admin workflows, authentication, product and category management, cart and order flows, and Razorpay test-mode checkout. The React frontend is hosted on Vercel, with a Node.js/Express API on Render and MongoDB Atlas for data storage.",
    highlights: [
      "JWT authentication with role-based customer and admin access",
      "Product catalog, category management, cart, checkout, and order workflows",
      "Razorpay test-mode payment integration for checkout verification",
      "Live deployment using Vercel, Render, and MongoDB Atlas",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Razorpay", "Vercel", "Render"],
    github: "https://github.com/periyaraja-s/E-Commerce-Platform",
    live: "https://e-commerce-platform-mocha-pi.vercel.app/",
    badge: "Full-Stack System",
  },
];

export const skillsData = [
  {
    category: "Backend Core",
    icon: "bi-cpu",
    description: "Server runtimes, application frameworks, and core language ecosystems",
    items: [
      { name: "PHP", level: "Expert", experience: "3.5+ yrs" },
      { name: "Laravel", level: "Expert", experience: "3.5+ yrs" },
      { name: "Node.js", level: "Proficient", experience: "2+ yrs" },
      { name: "Express.js", level: "Proficient", experience: "2+ yrs" },
      { name: "CodeIgniter", level: "Proficient", experience: "2 yrs" },
    ],
  },
  {
    category: "API & Architecture",
    icon: "bi-diagram-3",
    description: "Interface protocols, asynchronous workers, real-time messaging, and billing",
    items: [
      { name: "RESTful APIs", level: "Expert", experience: "Core" },
      { name: "WebSockets (Ratchet PHP)", level: "Proficient", experience: "Production" },
      { name: "Laravel Queues & Workers", level: "Expert", experience: "High scale" },
      { name: "Payment Gateways (Stripe, PayPal, Razorpay, Web3)", level: "Proficient", experience: "Integrated" },
      { name: "Telegram Bot API", level: "Proficient", experience: "Automation" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "bi-database",
    description: "Relational modeling, indexing, NoSQL, and cloud storage object pipelines",
    items: [
      { name: "MySQL", level: "Expert", experience: "Primary DB" },
      { name: "PostgreSQL", level: "Proficient", experience: "Enterprise" },
      { name: "MongoDB / NoSQL", level: "Working", experience: "Document stores" },
      { name: "AWS S3", level: "Proficient", experience: "Async Reports" },
      { name: "Database Schema Design", level: "Expert", experience: "Normalized" },
    ],
  },
  {
    category: "Auth & Security",
    icon: "bi-shield-check",
    description: "Token authentication, API gating, role management, and request validation",
    items: [
      { name: "Laravel Sanctum", level: "Expert", experience: "Token Auth" },
      { name: "Laravel Passport", level: "Proficient", experience: "OAuth2" },
      { name: "JWT Authentication", level: "Proficient", experience: "Stateless APIs" },
      { name: "Role-Based Access Control (RBAC)", level: "Expert", experience: "Multi-tenant" },
      { name: "Webhook Verification", level: "Proficient", experience: "Signatures" },
    ],
  },
  {
    category: "DevOps & Tooling",
    icon: "bi-terminal",
    description: "Version control, auto-deployment workflows, API inspection, and CI/CD",
    items: [
      { name: "Git & GitHub", level: "Expert", experience: "Branching & PRs" },
      { name: "Hostinger Git Deploy", level: "Proficient", experience: "Auto deployment" },
      { name: "CI/CD Pipelines (Node.js)", level: "Working", experience: "Automated builds" },
      { name: "Postman", level: "Expert", experience: "API Testing & Docs" },
      { name: "FTP / Server Admin", level: "Proficient", experience: "Production hosts" },
    ],
  },
  {
    category: "Frontend Connectivity",
    icon: "bi-code-slash",
    description: "Client-side integrations, reactive component wiring, and UI frameworks",
    items: [
      { name: "JavaScript (ES6+)", level: "Proficient", experience: "Daily use" },
      { name: "React.js", level: "Proficient", experience: "Full-stack apps" },
      { name: "jQuery & AJAX", level: "Expert", experience: "ERP module UI" },
      { name: "HTML5 & CSS3", level: "Proficient", experience: "Clean layouts" },
      { name: "Bootstrap 5", level: "Expert", experience: "Responsive grids" },
    ],
  },
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E)",
  institution: "Vaigai College of Engineering, Madurai",
  period: "Jun 2014 – May 2018",
  notes: "Graduated with strong technical fundamentals in software systems and engineering principles.",
};

export const architectureWins = [
  {
    title: "Async Report Generation with S3 & Queue Chunking",
    impact: "Cut generation time from ~120s to 15s for 50,000+ records",
    problem:
      "Synchronous PDF/Excel report exports on heavy datasets caused HTTP gateway timeouts (504s) and blocked user web workers in the ERP platform.",
    solution:
      "Decoupled the request cycle using Laravel Queue dispatchers. Implemented chunked DB cursor streaming (1,000 records/chunk) directly into temporary files, streamed the archive to AWS S3, and notified the client with pre-signed download tokens.",
    tech: ["Laravel Queues", "AWS S3", "Chunked Querying", "Database Cursors"],
  },
  {
    title: "Ratchet PHP WebSocket Daemon with Reverse Proxy",
    impact: "Supported 10,000+ users with instant message dispatch and sub-50ms latency",
    problem:
      "Standard HTTP polling resulted in server connection saturation and delayed notifications across multi-role admin/user chat channels.",
    solution:
      "Deployed a persistent Ratchet PHP WebSocket process with an event loop for connection pooling, heartbeat pings for dead connection pruning, and Nginx reverse proxy SSL termination.",
    tech: ["Ratchet PHP", "WebSockets", "Event Loop", "Nginx Proxy"],
  },
  {
    title: "Invoice AJAX Optimization & Event Debouncing",
    impact: "Lifted invoice item capacity from 10–30 items to 100+ items without freezing",
    problem:
      "Redundant row-level change handlers triggered hundreds of synchronous AJAX recalculation calls as billing operators entered multi-item invoices.",
    solution:
      "Overhauled the client event layer: consolidated calculations into batched client-side state, reduced server trips to 1–5 validation calls, and refactored backend calculation logic into reusable Service Containers.",
    tech: ["jQuery Optimization", "Service Containers", "Batch Validation", "MySQL"],
  },
];
