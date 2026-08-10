import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  Gauge,
  Sparkles,
  Video,
  Workflow,
  Zap,
} from "lucide-react";

import Countdown from "@/components/workshop/countdown";
import Reveal from "@/components/workshop/reveal";
import WorkshopForm from "@/components/workshop/workshop-form";

export const metadata: Metadata = {
  title: "Stop Hiring for Manual Work · Haxxcel Masterclass",
  description:
    "A live 60-minute virtual masterclass for founders: automate operations without adding headcount. 24 August 2026 · 9:30 PM PKT. Free workflow audit included.",
};

const takeaways = [
  {
    icon: Zap,
    title: "Automation shortlist",
    body: "The 3 highest-ROI processes to automate first in your business.",
  },
  {
    icon: Workflow,
    title: "A 2-week stack",
    body: "A lightweight automation stack you can stand up in under two weeks.",
  },
  {
    icon: Gauge,
    title: "40–60% less ops time",
    body: "Cut manual operations time without adding a single hire.",
  },
  {
    icon: BadgeCheck,
    title: "Free workflow audit",
    body: "A personal workflow audit and next-step plan for every attendee.",
  },
];

export default function WorkshopPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pt-24 lg:pb-28">
          {/* Copy + CTA */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Haxxcel Live Masterclass · Limited seats
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stop hiring for
              <br />
              <em className="text-[#eae0cf]">manual work.</em>
            </h1>

            <p className="mt-6 max-w-[42ch] text-lg leading-8 text-slate-300">
              A founder&apos;s guide to automating operations without adding headcount. One live hour,
              virtual, and free.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#eae0cf] px-8 py-4 text-sm font-semibold text-[#111844] transition hover:bg-white"
              >
                Reserve my seat
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#learn"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                What&apos;s inside
              </a>
            </div>

            {/* event meta pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <CalendarDays className="h-4 w-4 text-blue-300" />
                Mon, 24 Aug 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Clock className="h-4 w-4 text-blue-300" />
                9:30 PM PKT
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Video className="h-4 w-4 text-blue-300" />
                Virtual · recording included
              </span>
            </div>
          </div>

          {/* Event card */}
          <Reveal>
            <div className="rounded-3xl card-cream p-6 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#4b5694] uppercase">
                Live workshop
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#111844] sm:text-2xl">Saves starts in</h2>

              <div className="mt-6">
                <Countdown />
              </div>

              <div className="mt-8 h-px w-full bg-[#4b5694]/15" />

              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#111844]/[0.06] text-[#4b5694]">
                    <CalendarDays className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#7288ae] uppercase">Date</p>
                    <p className="mt-0.5 text-sm font-medium text-[#111844]">Monday, 24 August 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#111844]/[0.06] text-[#4b5694]">
                    <Clock className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#7288ae] uppercase">Time</p>
                    <p className="mt-0.5 text-sm font-medium text-[#111844]">9:30 PM Pakistan Time · 60 min</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#111844]/[0.06] text-[#4b5694]">
                    <Video className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#7288ae] uppercase">Format</p>
                    <p className="mt-0.5 text-sm font-medium text-[#111844]">Virtual · live + replay sent after</p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 flex items-center gap-2.5 rounded-2xl bg-[#111844]/[0.06] px-4 py-3">
                <BadgeCheck className="h-4.5 w-4.5 shrink-0 text-[#4b5694]" />
                <p className="text-sm font-medium text-[#3d4675]">
                  Free workflow audit for every attendee
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT YOU'LL WALK AWAY WITH ─────────────────────── */}
      <section id="learn" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <h2 className="max-w-xl text-2xl font-semibold text-white sm:text-4xl">
            Walk away with an automation plan, not just notes.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {takeaways.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl card-cream p-6 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#111844] text-[#eae0cf]">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#111844]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#3d4675]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PRESENTER ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl card-cream p-6 sm:p-10">
            <div className="grid gap-6 sm:items-start lg:grid-cols-[auto_1fr] lg:gap-8">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#111844] text-xl font-semibold text-[#eae0cf]">
                HX
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[#4b5694] uppercase">
                  Presented by
                </p>
                <p className="mt-2 text-xl font-semibold text-[#111844]">
                  Technical Co-Founder, Haxxcel Solutions
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3d4675]">
                  AI-driven operational efficiency specialist. Helps founders scale by replacing
                  manual busywork with intelligent, low-friction workflows — the same playbooks
                  shared in this masterclass.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── REGISTER ────────────────────────────────────────── */}
      <section id="register" className="border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
                <BadgeCheck className="h-3.5 w-3.5" />
                Free workflow audit included
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-white sm:text-4xl">Reserve your seat</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Join the live masterclass and claim your free workflow audit. Limited seats — reserve
                yours before they fill up.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 rounded-3xl card-cream p-6 sm:p-10">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-[#111844]">Registration</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111844]/[0.06] px-3 py-1 text-xs font-semibold text-[#4b5694]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  VIP access
                </span>
              </div>
              <WorkshopForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
