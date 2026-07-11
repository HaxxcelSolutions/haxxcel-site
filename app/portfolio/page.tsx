import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import PortfolioGallery from "@/components/portfolio/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Haxxcel Solutions' portfolio — AI chatbots, custom software, and web development projects that deliver real business results.",
};

type Project = {
  title: string;
  category: string;
  summary: string;
  href: string;
  gradient: string;
  accent: string;
  images: string[];
  features: string[];
  timeline: { phase: string; duration: string }[];
  teamSize: string;
  teamRoles: string;
  techStack: string[];
  challenges: string[];
  results: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    title: "Smart Task & Project Management System",
    category: "Custom Software",
    summary:
      "A collaborative project and task management platform where teams plan projects, assign tasks with priorities, track progress in real time, and get automatic overdue detection — all from clean admin and user dashboards.",
    href: "/case-studies",
    gradient: "from-fuchsia-500/30 via-purple-600/20 to-slate-900",
    accent: "text-fuchsia-300",
    images: [
      "/images/portfolio/projectmgmt/pm1.png",
      "/images/portfolio/projectmgmt/pm2.png",
      "/images/portfolio/projectmgmt/pm3.png",
      "/images/portfolio/projectmgmt/pm4.png",
    ],
    features: [
      "Project and task creation with due dates and statuses",
      "Assign tasks to users with priorities and collaboration",
      "Visual task progress tracking (0–100%)",
      "Automatic overdue detection and status updates",
      "Filtering, search, and date-based views",
      "Admin and user dashboards with notifications",
    ],
    timeline: [
      { phase: "Requirements", duration: "4 days" },
      { phase: "Development", duration: "3 weeks" },
      { phase: "Testing & launch", duration: "1 week" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Developer, backend engineer, QA",
    techStack: ["Django", "Python", "Tailwind CSS", "SQLite"],
    challenges: [
      "Keeping task status and progress in sync in real time",
      "Automating overdue detection reliably",
      "Designing clean role-based admin and user dashboards",
    ],
    results: [
      { label: "Tasks", value: "Tracked" },
      { label: "Progress", value: "Real-time" },
      { label: "Collaboration", value: "Streamlined" },
    ],
  },
  {
    title: "Restaurant POS System",
    category: "Custom Software",
    summary:
      "A full restaurant point-of-sale system for taking orders, managing the menu, tracking table status, and processing payments — with a live dashboard and print-ready receipts.",
    href: "/case-studies",
    gradient: "from-orange-500/30 via-amber-600/20 to-slate-900",
    accent: "text-orange-300",
    images: [
      "/images/portfolio/pos/pos1.png",
      "/images/portfolio/pos/pos2.png",
      "/images/portfolio/pos/pos3.png",
      "/images/portfolio/pos/pos4.png",
    ],
    features: [
      "Dashboard overview of orders, sales, and table status",
      "Menu and category management",
      "Order taking with live totals and tax calculation",
      "Table status management (available, occupied, reserved)",
      "Billing and payments (cash, card, digital)",
      "Print-ready receipts and order history",
    ],
    timeline: [
      { phase: "Requirements", duration: "4 days" },
      { phase: "Development", duration: "3 weeks" },
      { phase: "Testing & deploy", duration: "1 week" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Developer, backend engineer, QA",
    techStack: ["Django", "Python", "Tailwind CSS", "SQLite"],
    challenges: [
      "Keeping order and table status updated in real time",
      "Calculating subtotals, tax, and totals accurately",
      "Designing a fast, simple workflow for busy staff",
    ],
    results: [
      { label: "Orders", value: "Centralized" },
      { label: "Tables", value: "Live status" },
      { label: "Payments", value: "Tracked" },
    ],
  },
  {
    title: "Elite Scholars Academy — School Management Portal",
    category: "Custom Software",
    summary:
      "A unified school management and parent portal that brings academic progress and finances together — classes, students, marks, fee ledgers, and payments — with dedicated admin and parent experiences.",
    href: "/case-studies",
    gradient: "from-violet-500/30 via-purple-600/20 to-slate-900",
    accent: "text-violet-300",
    images: [
      "/images/portfolio/academy/academy1.jpeg",
      "/images/portfolio/academy/academy2.jpeg",
      "/images/portfolio/academy/academy3.jpeg",
    ],
    features: [
      "Secure unified login for admins and parents",
      "Admin console for classes, sections, students, and parents",
      "Test categories, marks registry, and performance trends",
      "Tuition ledgers, pending fees, and payment tracking",
      "Parent portal with per-child academic and fee records",
      "KPI dashboard with a real-time academy overview",
    ],
    timeline: [
      { phase: "Requirements", duration: "5 days" },
      { phase: "Development", duration: "3 weeks" },
      { phase: "Testing & launch", duration: "1 week" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Designer, developer, backend engineer",
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
    challenges: [
      "Unifying academic and financial data in one portal",
      "Designing separate, role-based admin and parent experiences",
      "Building a reusable, API-ready structure for future mobile apps",
    ],
    results: [
      { label: "Academics & fees", value: "Unified" },
      { label: "Access", value: "Role-based" },
      { label: "Dashboard", value: "Real-time" },
    ],
  },
  {
    title: "Supplier & Distribution Management System",
    category: "Custom Software",
    summary:
      "A distribution management system that tracks delivery areas, per-area pricing, supplier assignments, and delivery history — with assigned, delivered, and remaining quantities all in one admin dashboard.",
    href: "/case-studies",
    gradient: "from-indigo-500/30 via-blue-600/20 to-slate-900",
    accent: "text-indigo-300",
    images: [
      "/images/portfolio/distribution/distribution1.jpeg",
      "/images/portfolio/distribution/distribution2.jpeg",
      "/images/portfolio/distribution/distribution3.jpeg",
    ],
    features: [
      "Secure admin login and centralized dashboard",
      "Area management with per-area pricing",
      "Assign suppliers to multiple delivery areas",
      "Track assigned, delivered, and remaining quantities",
      "Customers, suppliers, invoices, and reports in one place",
      "Assignment history with live status tracking",
    ],
    timeline: [
      { phase: "Requirements", duration: "4 days" },
      { phase: "Development", duration: "3 weeks" },
      { phase: "Testing & deploy", duration: "1 week" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Developer, backend engineer, QA",
    techStack: ["PHP", "MySQL", "Bootstrap", "REST API"],
    challenges: [
      "Modeling suppliers, areas, and per-unit pricing accurately",
      "Tracking assigned vs delivered vs remaining quantities",
      "Keeping the admin workflow simple for daily operations",
    ],
    results: [
      { label: "Distribution", value: "Centralized" },
      { label: "Assignments", value: "Tracked" },
      { label: "Reporting", value: "Real-time" },
    ],
  },
  {
    title: "Frosty Connections AI Listing Generator",
    category: "AI Solutions",
    summary:
      "An AI-powered admin panel that generates polished business listings from just a business name or website URL — scraping key details, drafting the copy, and queuing it for quick review and approval.",
    href: "/case-studies",
    gradient: "from-cyan-500/30 via-sky-600/20 to-slate-900",
    accent: "text-cyan-300",
    images: [
      "/images/portfolio/frosty/frosty1.png",
      "/images/portfolio/frosty/frosty2.png",
      "/images/portfolio/frosty/frosty3.png",
      "/images/portfolio/frosty/frosty4.png",
    ],
    features: [
      "Generate a full listing from a business name or website URL",
      "AI-drafted copy that reads clean and professional",
      "At-a-glance dashboard: total generated, approved, needs review",
      "Review-and-approve workflow before anything goes live",
      "Fast, single-page admin panel with real-time status",
    ],
    timeline: [
      { phase: "Discovery", duration: "3 days" },
      { phase: "Build & integrate", duration: "1.5 weeks" },
      { phase: "Testing & launch", duration: "4 days" },
    ],
    teamSize: "2 specialists",
    teamRoles: "AI engineer, developer",
    techStack: ["OpenAI", "Next.js", "Web Scraping", "Railway"],
    challenges: [
      "Pulling accurate details from varied, messy websites",
      "Keeping AI-generated copy consistent and on-brand",
      "Designing a simple review flow for non-technical users",
    ],
    results: [
      { label: "Listing creation", value: "Automated" },
      { label: "Review flow", value: "Built-in" },
      { label: "Turnaround", value: "Instant" },
    ],
  },
  {
    title: "AI-Powered WhatsApp Chatbot",
    category: "AI Solutions",
    summary:
      "An intelligent WhatsApp chatbot that handles customer queries 24/7 with natural language processing, giving instant answers and freeing up the support team.",
    href: "/case-studies",
    gradient: "from-blue-500/30 via-indigo-600/20 to-slate-900",
    accent: "text-blue-300",
    images: [
      "https://i.postimg.cc/Sx9xCVVk/wabot1.jpg",
      "https://i.postimg.cc/NFVQrrH1/wabot2.jpg",
      "https://i.postimg.cc/R0R9LYtC/wabot3.jpg",
      "https://i.postimg.cc/wTmpGMNS/wabot4.jpg",
    ],
    features: [
      "24/7 automated customer support on WhatsApp",
      "Natural language understanding for human-like replies",
      "Retrieval-augmented answers from your knowledge base",
      "Smooth handoff to a human agent when needed",
      "Reduced response time and support workload",
    ],
    timeline: [
      { phase: "Discovery", duration: "3 days" },
      { phase: "Build & train", duration: "1.5 weeks" },
      { phase: "Testing & launch", duration: "4 days" },
    ],
    teamSize: "2 specialists",
    teamRoles: "AI engineer, QA",
    techStack: ["RAG", "NLP", "OpenAI", "WhatsApp API"],
    challenges: [
      "Training the bot on accurate, up-to-date knowledge",
      "Handling varied, real-world customer phrasing",
      "Ensuring a smooth handoff to human agents",
    ],
    results: [
      { label: "Support availability", value: "24/7" },
      { label: "Response time", value: "Instant" },
      { label: "Manual replies", value: "Reduced" },
    ],
  },
  {
    title: "Kraftcreatives Website",
    category: "Web Development",
    summary:
      "A fully responsive website with AI-powered service recommendations and a smooth, modern browsing experience.",
    href: "/case-studies",
    gradient: "from-emerald-500/30 via-teal-600/20 to-slate-900",
    accent: "text-emerald-300",
    images: [
      "https://i.postimg.cc/VsZ2qC7v/image.png",
      "https://i.postimg.cc/wjrhF9CV/image.png",
      "https://i.postimg.cc/25FSyw7T/image.png",
      "https://i.postimg.cc/0Nq7hVNP/image.png",
    ],
    features: [
      "Fully responsive, mobile-first design",
      "AI-powered service recommendations",
      "Fast, server-rendered pages",
      "Clean, conversion-focused layout",
      "SEO-ready structure",
    ],
    timeline: [
      { phase: "Design", duration: "4 days" },
      { phase: "Development", duration: "2 weeks" },
      { phase: "QA & launch", duration: "4 days" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Designer, developer, QA",
    techStack: ["Next.js", "Tailwind CSS", "SSR", "Recommendations"],
    challenges: [
      "Delivering relevant, useful recommendations",
      "Keeping the design clean yet engaging",
      "Optimizing performance across devices",
    ],
    results: [
      { label: "Responsive", value: "100%" },
      { label: "Recommendations", value: "AI" },
      { label: "Experience", value: "Seamless" },
    ],
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    summary:
      "A fully responsive portfolio website with a modern, clean design and a smooth, seamless experience.",
    href: "/case-studies",
    gradient: "from-emerald-500/30 via-teal-600/20 to-slate-900",
    accent: "text-emerald-300",
    images: [
      "https://i.postimg.cc/Y05gZdg5/image.png",
      "https://i.postimg.cc/43WLKHrp/image.png",
      "https://i.postimg.cc/7Y1NGTzw/image.png",
      "https://i.postimg.cc/3JhXTJqw/image.png",
    ],
    features: [
      "Modern, clean UI",
      "Fully responsive layout",
      "Smooth animations and interactions",
      "Fast, server-rendered pages",
      "Clear project showcase",
    ],
    timeline: [
      { phase: "Design", duration: "3 days" },
      { phase: "Development", duration: "1 week" },
      { phase: "Polish & launch", duration: "3 days" },
    ],
    teamSize: "2 specialists",
    teamRoles: "Designer, developer",
    techStack: ["Next.js", "Tailwind CSS", "SSR"],
    challenges: [
      "Presenting work in a memorable way",
      "Balancing visual polish with performance",
      "Achieving a distinctive, modern feel",
    ],
    results: [
      { label: "Design", value: "Modern" },
      { label: "Responsive", value: "100%" },
      { label: "Experience", value: "Seamless" },
    ],
  },
  {
    title: "Shop Management System",
    category: "Custom Software",
    summary:
      "A comprehensive software solution to manage inventory, sales and payments, and track profit — all from one place.",
    href: "/case-studies",
    gradient: "from-amber-500/30 via-yellow-600/20 to-slate-900",
    accent: "text-amber-300",
    images: [
      "https://i.postimg.cc/3xQFgf7f/cs1.jpg",
      "https://i.postimg.cc/26t4322t/cs2.jpg",
      "https://i.postimg.cc/rFxPXrwg/cs3.jpg",
      "https://i.postimg.cc/8CKyBdZD/cs4.jpg",
    ],
    features: [
      "Inventory management and stock tracking",
      "Sales and payment recording",
      "Profit and performance tracking",
      "Simple, easy-to-use interface",
      "Reliable, centralized data",
    ],
    timeline: [
      { phase: "Requirements", duration: "4 days" },
      { phase: "Development", duration: "3 weeks" },
      { phase: "Testing & deploy", duration: "1 week" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Developer, backend engineer, QA",
    techStack: ["Custom Software", "Database", "Reporting"],
    challenges: [
      "Modeling inventory, sales and payments accurately",
      "Keeping the interface simple for daily use",
      "Ensuring reliable, consistent records",
    ],
    results: [
      { label: "Inventory", value: "Managed" },
      { label: "Sales", value: "Tracked" },
      { label: "Profit", value: "Visible" },
    ],
  },
  {
    title: "E-commerce Website",
    category: "Web Development",
    summary:
      "A fully responsive e-commerce website with integrated payments and a smooth, seamless shopping experience.",
    href: "/case-studies",
    gradient: "from-emerald-500/30 via-teal-600/20 to-slate-900",
    accent: "text-emerald-300",
    images: [
      "https://i.postimg.cc/PJHQGhQ1/image.png",
      "https://i.postimg.cc/sgbSdsVs/image.png",
      "https://i.postimg.cc/Rh8C6Cpn/image.png",
      "https://i.postimg.cc/fTNDPFnZ/image.png",
    ],
    features: [
      "Fully responsive shopping experience",
      "Integrated online payments",
      "Fast, server-rendered pages",
      "Clean product browsing and checkout",
      "SEO-ready structure",
    ],
    timeline: [
      { phase: "Design", duration: "4 days" },
      { phase: "Development", duration: "2.5 weeks" },
      { phase: "QA & launch", duration: "5 days" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Designer, developer, QA",
    techStack: ["Next.js", "Payments", "SSR", "Tailwind CSS"],
    challenges: [
      "Integrating secure payments smoothly",
      "Delivering a fast checkout flow",
      "Keeping the design responsive across devices",
    ],
    results: [
      { label: "Responsive", value: "100%" },
      { label: "Payments", value: "Integrated" },
      { label: "Experience", value: "Seamless" },
    ],
  },
  {
    title: "Deeray — Minimal Home Essentials Store",
    category: "Web Development",
    summary:
      "A refined, editorial e-commerce store for curated home essentials — with a minimalist aesthetic, collection-based browsing, product pages, cart and checkout, and Pakistan-wide delivery.",
    href: "/case-studies",
    gradient: "from-slate-600/30 via-slate-800/20 to-slate-900",
    accent: "text-slate-300",
    images: [
      "/images/portfolio/deeray/deeray1.png",
      "/images/portfolio/deeray/deeray2.png",
      "/images/portfolio/deeray/deeray3.png",
      "/images/portfolio/deeray/deeray4.png",
    ],
    features: [
      "Editorial, minimalist storefront design",
      "Collection-based browsing (Pure, Shield, Aura, Carry)",
      "Product pages with clean pricing and imagery",
      "Cart, checkout, and order tracking",
      "Fully responsive, fast, SEO-ready pages",
    ],
    timeline: [
      { phase: "Design", duration: "5 days" },
      { phase: "Development", duration: "2.5 weeks" },
      { phase: "QA & launch", duration: "5 days" },
    ],
    teamSize: "3 specialists",
    teamRoles: "Designer, developer, QA",
    techStack: ["Next.js", "Tailwind CSS", "E-commerce", "SSR"],
    challenges: [
      "Keeping the design minimal yet conversion-focused",
      "Building a smooth browse-to-checkout flow",
      "Optimizing product imagery and performance",
    ],
    results: [
      { label: "Design", value: "Editorial" },
      { label: "Responsive", value: "100%" },
      { label: "Experience", value: "Seamless" },
    ],
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          A closer look at the work we&apos;ve shipped.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A closer look at how we scope, build, and ship products — from the tech stack and team to the
          challenges we solved and the results we delivered.
        </p>
      </section>

      <div className="mt-16 space-y-16">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl card-cream shadow-2xl shadow-blue-950/20"
          >
            {/* Hero image */}
            <div className="relative h-56 w-full sm:h-72">
              <Image
                src={project.images[0]}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 mix-blend-multiply`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${project.accent}`}>
                  {project.category}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-white! sm:text-3xl">{project.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="max-w-3xl text-base leading-8 text-slate-300">{project.summary}</p>

              {/* Screenshots */}
              <PortfolioGallery title={project.title} images={project.images} />

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                {/* Features */}
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Key features</h3>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${project.accent} bg-current`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Timeline</h3>
                  <ol className="mt-4 space-y-3">
                    {project.timeline.map((item, index) => (
                      <li key={item.phase} className="flex items-center gap-4 rounded-xl card-cream-soft p-3">
                        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111844]/10 text-xs font-semibold ${project.accent}`}>
                          {index + 1}
                        </span>
                        <span className="flex-1 text-sm font-medium text-[#111844]">{item.phase}</span>
                        <span className="text-xs text-[#5a6493]">{item.duration}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Team + Tech stack */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl card-cream-soft p-5">
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Team size</h3>
                  <p className="mt-3 text-2xl font-semibold text-white">{project.teamSize}</p>
                  <p className="mt-1 text-sm text-slate-400">{project.teamRoles}</p>
                </div>
                <div className="rounded-2xl card-cream-soft p-5">
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Tech stack</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#4b5694]/20 bg-[#111844]/5 px-3 py-1 text-xs font-medium text-[#4b5694]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Challenges</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {project.challenges.map((challenge) => (
                    <div key={challenge} className="rounded-2xl card-cream-soft p-4 text-sm leading-7 text-[#3d4675]">
                      {challenge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Results</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {project.results.map((result) => (
                    <div key={result.label} className="rounded-2xl card-cream-soft p-5 text-center">
                      <p className={`text-3xl font-semibold ${project.accent}`}>{result.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/case-studies#${slugify(project.title)}`}
                className="mt-10 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View full case study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
