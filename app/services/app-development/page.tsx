import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App Development",
  description:
    "Cross-platform mobile apps, customer portals, dashboards, and real-time systems built by Haxxcel Solutions for reliability and scale.",
};

const offerings = [
  "Cross-platform Apps",
  "Internal Business Tools",
  "SaaS Mobile Experiences",
  "Customer Portals",
  "Dashboard Applications",
  "Real-time Systems",
  "API-Driven Apps",
  "Secure Admin Panels",
  "Performance Monitoring",
];

const benefits = [
  "Reliable product delivery with a clear roadmap from concept to launch",
  "Modern architecture that supports future upgrades and integrations",
  "Thoughtful UX designed for real daily workflows and user adoption",
];

const highlights = [
  "Cross-platform apps from a single codebase",
  "Reliable, scalable architecture",
  "UX designed for real daily workflows",
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

export default function AppDevelopmentPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="flex flex-col">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Services / App Development</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">App Development</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We create tailored applications that help teams move faster, serve customers better, and operate with confidence.
            From mobile experiences to internal business apps, every product is shaped around practical use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Start your app project
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
          <h2 className="text-2xl font-semibold text-white">App solutions we deliver</h2>
          <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
            {offerings.map((item) => (
              <div key={item} className="flex items-center rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">Why this matters</h2>
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
