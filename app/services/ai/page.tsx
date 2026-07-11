import type { Metadata } from "next";
import Link from "next/link";
import { aiServices } from "@/content/ai-services";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "AI automation, chatbots, workflow optimization, agentic systems, and predictive analytics from Haxxcel Solutions — practical AI that saves time and scales your business.",
};

const offerings = [
  "AI Automation",
  "Workflow Optimization",
  "AI Copilots",
  "Chatbot Development",
  "Document Intelligence",
  "Predictive Analytics",
  "Agentic Systems",
  "Data Processing Pipelines",
  "Custom AI Integrations",
  "Model Deployment",
];

const benefits = [
  "Reduce manual work and speed up repetitive operations",
  "Turn scattered tools and data into a more connected workflow",
  "Create smarter decision support with practical, measurable AI solutions",
];

const highlights = [
  "Automation that removes repetitive work",
  "Secure, practical AI integrations",
  "Measurable, results-focused outcomes",
];

const whyChooseUs = [
  "Enterprise Architecture",
  "Agile Development",
  "Dedicated Team",
  "Fast Delivery",
  "Security First",
  "SEO Optimized",
  "Cloud Deployment",
  "Lifetime Support",
];

export default function AIPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="flex flex-col">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Services / AI</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">AI</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We help businesses adopt AI in a practical, secure, and results-focused way.
            From automating internal workflows to creating intelligent digital products, we build solutions that fit your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Explore AI opportunities
            </Link>
            <Link href="/services" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white">
              Back to services
            </Link>
          </div>
          <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">AI capabilities we offer</h2>
          <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
            {offerings.map((item) => (
              <div key={item} className="flex items-center rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">AI Automation services</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Explore our full range of AI capabilities.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Each service below has a dedicated deep-dive covering what it is, how we build it, real use cases,
            and the business results it delivers.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/ai/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl card-cream transition hover:border-blue-400/40"
            >
              <div className={`relative h-24 bg-gradient-to-br ${service.gradient}`}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"
                />
                <span className={`absolute bottom-3 left-4 text-xs font-semibold tracking-[0.2em] uppercase ${service.accent}`}>
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{service.tagline}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue-500 transition group-hover:text-blue-600">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">What makes it work</h2>
          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl card-cream-soft px-4 py-3 text-slate-300">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">Why Choose Us</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
                <span className="text-lg text-blue-500">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
