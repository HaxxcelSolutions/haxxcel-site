import type { Metadata } from "next";

import WorkshopForm from "@/components/workshop/workshop-form";

export const metadata: Metadata = {
  title: "Stop Hiring for Manual Work · Haxxcel",
  description:
    "A founder's guide to automating operations without adding headcount. Free workflow audit for every attendee. Limited seats.",
};

const features = [
  "Identify the 3 highest-ROI processes to automate first",
  "Build a lightweight automation stack in under 2 weeks",
  "Cut manual ops time by 40–60% without new hires",
  "Free workflow audit for every attendee",
];

export default function WorkshopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* LEFT — content */}
        <div className="pt-2">
          <span className="inline-block rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
            Live · 60 min · Limited seats
          </span>

          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Stop Hiring for
            <br />
            <span className="text-blue-300">Manual Work</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A founder&apos;s guide to automating operations&nbsp;without&nbsp;adding&nbsp;headcount.
          </p>

          <div className="mt-8 h-[3px] w-[60px] rounded bg-blue-400" />

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-4 text-slate-200">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                  ✓
                </span>
                <span className="text-[0.98rem] leading-7">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl card-cream p-7">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#4b5694] uppercase">
              Presented by
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#3d4675]">
              <span className="font-semibold text-[#111844]">Technical Co-Founder, Haxxcel Solutions</span>
              <br />
              AI-driven operational efficiency specialist. Helps founders scale by replacing manual
              busywork with intelligent, low-friction workflows.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="rounded-3xl card-cream p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white">Reserve your seat</h2>
          <p className="mt-3 text-sm leading-7 text-[#3d4675]">
            Join the masterclass &amp; claim your free workflow audit.
          </p>

          <div className="mt-8">
            <WorkshopForm />
          </div>
        </div>
      </section>
    </main>
  );
}
