"use client";

import { useState } from "react";
import { toast } from "sonner";

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-2xl border border-[#4b5694]/25 bg-[#111844]/[0.04] px-4 py-3 text-[#111844] placeholder:text-[#7288ae] outline-none transition focus:border-blue-500/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      // Honeypot: real users leave this empty; bots tend to fill every field.
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "",
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      toast.error("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(data.email)) {
      setStatus("error");
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      toast.success("Message sent! We'll get back to you within one business day.");
    } catch (err) {
      setStatus("error");
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-3xl card-cream p-8">
      <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        Tell us about your idea, challenge, or the growth goal you want to unlock.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-sm leading-7 text-emerald-200">
          Thanks for reaching out! We&apos;ve received your message and will get back to you within one
          business day.
        </div>
      ) : (
        <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">Name</label>
            <input id="name" name="name" required maxLength={100} className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required maxLength={150} className={inputClass} placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">Project goals</label>
            <textarea id="message" name="message" rows={5} required maxLength={2000} className={inputClass} placeholder="Tell us about your idea or challenge" />
          </div>

          {/* Honeypot field — hidden from users, catches bots. */}
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="company">Company (leave this empty)</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
