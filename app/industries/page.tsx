import type { Metadata } from "next";
import Link from "next/link";

import Reveal from "@/components/animations/reveal";
import { industries, industryIconPaths } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Haxxcel Solutions builds AI automation and custom software for businesses across e-commerce, retail, real estate, healthcare, education, professional services, and SaaS — tailored to each industry's operational needs.",
};

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Industries</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Solutions built for how your industry actually operates.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          We work with businesses across Pakistan and internationally, building AI automation and
          custom software that fits the specific operational requirements of each industry — not a
          generic, one-size-fits-all approach.
        </p>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <Reveal key={industry.slug} delay={index * 70}>
            <Link
              href={`/industries/${industry.slug}`}
              className="group flex h-full flex-col rounded-3xl card-cream p-6 transition hover:border-blue-400/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d={industryIconPaths[industry.icon]} />
                </svg>
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">{industry.name}</h2>
              <p className="mt-3 text-slate-300">{industry.description}</p>
              <ul className="mt-5 space-y-2 border-t border-[#4b5694]/15 pt-5 text-sm text-slate-400">
                {industry.solutions.map((solution) => (
                  <li key={solution.title} className="flex items-center gap-2">
                    <span className="text-blue-500">→</span>
                    {solution.title}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex text-sm font-semibold text-blue-500 transition group-hover:text-blue-600">
                Explore {industry.name} →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="mt-20 rounded-3xl card-cream p-10 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Don&apos;t see your industry?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Our solutions are built from scratch around your exact operational needs. Whatever your
          industry, we&apos;ll design software and automation that fits your workflow.
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
