import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Premium websites, SaaS platforms, e-commerce, and scalable web applications built by Haxxcel Solutions for performance, SEO, and conversion.",
};

const offerings = [
  "SaaS Platforms",
  "CRM Systems",
  "ERP Systems",
  "E-commerce",
  "Landing Pages",
  "Progressive Web Apps",
  "CMS Development",
  "API Integration",
  "Performance Optimization",
];

const benefits = [
  "Fast, responsive experiences that feel premium on every device",
  "Scalable architecture for growing traffic and new features",
  "Clear conversion paths for leads, sales, and customer engagement",
];

const highlights = [
  "Pixel-perfect, responsive interfaces",
  "Engineered for performance and SEO",
  "Scalable foundations that grow with you",
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

export default function WebDevelopmentPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="flex flex-col">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Services / Web Development</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Web Development</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We design and build modern web experiences that blend strong visual storytelling with reliable engineering.
            Whether you need a high-conversion marketing site or a robust business platform, we build it to perform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Book a discovery call
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
          <h2 className="text-2xl font-semibold text-white">What we build</h2>
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
          <h2 className="text-2xl font-semibold text-white">Why teams choose this service</h2>
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
