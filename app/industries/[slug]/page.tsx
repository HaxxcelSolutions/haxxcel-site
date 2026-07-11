import Link from "next/link";
import { notFound } from "next/navigation";

import { getIndustry, industries, industryIconPaths } from "@/content/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | Industries | Haxxcel Solutions`,
    description: industry.tagline,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const currentIndex = industries.findIndex((i) => i.slug === industry.slug);
  const nextIndustry = industries[(currentIndex + 1) % industries.length];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
      <nav className="text-sm text-slate-400">
        <Link href="/industries" className="hover:text-white">
          Industries
        </Link>{" "}
        / <span className="text-slate-200">{industry.name}</span>
      </nav>

      {/* Hero */}
      <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/30 via-indigo-600/20 to-slate-900">
        <div className="relative p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d={industryIconPaths[industry.icon]} />
              </svg>
            </span>
            <span className="mt-6 block text-xs font-semibold tracking-[0.25em] text-blue-200 uppercase">
              Industries
            </span>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{industry.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{industry.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Book a consultation
              </Link>
              <Link
                href="/industries"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                All industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mt-12 max-w-3xl">
        <p className="text-lg leading-8 text-slate-300">{industry.intro}</p>
      </section>

      {/* Challenges + What we build */}
      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">Challenges we solve</h2>
          <ul className="mt-6 space-y-3">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">What we build</h2>
          <ul className="mt-6 space-y-4">
            {industry.solutions.map((solution) => (
              <li key={solution.title} className="rounded-2xl card-cream-soft p-4">
                <p className="text-sm font-semibold text-[#111844]">{solution.title}</p>
                <p className="mt-1 text-sm leading-7 text-[#3d4675]">{solution.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Outcomes you can expect</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {industry.outcomes.map((outcome) => (
            <div key={outcome} className="flex items-center gap-3 rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
              <span className="text-lg text-blue-500">✔</span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 flex flex-col gap-6 rounded-3xl card-cream p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Let&apos;s build for {industry.name.toLowerCase()}.
          </h2>
          <p className="mt-2 text-slate-300">
            We&apos;ll map your workflow and design a solution around how you actually operate.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 rounded-full bg-[#111844] px-6 py-3 text-sm font-semibold text-[#eae0cf] transition hover:bg-[#1e285a]"
        >
          Start a conversation
        </Link>
      </section>

      <div className="mt-10 text-right">
        <Link
          href={`/industries/${nextIndustry.slug}`}
          className="inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
        >
          Next: {nextIndustry.name} →
        </Link>
      </div>
    </main>
  );
}
