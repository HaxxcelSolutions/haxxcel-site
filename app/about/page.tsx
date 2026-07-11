import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Haxxcel Solutions — an AI automation and custom software company helping businesses across Pakistan, the UAE, the UK, and the USA build reliable, scalable digital products.",
};

const values = [
  "Clarity over complexity",
  "Reliable delivery over empty promises",
  "Long-term partnership over one-off projects",
];

const team = [
  {
    name: "Iram Mukhtar",
    role: "Founder",
    image: "/images/team/iram-mukhtar.jpg",
    linkedin: "https://www.linkedin.com/in/irammukhtar/",
  },
  {
    name: "Muhammad Zaid",
    role: "Co-Founder",
    image: "/images/team/muhammad-zaid.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-zaid-b4043632b/",
  },
  {
    name: "Muhammad Mudassir",
    role: "Co-Founder",
    image: "/images/team/muhammad-mudassir.jpg",
    linkedin: "https://www.linkedin.com/in/mudassir-hafeez-ahir/",
  },
];

const milestones = [
  { year: "2024", title: "Founded to solve operational bottlenecks for growing teams" },
  { year: "2025", title: "Expanded into AI automation and intelligent product delivery" },
  { year: "2026", title: "Serving companies across Pakistan, the UAE, the UK, and the USA" },
];

const whyHaxxcel = [
  {
    title: "Custom-first approach",
    detail: "We build for your business specifically, not for a generic use case.",
  },
  {
    title: "Built with automation in mind",
    detail: "Every solution we build is designed with automation possibilities in mind.",
  },
  {
    title: "End-to-end delivery",
    detail: "From requirement analysis to deployment and ongoing support.",
  },
  {
    title: "Transparent process",
    detail: "Fixed timelines, clear pricing, and no surprises.",
  },
  {
    title: "Proven results",
    detail: "Our solutions help clients reduce manual workload and scale without growing headcount.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">About Haxxcel</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            We build reliable software and automation for growing businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Haxxcel Solutions partners with founders, operations leaders, and growing teams to redesign workflows, build custom platforms, and improve how work gets done.
          </p>
        </div>

        <div className="rounded-3xl border border-[#4b5694]/15 bg-[#eae0cf] p-8">
          <h2 className="text-2xl font-semibold text-[#111844]">Why teams choose us</h2>
          <ul className="mt-6 space-y-4">
            {values.map((value) => (
              <li key={value} className="rounded-2xl border border-[#4b5694]/15 bg-[#111844]/[0.05] px-4 py-3 text-[#3d4675]">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {milestones.map((milestone) => (
          <div key={milestone.year} className="rounded-3xl border border-[#4b5694]/15 bg-[#eae0cf] p-6">
            <p className="text-sm font-semibold text-[#4b5694]">{milestone.year}</p>
            <h3 className="mt-3 text-xl font-semibold text-[#111844]">{milestone.title}</h3>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Our people</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Meet the team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="group relative block rounded-3xl border border-[#4b5694]/15 bg-[#eae0cf] p-6 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#0a66c2] text-white opacity-90 transition group-hover:scale-110 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96C21.4 8.75 22 11.24 22 14.4V21h-4v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V9Z" />
                </svg>
              </span>
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-[#111844]/10">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#111844]">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#4b5694]">{member.role}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-white">Why Haxxcel Solutions</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyHaxxcel.map((item) => (
            <div key={item.title} className="rounded-3xl border border-[#4b5694]/15 bg-[#eae0cf] p-6">
              <h3 className="text-lg font-semibold text-[#111844]">{item.title}</h3>
              <p className="mt-2 text-[#3d4675]">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
