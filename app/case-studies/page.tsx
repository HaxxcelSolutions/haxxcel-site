import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real outcomes from Haxxcel Solutions — how we solved business challenges with AI automation, custom software, and web development.",
};

const caseStudies = [
  {
    title: "Smart Task & Project Management System",
    industry: "Productivity & Collaboration",
    projectType: "Custom Software",
    timeline: "~4 Weeks",
    problem: "Teams were tracking projects and tasks across scattered tools and spreadsheets, making it hard to assign work, follow priorities, and know what was overdue.",
    solution: "Built a collaborative project and task management platform with task assignment, priorities, visual progress tracking (0–100%), automatic overdue detection, date-based views, and separate admin and user dashboards with notifications.",
    result: "Teams now plan projects, assign and prioritize tasks, and see progress and overdue work in real time from a single, clean dashboard.",
    metrics: ["Real-time progress tracking", "Automatic overdue detection", "Role-based dashboards"],
    technologies: ["Django", "Python", "Tailwind CSS", "SQLite"],
  },
  {
    title: "Restaurant POS System",
    industry: "Food & Hospitality",
    projectType: "Custom Software",
    timeline: "~4 Weeks",
    problem: "The restaurant was taking orders, tracking tables, and handling billing manually, which slowed service and made totals and payments error-prone.",
    solution: "Developed a full point-of-sale system with menu and category management, order taking with live totals and tax, table status management, billing and payments (cash, card, digital), and print-ready receipts — all from a live dashboard.",
    result: "Order taking, table status, and payments are now centralized and fast, with accurate totals and a clear real-time view of the floor.",
    metrics: ["Orders centralized", "Live table status", "Payments tracked"],
    technologies: ["Django", "Python", "Tailwind CSS", "SQLite"],
  },
  {
    title: "Elite Scholars Academy — School Management Portal",
    industry: "Education",
    projectType: "Custom Software",
    timeline: "~4 Weeks",
    problem: "The academy was juggling academics and finances across separate tools — class records, student marks, fee ledgers, and parent updates all lived in different places, making day-to-day administration slow and error-prone.",
    solution: "Built a unified school management and parent portal with a role-based admin console for classes, students, marks, and fee ledgers, plus a dedicated parent portal for per-child academic progress and payments — backed by an API-ready data structure for future mobile apps.",
    result: "Academics and finances now live in one place, admins manage everything from a single KPI dashboard, and parents get a clear, real-time view of their children's progress and fees.",
    metrics: ["Academics & fees unified", "Role-based admin & parent access", "Real-time KPI dashboard"],
    technologies: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "Supplier & Distribution Management System",
    industry: "Distribution & Logistics",
    projectType: "Custom Software",
    timeline: "~4 Weeks",
    problem: "Managing suppliers, delivery areas, and per-area pricing by hand made it hard to track who was assigned where and how much had actually been delivered versus what remained.",
    solution: "Developed a centralized distribution management system to define areas and pricing, assign suppliers to multiple areas, and track assigned, delivered, and remaining quantities — with customers, invoices, reports, and full assignment history in one dashboard.",
    result: "Distribution operations are now centralized and transparent, with live status tracking on every assignment and clear reporting across suppliers and areas.",
    metrics: ["Centralized distribution", "Assignments fully tracked", "Real-time reporting"],
    technologies: ["PHP", "MySQL", "Bootstrap", "REST API"],
  },
  {
    title: "Frosty Connections AI Listing Generator",
    industry: "Business Directories",
    projectType: "AI Automation",
    timeline: "~3 Weeks",
    problem: "Creating business listings by hand was slow and repetitive — someone had to research each business, write the copy, and format it consistently before it could go live.",
    solution: "Built an AI-powered admin panel that generates a complete listing from just a business name or website URL, scraping key details and drafting clean copy, then queuing it in a review-and-approve dashboard.",
    result: "Listings are now created in seconds instead of hours, with a built-in review step that keeps quality high before anything is approved.",
    metrics: ["Listings generated instantly", "Review & approve workflow", "Consistent, on-brand copy"],
    technologies: ["OpenAI", "Next.js", "Web Scraping", "Railway"],
  },
  {
    title: "AI-Powered WhatsApp Chatbot",
    industry: "Customer Support",
    projectType: "AI Chatbot",
    timeline: "~3 Weeks",
    problem: "The business struggled to answer customer queries quickly and around the clock, with the support team overloaded by the same repetitive questions.",
    solution: "Built an intelligent WhatsApp chatbot with natural language processing and retrieval-augmented answers, handling common queries instantly and handing off to a human when needed.",
    result: "Customers now get instant, 24/7 answers on WhatsApp while the support team focuses on higher-value work.",
    metrics: ["24/7 automated support", "Instant response times", "Reduced manual replies"],
    technologies: ["RAG", "NLP", "OpenAI", "WhatsApp API"],
  },
  {
    title: "Kraftcreatives Website",
    industry: "Creative Services",
    projectType: "Web Development",
    timeline: "~3 Weeks",
    problem: "Kraftcreatives needed a modern, responsive website that could showcase their services and guide visitors toward the right offering.",
    solution: "Designed and built a fully responsive, server-rendered website with AI-powered service recommendations and a clean, conversion-focused layout.",
    result: "Delivered a fast, modern site that presents services clearly and helps visitors find exactly what they need.",
    metrics: ["Fully responsive", "AI service recommendations", "Seamless experience"],
    technologies: ["Next.js", "Tailwind CSS", "SSR"],
  },
  {
    title: "Portfolio Website",
    industry: "Personal Brand",
    projectType: "Web Development",
    timeline: "~2 Weeks",
    problem: "The client needed a clean, modern portfolio to present their work professionally and stand out from the crowd.",
    solution: "Built a fully responsive portfolio website with a modern, minimal design, smooth interactions, and a clear project showcase.",
    result: "Created a polished, distinctive portfolio that represents the client's work effectively.",
    metrics: ["Modern, clean UI", "Fully responsive", "Smooth interactions"],
    technologies: ["Next.js", "Tailwind CSS", "SSR"],
  },
  {
    title: "Shop Management System",
    industry: "Retail",
    projectType: "Custom Software",
    timeline: "~4 Weeks",
    problem: "The shop was managing inventory, sales, and payments manually, making it hard to track stock levels and understand actual profit.",
    solution: "Developed a comprehensive shop management system to handle inventory, record sales and payments, and track profit from a single, easy-to-use interface.",
    result: "Centralized day-to-day operations and gave the owner clear visibility into stock, sales, and profit.",
    metrics: ["Inventory fully managed", "Sales & payments tracked", "Clear profit visibility"],
    technologies: ["Custom Software", "Database", "Reporting"],
  },
  {
    title: "E-commerce Website",
    industry: "E-commerce",
    projectType: "Web Development",
    timeline: "~3 Weeks",
    problem: "The client needed an online store where customers could browse products and pay securely through a smooth checkout.",
    solution: "Built a fully responsive e-commerce website with integrated payments, fast server-rendered pages, and a clean browsing and checkout experience.",
    result: "Launched a professional online store with secure payments and a seamless shopping experience.",
    metrics: ["Fully responsive store", "Integrated payments", "Seamless checkout"],
    technologies: ["Next.js", "Payments", "SSR", "Tailwind CSS"],
  },
  {
    title: "Deeray — Minimal Home Essentials Store",
    industry: "E-commerce",
    projectType: "Web Development",
    timeline: "~3 Weeks",
    problem: "The brand needed a distinctive, premium online store to sell curated home essentials — one that felt editorial and minimal while still guiding shoppers smoothly from browsing to checkout.",
    solution: "Designed and built a refined e-commerce storefront with collection-based browsing, clean product pages, cart and checkout, order tracking, and a fully responsive, minimalist aesthetic.",
    result: "Delivered a polished, on-brand store that presents products beautifully and makes it easy for customers to explore collections and buy with confidence.",
    metrics: ["Editorial minimalist design", "Collection-based browsing", "Seamless browse-to-checkout"],
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "SSR"],
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Case Studies</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          The projects we&apos;ve built and how they helped.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Each project reflects how we combine product thinking, delivery discipline, and pragmatic engineering to solve business problems.
        </p>
      </section>

      <section className="mt-12 space-y-8">
        {caseStudies.map((study) => (
          <article key={study.title} id={slugify(study.title)} className="scroll-mt-24 rounded-3xl card-cream p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4b5694]">
                {study.industry}
              </span>
              <span className="rounded-full border border-[#4b5694]/20 bg-[#111844]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4b5694]">
                {study.projectType}
              </span>
              <span className="rounded-full border border-[#4b5694]/20 bg-[#111844]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4b5694]">
                {study.timeline}
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">{study.title}</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Problem</p>
                  <p className="mt-2 text-base leading-8 text-slate-300">{study.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Solution</p>
                  <p className="mt-2 text-base leading-8 text-slate-300">{study.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Result</p>
                  <p className="mt-2 text-base leading-8 text-slate-300">{study.result}</p>
                </div>
              </div>

              <div className="space-y-6 rounded-3xl card-cream-soft p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Technologies</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-[#4b5694]/20 bg-[#111844]/5 px-3 py-1 text-sm text-[#4b5694]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Key Outcomes</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {study.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2">
                        <span className="mt-1 text-blue-500">✔</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
