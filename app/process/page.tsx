import type { Metadata } from "next";
import Link from "next/link";

import Reveal from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how Haxxcel Solutions works from discovery to delivery — a transparent, staged process for AI automation and custom software development with fixed timelines and measurable outcomes.",
};

const principles = [
  {
    title: "Discovery-first",
    detail: "Every project starts by understanding your real workflow — including the messy exceptions — before any code is written.",
  },
  {
    title: "Measurable outcomes",
    detail: "We measure success by time saved, errors reduced, and revenue increased — not by lines of code.",
  },
  {
    title: "Transparent delivery",
    detail: "Fixed timelines, clear pricing, and regular progress updates. No surprises, ever.",
  },
];

const automationProcess = [
  {
    step: "Workflow Audit",
    detail: "We map your current manual processes and identify the highest-value automation opportunities.",
  },
  {
    step: "Solution Design",
    detail: "We design the automation architecture and present it for your approval before building anything.",
  },
  {
    step: "Build & Test",
    detail: "We build the automation and test it thoroughly with real data to ensure it behaves reliably.",
  },
  {
    step: "Deploy & Train",
    detail: "We deploy the solution, train your team, and hand over complete documentation.",
  },
  {
    step: "Monitor & Optimize",
    detail: "We monitor performance and continuously optimize based on real-world results.",
  },
];

const softwareProcess = [
  {
    step: "Discovery & Requirements",
    detail: "A deep dive into your business process, pain points, and goals to define exactly what to build.",
  },
  {
    step: "Architecture & Design",
    detail: "System architecture, database design, and UI/UX wireframing tailored to how you operate.",
  },
  {
    step: "Development",
    detail: "Agile development with regular progress updates and working demos at every milestone.",
  },
  {
    step: "Quality Assurance",
    detail: "Thorough testing across every workflow before anything goes live.",
  },
  {
    step: "Deployment & Handover",
    detail: "Live deployment, staff training, and complete documentation so your team is fully equipped.",
  },
  {
    step: "Ongoing Support",
    detail: "Post-launch maintenance, updates, and new features as your business needs evolve.",
  },
];

function Timeline({ steps }: { steps: { step: string; detail: string }[] }) {
  return (
    <ol className="relative mt-8 space-y-6 border-l border-white/10 pl-8">
      {steps.map((item, index) => (
        <Reveal as="li" key={item.step} delay={index * 60} className="relative">
          <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full border border-blue-500/40 bg-slate-900 text-sm font-semibold text-blue-300">
            {index + 1}
          </span>
          <div className="rounded-2xl card-cream p-5">
            <h3 className="text-lg font-semibold text-white">{item.step}</h3>
            <p className="mt-2 text-slate-300">{item.detail}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">How We Work</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          A transparent process from discovery to delivery.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Every project starts with a detailed discovery process. We understand your current
          workflow, identify where time and money are being lost, and design a solution that
          addresses those gaps directly — with fixed timelines and clear pricing.
        </p>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-3">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 80}>
            <div className="h-full rounded-3xl card-cream p-6">
              <h2 className="text-lg font-semibold text-white">{principle.title}</h2>
              <p className="mt-3 text-slate-300">{principle.detail}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">AI Automation</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Our automation process</h2>
          <p className="mt-4 text-slate-300">
            How we take repetitive, manual work off your team and hand it to reliable AI-powered systems.
          </p>
          <Timeline steps={automationProcess} />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Custom Software</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Our development process</h2>
          <p className="mt-4 text-slate-300">
            How we design and build custom software that fits exactly how your business operates.
          </p>
          <Timeline steps={softwareProcess} />
        </div>
      </section>

      <section className="mt-20 rounded-3xl card-cream p-10 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to start with a free discovery call?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          We&apos;ll map your workflow, identify where time and money are being lost, and show you
          exactly what a solution would look like — before you commit to anything.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            Book a consultation
          </Link>
          <Link href="/services" className="rounded-full border border-[#111844]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#111844] transition hover:bg-[#111844]/5">
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
