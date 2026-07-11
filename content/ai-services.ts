export type AIService = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  gradient: string;
  accent: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  capabilities: string[];
  useCases: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
};

export const aiServices: AIService[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "AI Automation",
    tagline: "Remove repetitive work and let intelligent systems run your operations end to end.",
    gradient: "from-blue-500/30 via-indigo-600/20 to-slate-900",
    accent: "text-blue-300",
    intro: [
      "AI Automation combines artificial intelligence with reliable engineering to take over the repetitive, rules-based, and decision-heavy tasks that slow your team down. Every automation we build is tied to a measurable outcome — hours saved, errors reduced, or revenue accelerated — and designed around your real workflows.",
    ],
    sections: [
      {
        heading: "What AI Automation actually means for your business",
        body: [
          "Traditional automation follows fixed rules and breaks the moment a task needs judgment or unstructured data. By adding language models and intelligent decision layers on top of dependable orchestration, we automate work that used to require a human to read, interpret, and decide — consistently, at scale, and with a full audit trail.",
        ],
      },
      {
        heading: "How we design and build automations",
        body: [
          "We start with discovery, mapping your process as it truly happens, then prioritize the highest-value tasks by volume, error rate, and impact. We build in stages — shipping a focused first version, measuring it against real usage, and expanding only once it proves reliable.",
        ],
      },
      {
        heading: "Keeping humans in control",
        body: [
          "Good automation removes drudgery, not people. For sensitive decisions we add human-in-the-loop checkpoints, and every automation ships with guardrails — validation, confidence thresholds, fallbacks, and audit trails. If the system is ever unsure, it asks rather than guesses.",
        ],
      },
    ],
    capabilities: [
      "Document processing and data extraction from PDFs, emails, and forms",
      "Intelligent routing, classification, and prioritization of incoming work",
      "Cross-system data synchronization without manual copy-paste",
      "Automated report generation and scheduled delivery",
      "Approval workflows with human-in-the-loop checkpoints",
      "Exception handling with smart escalation",
    ],
    useCases: [
      "Finance teams automating invoice capture, matching, and reconciliation",
      "Operations teams removing repetitive data entry between tools",
      "Support teams triaging and routing tickets automatically",
      "HR teams streamlining onboarding and document collection",
    ],
    benefits: [
      "Reclaim dozens of staff hours every week",
      "Reduce human error and improve consistency",
      "Scale operations without proportionally scaling headcount",
      "Gain full visibility and audit trails across processes",
    ],
    process: [
      { step: "Process mapping", detail: "We document how work truly flows, including exceptions." },
      { step: "Opportunity scoring", detail: "We prioritize automations by value and feasibility." },
      { step: "Staged build", detail: "We ship a focused first version and expand as it proves out." },
      { step: "Monitor & optimize", detail: "We measure results and continuously improve reliability." },
    ],
    techStack: ["Python", "Node.js", "OpenAI", "LangChain", "n8n", "PostgreSQL", "Redis", "Docker"],
    faqs: [
      { q: "Will automation replace my team?", a: "No. It removes repetitive tasks so your team can focus on higher-value work. We keep humans in control of sensitive decisions." },
      { q: "How long before we see results?", a: "Most focused automations deliver measurable time savings within the first few weeks of going live." },
      { q: "Is it safe for critical processes?", a: "Yes. We build guardrails, confidence thresholds, and audit trails, and roll out gradually to keep risk low." },
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    category: "AI Automation",
    tagline: "Conversational assistants that answer instantly, qualify leads, and support customers around the clock.",
    gradient: "from-cyan-500/30 via-blue-600/20 to-slate-900",
    accent: "text-cyan-300",
    intro: [
      "An AI chatbot is a conversational assistant that understands natural language and responds like a knowledgeable member of your team. We build chatbots that do real work — answering questions, qualifying and capturing leads, booking appointments, and deflecting repetitive support tickets — for a measurable improvement in response time, satisfaction, and conversion.",
    ],
    sections: [
      {
        heading: "Beyond scripted bots",
        body: [
          "Older chatbots relied on rigid decision trees and got stuck the moment a question was phrased unexpectedly. Modern AI chatbots understand meaning rather than keywords, and we ground them in your documentation, product data, and FAQs so they answer from your source of truth — and hand off gracefully to a human when they don't know.",
        ],
      },
      {
        heading: "Where chatbots create value",
        body: [
          "On your website, a chatbot answers pre-sales questions and captures qualified leads around the clock. In support, it deflects the repetitive queries that consume your team's time so they can focus on complex, high-empathy conversations. Internally, it acts as a knowledge assistant that answers staff questions instantly.",
        ],
      },
      {
        heading: "Designing a chatbot people actually trust",
        body: [
          "A chatbot lives or dies on trust, so we tune its tone to your brand, set clear boundaries, and build seamless escalation to human agents. We instrument every conversation and use that data to continuously refine the assistant so it sharpens over time rather than stagnating after launch.",
        ],
      },
    ],
    capabilities: [
      "Natural language understanding across many phrasings",
      "Answers grounded in your documentation and product data",
      "Lead qualification and capture with CRM sync",
      "Appointment booking and order status lookups",
      "Seamless handoff to human agents",
      "Multilingual support for global audiences",
    ],
    useCases: [
      "24/7 pre-sales assistant on your website",
      "Tier-1 customer support deflection",
      "Internal knowledge assistant for employees",
      "Lead generation and appointment scheduling",
    ],
    benefits: [
      "Instant responses at any hour",
      "Lower support costs and faster resolution",
      "Higher lead capture and conversion",
      "Consistent, on-brand answers every time",
    ],
    process: [
      { step: "Knowledge audit", detail: "We gather and structure the content the bot will rely on." },
      { step: "Conversation design", detail: "We define tone, boundaries, and escalation paths." },
      { step: "Build & ground", detail: "We connect the bot to your data and integrations." },
      { step: "Train & refine", detail: "We learn from real conversations and improve continuously." },
    ],
    techStack: ["OpenAI", "LangChain", "Pinecone", "Next.js", "Node.js", "WebSockets", "PostgreSQL"],
    faqs: [
      { q: "Will it make up answers?", a: "We ground the bot in your real content and design it to say when it does not know, then hand off to a human." },
      { q: "Can it connect to our CRM?", a: "Yes. We integrate lead capture, appointment booking, and data sync with your existing tools." },
      { q: "Does it support other languages?", a: "Yes. Modern models handle multilingual conversations, which is ideal for global audiences." },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "AI Automation",
    tagline: "Connect your tools and orchestrate multi-step processes so work moves without manual pushing.",
    gradient: "from-indigo-500/30 via-blue-600/20 to-slate-900",
    accent: "text-indigo-300",
    intro: [
      "Workflow automation connects the tools your business already uses and orchestrates the steps between them, so work flows automatically from one stage to the next instead of being pushed by hand. We add AI where judgment is needed — to classify, summarize, or decide — and dependable orchestration everywhere else.",
    ],
    sections: [
      {
        heading: "The hidden cost of manual handoffs",
        body: [
          "Most inefficiency hides in the gaps between tools — copying a lead into the CRM, notifying finance when a deal closes, updating trackers by hand. These handoffs quietly consume hours and invite errors. Workflow automation eliminates them: once a trigger fires, the entire downstream sequence runs on its own, in order, every time.",
        ],
      },
      {
        heading: "Adding intelligence to orchestration",
        body: [
          "Rule-based orchestration handles predictable steps, but real workflows hit moments that need interpretation — reading a message to route it, or extracting fields from an attachment. We insert an AI step exactly where understanding is required and rely on deterministic logic everywhere else, giving you AI's flexibility without losing reliability.",
        ],
      },
      {
        heading: "Built to be observable and resilient",
        body: [
          "Automated workflows need to be trustworthy, so we build in logging to show what happened at every step, retries so one tool's outage doesn't break the chain, and alerts when a human is genuinely needed. We also structure them to be adjusted and extended as your processes evolve.",
        ],
      },
    ],
    capabilities: [
      "Multi-step orchestration across many tools",
      "Trigger-based execution from forms, payments, and events",
      "AI-powered classification and summarization steps",
      "Data transformation and validation between systems",
      "Retries, error handling, and alerting",
      "Detailed logging and audit trails",
    ],
    useCases: [
      "Lead-to-CRM capture and enrichment",
      "Customer onboarding sequences",
      "Order fulfillment and status updates",
      "Cross-department approval flows",
    ],
    benefits: [
      "Eliminate manual handoffs and delays",
      "Ensure consistent execution every time",
      "Scale operations without added headcount",
      "See exactly how work flows through your business",
    ],
    process: [
      { step: "Map the flow", detail: "We chart every step and handoff across your tools." },
      { step: "Design triggers", detail: "We define what starts each workflow and how it branches." },
      { step: "Build & integrate", detail: "We connect systems and add AI where judgment is needed." },
      { step: "Harden & monitor", detail: "We add retries, alerts, and logging for reliability." },
    ],
    techStack: ["n8n", "Zapier", "Node.js", "Python", "REST APIs", "Webhooks", "PostgreSQL", "Redis"],
    faqs: [
      { q: "Which tools can you connect?", a: "Almost any tool with an API or webhook — CRMs, payment systems, email, project trackers, databases, and more." },
      { q: "What happens if a tool goes down?", a: "We build retries and error handling so temporary outages do not break the workflow, with alerts when needed." },
      { q: "Can workflows change later?", a: "Yes. We design them to be adjusted and extended as your processes evolve." },
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    category: "AI Automation",
    tagline: "Turn your CRM into an active engine that captures, enriches, scores, and nurtures every relationship.",
    gradient: "from-emerald-500/30 via-teal-600/20 to-slate-900",
    accent: "text-emerald-300",
    intro: [
      "CRM automation turns your customer database from a passive record into an active engine that captures leads automatically, keeps data clean, scores opportunities, and triggers the right follow-up at the right moment. Your sales and success teams spend time on conversations instead of data entry — and trust the pipeline they're looking at.",
    ],
    sections: [
      {
        heading: "Why most CRMs underperform",
        body: [
          "The problem with most CRMs isn't the software — it's the manual work needed to keep them useful. Records go stale, data gets inconsistent, and follow-ups get forgotten. Automation fixes this at the root: leads flow in enriched, activities log themselves, and stages update from real signals, so accuracy no longer depends on discipline alone.",
        ],
      },
      {
        heading: "Intelligent lead scoring and routing",
        body: [
          "Not every lead deserves equal attention. We build automated scoring that weighs behavior, profile fit, and engagement to surface the opportunities most likely to convert, routing high-value leads instantly to the right rep. With AI, scoring gets sharper by reading the intent behind inbound messages.",
        ],
      },
      {
        heading: "Automated nurturing and follow-up",
        body: [
          "Deals are lost to silence more often than rejection. We design follow-up sequences that send timely, relevant messages, schedule reminders, and re-engage dormant contacts using the data already in your CRM — driven by real customer behavior so they feel helpful, not spammy.",
        ],
      },
    ],
    capabilities: [
      "Automatic lead capture and enrichment",
      "Data cleaning and deduplication",
      "AI-assisted lead scoring and prioritization",
      "Instant routing to the right rep",
      "Automated nurture and follow-up sequences",
      "Pipeline stage updates from real signals",
    ],
    useCases: [
      "Sales teams eliminating manual data entry",
      "Marketing teams nurturing leads at scale",
      "Success teams tracking renewals and health",
      "Founders wanting a trustworthy pipeline view",
    ],
    benefits: [
      "Cleaner, more reliable CRM data",
      "Faster response to high-value leads",
      "Fewer lost deals from missed follow-ups",
      "More selling time, less admin",
    ],
    process: [
      { step: "CRM audit", detail: "We review your data, pipeline, and current gaps." },
      { step: "Automation design", detail: "We map capture, scoring, routing, and nurture flows." },
      { step: "Integrate & build", detail: "We connect your sources and automate the busywork." },
      { step: "Optimize", detail: "We tune scoring and sequences based on results." },
    ],
    techStack: ["HubSpot", "Salesforce", "Node.js", "Python", "OpenAI", "Webhooks", "PostgreSQL"],
    faqs: [
      { q: "Which CRMs do you support?", a: "We work with major platforms like HubSpot and Salesforce, as well as custom CRMs via their APIs." },
      { q: "Will this clean our existing data?", a: "Yes. We can deduplicate, enrich, and standardize existing records as part of the setup." },
      { q: "Is lead scoring customizable?", a: "Absolutely. We tailor scoring to your definition of a good lead and refine it over time." },
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    category: "AI Automation",
    tagline: "Turn scattered data into clear, trustworthy dashboards and answers that drive better decisions.",
    gradient: "from-amber-500/30 via-orange-600/20 to-slate-900",
    accent: "text-amber-300",
    intro: [
      "Business Intelligence turns the raw data scattered across your tools into clear, trustworthy insight leaders can act on. We unify your data sources, model them into a clean structure, and surface them through dashboards and AI-powered analysis — so the right people see the right numbers at the right time and can ask follow-up questions in plain language.",
    ],
    sections: [
      {
        heading: "From scattered spreadsheets to a single source of truth",
        body: [
          "The typical reporting process — exporting from the CRM, pulling from finance, stitching it all into a spreadsheet that's out of date the moment it's done — is slow and error-prone. We replace it with an automated pipeline that pulls from every source on a schedule, cleans the data, and stores it in one structured warehouse every report draws from.",
        ],
      },
      {
        heading: "Dashboards designed for decisions",
        body: [
          "A dashboard is only useful if it answers real questions, so we build each view around the decisions your team actually makes — highlighting what's working, what needs attention, and what's trending the wrong way. We favor clarity over clutter so the most important signal is obvious at a glance, with the ability to drill deeper when needed.",
        ],
      },
      {
        heading: "Ask your data questions in plain language",
        body: [
          "By layering AI over your structured data, we let your team ask questions in plain language and get an accurate answer with the supporting chart — no queries, no waiting on an analyst. Answers stay grounded in your governed data so they remain accurate and trustworthy.",
        ],
      },
    ],
    capabilities: [
      "Automated data pipelines from all your tools",
      "Data cleaning, modeling, and warehousing",
      "Interactive dashboards and scheduled reports",
      "Conversational, natural-language analytics",
      "KPI tracking and alerting on anomalies",
      "Role-based access to the right metrics",
    ],
    useCases: [
      "Executive dashboards for leadership",
      "Revenue and sales performance analytics",
      "Operational and support metrics",
      "Marketing attribution and ROI tracking",
    ],
    benefits: [
      "One reliable source of truth",
      "Faster, evidence-based decisions",
      "Hours saved on manual reporting",
      "Insight accessible to the whole team",
    ],
    process: [
      { step: "Source mapping", detail: "We identify every system holding relevant data." },
      { step: "Pipeline & modeling", detail: "We build automated pipelines and a clean data model." },
      { step: "Dashboard design", detail: "We craft views around real decisions." },
      { step: "Enable & train", detail: "We roll out access and conversational analytics." },
    ],
    techStack: ["PostgreSQL", "BigQuery", "dbt", "Python", "Metabase", "Power BI", "OpenAI"],
    faqs: [
      { q: "Can you combine data from many tools?", a: "Yes. We build pipelines that unify CRM, finance, product, and marketing data into one model." },
      { q: "Do we need technical staff to use it?", a: "No. Dashboards and natural-language analytics are designed for non-technical users." },
      { q: "How current is the data?", a: "We schedule refreshes to match your needs, from daily to near real-time." },
    ],
  },
  {
    slug: "llm-integration",
    title: "LLM Integration",
    category: "AI Automation",
    tagline: "Embed large language models into your products and workflows securely, reliably, and cost-effectively.",
    gradient: "from-fuchsia-500/30 via-purple-600/20 to-slate-900",
    accent: "text-fuchsia-300",
    intro: [
      "Large language models are powerful, but turning their raw capability into a dependable feature inside your product or workflow takes real engineering. LLM integration connects these models to your systems accurately, securely, and cost-effectively — with the guardrails, monitoring, and controls that make them safe to run in production.",
    ],
    sections: [
      {
        heading: "The gap between a demo and production",
        body: [
          "It's easy to build an impressive LLM demo; it's much harder to build one that behaves reliably for thousands of users, handles edge cases, protects sensitive data, and controls cost. We focus on closing that gap — validating inputs and outputs, constraining the model to its intended use, and falling back sensibly when it's uncertain.",
        ],
      },
      {
        heading: "Accuracy, grounding, and control",
        body: [
          "Left alone, a language model can produce confident but incorrect answers. We ground models in your real data through retrieval, structured prompting, and validation so outputs reflect your source of truth, and we constrain them to expected formats and business rules — combining natural intelligence with deterministic checks.",
        ],
      },
      {
        heading: "Managing cost, speed, and privacy",
        body: [
          "Running LLMs at scale means trade-offs between cost, latency, and quality. We navigate them deliberately — choosing the right model per task, caching, and routing simple requests to cheaper models. For sensitive workloads we design for privacy and compliance, using private or self-hosted models where appropriate.",
        ],
      },
    ],
    capabilities: [
      "Production-grade API integration and orchestration",
      "Grounding models in your data for accuracy",
      "Structured output and format enforcement",
      "Prompt engineering and versioning",
      "Cost, latency, and rate-limit management",
      "Monitoring, logging, and safety guardrails",
    ],
    useCases: [
      "AI-powered features inside your product",
      "Automated content and document generation",
      "Summarization and data extraction",
      "Intelligent search and question answering",
    ],
    benefits: [
      "Reliable AI features users can trust",
      "Predictable, controlled AI costs",
      "Accurate outputs grounded in your data",
      "Secure, compliant deployment",
    ],
    process: [
      { step: "Use-case scoping", detail: "We define the task, success criteria, and constraints." },
      { step: "Architecture", detail: "We design grounding, guardrails, and fallbacks." },
      { step: "Build & evaluate", detail: "We implement and rigorously test accuracy." },
      { step: "Deploy & monitor", detail: "We ship with cost controls and observability." },
    ],
    techStack: ["OpenAI", "Anthropic", "LangChain", "Node.js", "Python", "Vector DBs", "Redis"],
    faqs: [
      { q: "Which models do you use?", a: "We select per use case across providers like OpenAI and Anthropic, or self-hosted models for privacy." },
      { q: "How do you control costs?", a: "Through model routing, caching, and choosing the right model for each task, with usage monitoring." },
      { q: "Is our data safe?", a: "Yes. We design for privacy and compliance, including private or self-hosted options for sensitive data." },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    category: "AI Automation",
    tagline: "Autonomous assistants that plan, use tools, and complete multi-step tasks on your behalf.",
    gradient: "from-rose-500/30 via-red-600/20 to-slate-900",
    accent: "text-rose-300",
    intro: [
      "AI agents go beyond chatbots and single-shot automations. Given a goal, an agent breaks it into steps, uses your tools and systems to gather information, makes decisions, and carries a multi-step task through to completion. We build agents for concrete, valuable jobs — with the boundaries, oversight, and safety controls that make autonomy trustworthy.",
    ],
    sections: [
      {
        heading: "What makes an agent different",
        body: [
          "A traditional automation follows a fixed path; an agent decides its own path toward a goal — reasoning about what's needed, choosing which tool to use next, interpreting the result, and adjusting. This lets agents handle tasks whose exact steps can't be scripted in advance because they depend on what the agent discovers along the way.",
        ],
      },
      {
        heading: "Tools, memory, and coordination",
        body: [
          "An agent's power comes from the tools it can use, so we give it well-defined access to search, databases, internal APIs, and your applications, while controlling exactly what it's permitted to do. We add memory and state so it can work through long, multi-step objectives, and coordinate multiple specialized agents for larger jobs.",
        ],
      },
      {
        heading: "Autonomy with guardrails",
        body: [
          "Autonomy without control is a liability. Every agent operates within clear boundaries — what actions it may take and when it must pause for human approval — and stays fully observable, so you can review its reasoning, tools, and decisions. That transparency plus strict permissions is what makes real responsibility safe to delegate.",
        ],
      },
    ],
    capabilities: [
      "Goal-driven planning and multi-step execution",
      "Tool use across your systems and APIs",
      "Memory and state for long-running tasks",
      "Multi-agent coordination for complex jobs",
      "Human approval checkpoints for key actions",
      "Full observability of reasoning and actions",
    ],
    useCases: [
      "Automated research and information gathering",
      "End-to-end processing of complex requests",
      "Cross-system task coordination",
      "Dynamic workflows too variable for fixed rules",
    ],
    benefits: [
      "Delegate entire tasks, not just steps",
      "Handle dynamic, unpredictable work",
      "Scale capacity without scaling headcount",
      "Stay in control with guardrails and oversight",
    ],
    process: [
      { step: "Goal definition", detail: "We define the task, boundaries, and success criteria." },
      { step: "Tool design", detail: "We give the agent safe access to needed systems." },
      { step: "Build & constrain", detail: "We implement planning, memory, and guardrails." },
      { step: "Supervise & refine", detail: "We monitor behavior and tighten reliability." },
    ],
    techStack: ["LangGraph", "OpenAI", "Anthropic", "Python", "Node.js", "Vector DBs", "Redis"],
    faqs: [
      { q: "Are agents safe to run autonomously?", a: "We build strict boundaries, approval checkpoints, and monitoring so autonomy stays controlled and auditable." },
      { q: "What tasks suit an agent?", a: "Multi-step, dynamic tasks like research, complex request handling, and cross-system coordination." },
      { q: "Can we see what the agent did?", a: "Yes. Every agent is observable — you can review its reasoning, tools used, and actions taken." },
    ],
  },
  {
    slug: "rag-systems",
    title: "RAG Systems",
    category: "AI Automation",
    tagline: "Give AI accurate, up-to-date answers grounded in your own documents and knowledge.",
    gradient: "from-teal-500/30 via-cyan-600/20 to-slate-900",
    accent: "text-teal-300",
    intro: [
      "Retrieval-Augmented Generation (RAG) lets an AI answer questions using your own knowledge — accurately and with citations. Instead of relying only on what a model learned in training, a RAG system retrieves the most relevant passages from your documents at the moment of the question and grounds its answer in them, turning a general model into an expert on your business.",
    ],
    sections: [
      {
        heading: "Why RAG matters",
        body: [
          "A language model alone doesn't know your private information, and its knowledge is frozen at training time — so it will decline or invent an answer about your latest policy or product. RAG removes both limits by retrieving from your knowledge base at query time, updating automatically as your documents change, and citing exactly where each fact came from.",
        ],
      },
      {
        heading: "Engineering retrieval that actually works",
        body: [
          "A RAG system lives or dies on retrieval — fetch the wrong passages and even the best model gives a poor answer. We invest in this layer: chunking documents intelligently, choosing the right embeddings, handling messy real-world formats, and keeping the index fresh with pipelines that ingest new content automatically.",
        ],
      },
      {
        heading: "Accurate, cited, and trustworthy answers",
        body: [
          "On top of solid retrieval, we design the generation layer to stay faithful to the retrieved evidence — answering only from provided sources, acknowledging when the knowledge base has no answer, and citing back to the source documents. The result is an assistant your team can rely on.",
        ],
      },
    ],
    capabilities: [
      "Ingestion of documents in many formats",
      "Intelligent chunking and embedding",
      "High-quality semantic retrieval",
      "Answers grounded in your sources with citations",
      "Automatic index updates as content changes",
      "Access controls on sensitive knowledge",
    ],
    useCases: [
      "Internal knowledge assistant for staff",
      "Customer support grounded in your docs",
      "Contract and document Q&A",
      "Research and policy lookup",
    ],
    benefits: [
      "Accurate answers from your own knowledge",
      "Always current without retraining",
      "Citations that make answers verifiable",
      "Faster access to institutional knowledge",
    ],
    process: [
      { step: "Content audit", detail: "We inventory the knowledge the system will use." },
      { step: "Ingestion pipeline", detail: "We build parsing, chunking, and embedding." },
      { step: "Retrieval tuning", detail: "We optimize search quality for your content." },
      { step: "Grounded answers", detail: "We design faithful, cited generation." },
    ],
    techStack: ["Pinecone", "Weaviate", "OpenAI", "LangChain", "Python", "PostgreSQL", "Redis"],
    faqs: [
      { q: "How is this different from a chatbot?", a: "A RAG system grounds every answer in your retrieved documents and can cite sources, ensuring accuracy." },
      { q: "Does it stay up to date?", a: "Yes. Our ingestion pipelines update the index automatically as your content changes." },
      { q: "Can we restrict sensitive content?", a: "Yes. We enforce access controls so users only retrieve knowledge they are allowed to see." },
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    category: "AI Automation",
    tagline: "Teach software to see — detecting, reading, and understanding images and video at scale.",
    gradient: "from-blue-500/30 via-indigo-600/20 to-slate-900",
    accent: "text-blue-300",
    intro: [
      "Computer vision gives software the ability to interpret images and video the way a person would — recognizing objects, reading text, detecting defects, counting, and understanding scenes. We build vision solutions that turn cameras and image data into reliable, structured information your systems can act on, engineered to work under real-world conditions.",
    ],
    sections: [
      {
        heading: "Turning pixels into decisions",
        body: [
          "Businesses generate huge amounts of visual information that's reviewed manually or not at all. Computer vision converts raw pixels into structured data — this item has a defect, this document contains these fields, this shelf is low — which can then drive automation just like any other input. The camera becomes a sensor, and the sensor becomes a decision.",
        ],
      },
      {
        heading: "Built for real-world conditions",
        body: [
          "Vision systems that work in a demo often fail in the field, where lighting, angles, occlusion, and image quality vary. We engineer for these conditions from the start, tailor models to your specific products or documents using your own images, and design the system to flag ambiguous cases for human review rather than making a confident mistake.",
        ],
      },
      {
        heading: "From capture to integration",
        body: [
          "A vision solution is more than a model — it includes capturing images reliably, processing them efficiently, extracting the right information, and delivering it into the systems where it creates value. We build the full pipeline and choose on-device, server, or cloud processing based on your speed, privacy, and scale needs.",
        ],
      },
    ],
    capabilities: [
      "Object detection, classification, and counting",
      "Optical character recognition and document parsing",
      "Defect and anomaly detection",
      "Image and video analysis pipelines",
      "Custom models trained on your data",
      "Integration into your apps and systems",
    ],
    useCases: [
      "Automated quality inspection",
      "Document and form digitization",
      "Inventory and shelf monitoring",
      "Safety and activity monitoring",
    ],
    benefits: [
      "Automate visual inspection at scale",
      "Eliminate manual data entry from documents",
      "Catch defects and issues faster",
      "Turn cameras into real-time data sources",
    ],
    process: [
      { step: "Feasibility & data", detail: "We assess the task and gather representative images." },
      { step: "Model selection", detail: "We choose or train models for your conditions." },
      { step: "Pipeline build", detail: "We build capture, processing, and integration." },
      { step: "Validate & deploy", detail: "We test in the real environment and ship." },
    ],
    techStack: ["PyTorch", "OpenCV", "YOLO", "Tesseract", "Python", "ONNX", "Docker"],
    faqs: [
      { q: "Do you train custom models?", a: "Yes. When accuracy on your specific products or documents matters, we train models on your data." },
      { q: "Will it work in our environment?", a: "We engineer and validate for real-world conditions like lighting, angles, and image quality." },
      { q: "Where does processing run?", a: "On-device, on your servers, or in the cloud — chosen for your speed, privacy, and scale needs." },
    ],
  },
  {
    slug: "predictive-analytics",
    title: "Predictive Analytics",
    category: "AI Automation",
    tagline: "Use your data to forecast outcomes and act before events happen, not after.",
    gradient: "from-sky-500/30 via-blue-600/20 to-slate-900",
    accent: "text-sky-300",
    intro: [
      "Predictive analytics uses your historical data to forecast what's likely to happen next — which customers may churn, how demand will trend, which leads will convert, or when equipment might fail. We build models that fit real decisions and deliver their predictions as clear scores, alerts, and recommendations inside the tools where decisions actually get made.",
    ],
    sections: [
      {
        heading: "From hindsight to foresight",
        body: [
          "Most reporting is backward-looking — last month's revenue, last quarter's churn — and by the time a problem shows up it has often already cost you. Predictive analytics shifts you from reacting to anticipating: intervene with at-risk customers before they leave, plan around accurate demand forecasts, and focus effort on the leads most likely to convert.",
        ],
      },
      {
        heading: "Models grounded in your reality",
        body: [
          "A model is only as good as the data and thinking behind it. We start from the decision you want to improve, work backward to the data that carries real signal, and validate rigorously against actual outcomes. We're also honest about uncertainty, communicating each prediction's confidence so your team can weigh it appropriately.",
        ],
      },
      {
        heading: "Predictions that drive action",
        body: [
          "The most common failure of analytics is insight nobody acts on. We deliver predictions where decisions happen — a churn score in your CRM, a demand forecast in your planning tool, a high-value lead alert to the right rep. And we monitor performance continuously, refreshing models as conditions shift so they don't quietly degrade.",
        ],
      },
    ],
    capabilities: [
      "Churn and retention prediction",
      "Demand and revenue forecasting",
      "Lead and opportunity scoring",
      "Anomaly and risk detection",
      "Predictions embedded into your tools",
      "Continuous monitoring and model refresh",
    ],
    useCases: [
      "Reducing customer churn proactively",
      "Forecasting demand and inventory",
      "Prioritizing sales opportunities",
      "Anticipating operational risks",
    ],
    benefits: [
      "Act before problems occur",
      "Plan with greater confidence",
      "Focus effort where it pays off",
      "Turn data into a lasting advantage",
    ],
    process: [
      { step: "Decision framing", detail: "We define the outcome and the action it should drive." },
      { step: "Data & modeling", detail: "We build and rigorously validate models." },
      { step: "Integration", detail: "We deliver predictions into your workflows." },
      { step: "Monitor & refresh", detail: "We track accuracy and update models over time." },
    ],
    techStack: ["Python", "scikit-learn", "XGBoost", "PyTorch", "PostgreSQL", "MLflow", "Airflow"],
    faqs: [
      { q: "How much data do we need?", a: "It varies by problem. We assess your data early and are honest about what is feasible." },
      { q: "How accurate are predictions?", a: "We validate against real outcomes and communicate confidence clearly rather than overpromising." },
      { q: "Will predictions reach our team?", a: "Yes. We embed scores and alerts directly into the tools where decisions are made." },
    ],
  },
];

export function getAIService(slug: string): AIService | undefined {
  return aiServices.find((service) => service.slug === slug);
}
