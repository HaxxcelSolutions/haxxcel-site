import type { Metadata } from "next";
import Link from "next/link";

import { faqSchema } from "@/seo/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Haxxcel Solutions — our services, process, pricing, timelines, technology, support, and how we work with clients.",
};

const faqs = [
  {
    question: "What services does Haxxcel Solutions offer?",
    answer:
      "We deliver custom software development, web development, mobile and app development, and a full range of AI automation services — including AI chatbots, workflow automation, CRM automation, business intelligence, LLM integration, AI agents, RAG systems, computer vision, and predictive analytics. Every engagement is shaped around measurable business outcomes.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "It starts with a free consultation. We learn about your goals, challenges, and constraints, then propose a practical scope and roadmap. Once aligned, we move into a discovery and blueprinting phase before development begins, so there are no surprises later.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Cost depends on scope, complexity, and timeline. We offer flexible models — from short consulting sprints to fixed-scope builds and long-term partnerships. After understanding your requirements, we provide a transparent quote with clear deliverables so you know exactly what you are paying for.",
  },
  {
    question: "How long does it take to build a project?",
    answer:
      "Timelines vary by scope. A focused website or automation can take a few weeks, while a full custom platform may take a few months. We break every project into measurable milestones so you see progress continuously rather than waiting until the end.",
  },
  {
    question: "Do you work with startups as well as established companies?",
    answer:
      "Yes. We work with founders launching their first product, growing startups scaling their operations, and established enterprises modernizing legacy systems. We adapt our process and communication to fit your stage and team.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients in Pakistan, the Gulf region, the UK, and the US. We communicate in English and Urdu and are experienced with remote project delivery backed by full transparency and regular updates.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve businesses across e-commerce, retail, real estate, healthcare, education, professional services, and SaaS. Our solutions are built to fit the specific operational requirements of each industry rather than applying a generic approach.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern, proven tools including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, Docker, and major cloud platforms like AWS and Azure. For AI, we use technologies such as OpenAI, LangChain, and vector databases. We choose the right stack for each project rather than forcing a one-size-fits-all approach.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer:
      "Absolutely. We specialize in adding AI capabilities to existing products and workflows — from chatbots and document processing to LLM-powered features — with proper guardrails, security, and cost controls so the integration is reliable in production, not just a demo.",
  },
  {
    question: "Is my data and business information secure?",
    answer:
      "Security is built into everything we do. We follow secure development practices, protect sensitive data, and can design privacy-conscious or self-hosted solutions where compliance requires it. We are happy to sign an NDA before discussing project details.",
  },
  {
    question: "Do you provide ongoing support and maintenance after launch?",
    answer:
      "Yes. We offer ongoing support, monitoring, and maintenance to keep your product secure, up to date, and performing well. Many clients continue with us as a long-term partner for improvements and new features.",
  },
  {
    question: "Will I own the code and intellectual property?",
    answer:
      "Yes. Once the project is delivered and settled, you own the source code and intellectual property outright. We hand over everything you need to run, maintain, and extend your product.",
  },
  {
    question: "How do you communicate and share progress during a project?",
    answer:
      "We keep communication clear and regular. You get a dedicated point of contact, scheduled updates, and visibility into milestones. We adapt to your preferred tools, whether that is email, chat, or project management platforms.",
  },
  {
    question: "Can you redesign or rebuild an existing website or app?",
    answer:
      "Yes. We frequently modernize existing websites and applications — improving performance, design, and reliability — while carefully preserving the workflows and data your business depends on. We can migrate gradually to minimize risk.",
  },
  {
    question: "Do you offer SEO and performance optimization?",
    answer:
      "Yes. Our web builds are optimized for speed, accessibility, and search engines by default, with clean code, structured data, and best practices baked in. We can also run dedicated SEO and performance improvement engagements.",
  },
  {
    question: "What makes Haxxcel Solutions different from other agencies?",
    answer:
      "We combine enterprise-grade engineering with practical, outcome-focused thinking. We do not chase trends for their own sake — every solution is tied to a measurable business result, delivered by a dedicated team with fast turnaround, security-first practices, and long-term support.",
  },
  {
    question: "How can I contact you to discuss my project?",
    answer:
      "You can reach us through our contact page to book a free consultation. Tell us a little about your goals and we will get back to you quickly to explore how we can help.",
  },
];

export default function FAQPage() {
  const schema = faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">FAQ</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Frequently asked questions</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Everything you need to know about working with Haxxcel Solutions. Can&apos;t find your answer?{" "}
          <Link href="/contact" className="font-semibold text-blue-300 transition hover:text-blue-200">
            Get in touch
          </Link>
          .
        </p>
      </section>

      <section className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl card-cream p-6 transition hover:border-blue-400/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white">
              {faq.question}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#4b5694]/30 text-blue-500 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-base leading-8 text-slate-400">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 text-center sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Still have questions?</h2>
        <p className="mt-3 text-slate-300">
          We&apos;re happy to walk you through anything. Book a free consultation and let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-[#111844] px-6 py-3 text-sm font-semibold text-[#eae0cf] transition hover:bg-[#1e285a]"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
