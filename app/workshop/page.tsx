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
    <main className="min-h-screen bg-[#f6f3ef] text-[#1a1e2c] antialiased">
      <div className="mx-auto grid max-w-[1100px] items-start gap-[60px] px-6 pt-[60px] pb-20 sm:px-6 lg:grid-cols-2 lg:px-6 max-lg:gap-12 max-sm:px-5 max-sm:pt-10 max-sm:pb-[60px]">
        {/* LEFT — content */}
        <div className="pt-2">
          <span className="mb-5 inline-block rounded-full bg-[#1a1e2c] px-4 py-1 text-[0.7rem] font-semibold tracking-[0.06em] text-[#f6f3ef] uppercase max-sm:text-[0.6rem] max-sm:px-[14px] max-sm:py-[3px]">
            Live · 60 min · Limited seats
          </span>

          <h1 className="mb-[18px] text-[2.8rem] font-bold leading-[1.2] tracking-[-0.025em] text-[#1a1e2c] max-sm:text-[2.1rem]">
            Stop Hiring for
            <br />
            <span className="text-[#4a3f5c]">Manual Work</span>
          </h1>

          <p className="mb-7 max-w-[90%] text-[1.2rem] text-[#3d3f4b] max-sm:text-base max-sm:max-w-full">
            A founder&apos;s guide to automating operations&nbsp;without&nbsp;adding&nbsp;headcount.
          </p>

          <div className="mt-3 mb-[22px] h-[3px] w-[60px] rounded bg-[#1a1e2c]" />

          <div className="mb-9 flex flex-col gap-[14px]">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-[14px] text-[0.98rem] text-[#2b2e3a] max-sm:text-[0.92rem]">
                <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#1a1e2c] text-[13px] font-bold text-[#f6f3ef]">
                  ✓
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1a1e2c]/[0.06] bg-white p-6 shadow-[0_4px_16px_rgba(26,30,44,0.04)] sm:p-7">
            <h3 className="mb-1 text-[0.9rem] font-semibold uppercase tracking-[0.02em] text-[#4a3f5c]">
              Presented by
            </h3>
            <p className="text-[0.95rem] text-[#3d3f4b]">
              <span className="font-medium text-[#1a1e2c]">Technical Co-Founder, Haxxcel Solutions</span>
              <br />
              AI-driven operational efficiency specialist. Helps founders scale by replacing manual
              busywork with intelligent, low-friction workflows.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="rounded-3xl border border-[#1a1e2c]/[0.04] bg-white p-9 shadow-[0_12px_48px_rgba(26,30,44,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(26,30,44,0.10)] sm:p-10 max-sm:p-5">
          <div className="mb-7">
            <h2 className="mb-1 text-[1.5rem] font-semibold tracking-[-0.01em] text-[#1a1e2c]">
              Reserve your seat
            </h2>
            <p className="text-[0.95rem] text-[#5a5d6b]">
              Join the masterclass &amp; claim your free workflow audit.
            </p>
          </div>

          <WorkshopForm />
        </div>
      </div>
    </main>
  );
}
