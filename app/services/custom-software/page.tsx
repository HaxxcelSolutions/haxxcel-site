import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Haxxcel Solutions builds custom software designed around your exact operational needs — management systems, internal dashboards, web platforms, and business applications built from scratch.",
};

const offerings = [
  "Business Management Systems",
  "Customer-Facing Web Platforms",
  "Internal Dashboards & Reporting",
  "Industry-Specific Software",
  "API Development & Integrations",
  "Legacy System Modernization",
];

const process = [
  { step: "Discovery & Requirements", detail: "Deep dive into your business process, pain points, and goals." },
  { step: "Architecture & Design", detail: "System architecture, database design, and UI/UX wireframing." },
  { step: "Development", detail: "Agile development with regular progress updates and demos." },
  { step: "Quality Assurance", detail: "Thorough testing before any deployment." },
  { step: "Deployment & Handover", detail: "Live deployment, staff training, and complete documentation." },
  { step: "Ongoing Support", detail: "Post-launch maintenance, updates, and feature additions." },
];

const comparison = [
  { label: "Fit", custom: "100% your workflow", offShelf: "Partial fit, workarounds needed" },
  { label: "Cost (long-term)", custom: "One-time investment", offShelf: "Monthly subscriptions forever" },
  { label: "Scalability", custom: "Built for your growth", offShelf: "Limited by vendor's roadmap" },
  { label: "Ownership", custom: "You own it completely", offShelf: "Dependent on vendor" },
  { label: "Competitive edge", custom: "Unique to your business", offShelf: "Same as your competitors" },
];

export default function CustomSoftwarePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Services / Custom Software</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Custom Software Development</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Off-the-shelf software always comes with a compromise — features you don&apos;t need, and
            missing the ones you do. We build custom software designed around your exact operational
            requirements, from management systems and internal dashboards to full web-based business
            platforms that your team will actually use and that grows with your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Start your software project
            </Link>
            <Link href="/services" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white">
              Back to services
            </Link>
          </div>
        </div>

        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">What we build</h2>
          <ul className="mt-6 space-y-3">
            {offerings.map((item) => (
              <li key={item} className="rounded-2xl card-cream-soft px-4 py-3 text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-white">Our development process</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <div key={item.step} className="rounded-3xl card-cream p-6">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-blue-500/40 text-sm font-semibold text-blue-500">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.step}</h3>
              <p className="mt-2 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Why custom over off-the-shelf</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="text-sm uppercase tracking-wide text-slate-400">
                <th className="border-b border-[#4b5694]/15 pb-4 pr-4 font-semibold"></th>
                <th className="border-b border-[#4b5694]/15 pb-4 pr-4 font-semibold text-blue-600">Custom Software</th>
                <th className="border-b border-[#4b5694]/15 pb-4 font-semibold">Off-the-Shelf</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="text-slate-300">
                  <td className="border-b border-[#4b5694]/10 py-4 pr-4 font-medium text-[#111844]">{row.label}</td>
                  <td className="border-b border-[#4b5694]/10 py-4 pr-4">{row.custom}</td>
                  <td className="border-b border-[#4b5694]/10 py-4">{row.offShelf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10 text-center">
        <h2 className="text-3xl font-semibold text-white">Build software that fits your business exactly.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Start with a free discovery consultation. We&apos;ll map your requirements and show you
          exactly what a custom solution would look like.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
