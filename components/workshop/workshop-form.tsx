"use client";

import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwOzB3Ga9pLgVNv4DLtxvcJn9-CutUt3eo5wyuw9TsLQqv4mbaeRoZ7UsGaQtfsVJtH/exec";

const companySizes = ["1-10", "11-50", "51-200", "200+"];
const industries = [
  "E-commerce",
  "Logistics & Supply Chain",
  "Service-based",
  "SaaS / Tech",
  "Healthcare",
  "Manufacturing",
  "Other",
];

const inputClasses =
  "w-full rounded-xl border-[1.5px] border-[#e4e1db] bg-[#faf9f7] px-4 py-3 text-[0.95rem] text-[#1a1e2c] outline-none transition placeholder:text-[#a8a9b3] focus:border-[#1a1e2c] focus:bg-white focus:ring-4 focus:ring-[#1a1e2c]/10";

const labelClasses =
  "mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.02em] text-[#3d3f4b]";

export default function WorkshopForm() {
  const [status, setStatus] = useState<{ msg: string; error: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus(null);

    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"));
    for (const field of fields) {
      if (!field.value.trim()) {
        field.focus();
        setStatus({ msg: "Please fill in all required fields.", error: true });
        return;
      }
    }

    const email = (form.elements.namedItem("workEmail") as HTMLInputElement).value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ msg: "Please enter a valid work email.", error: true });
      (form.elements.namedItem("workEmail") as HTMLInputElement).focus();
      return;
    }

    const formData = new FormData(form);
    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus({ msg: "✅ Registered successfully! We'll send your audit details.", error: false });
      form.reset();
    } catch {
      setStatus({ msg: "❌ Network error. Please check your connection and try again.", error: true });
    } finally {
      setLoading(false);
    }
  }

  function clearStatus() {
    setStatus(null);
  }

  return (
    <form id="workshopForm" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="fullName" className={labelClasses}>
          Full Name <span className="text-[#c0392b]">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="e.g. Jamie Chen"
          required
          autoComplete="name"
          className={inputClasses}
          onInput={clearStatus}
        />
      </div>

      <div className="form-group">
        <label htmlFor="workEmail" className={labelClasses}>
          Work Email <span className="text-[#c0392b]">*</span>
        </label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          placeholder="jamie@company.com"
          required
          autoComplete="email"
          className={inputClasses}
          onInput={clearStatus}
        />
      </div>

      <div className="form-group">
        <label htmlFor="currentRole" className={labelClasses}>
          Current Role / Title <span className="text-[#c0392b]">*</span>
        </label>
        <input
          type="text"
          id="currentRole"
          name="currentRole"
          placeholder="e.g. COO, VP Ops"
          required
          autoComplete="organization-title"
          className={inputClasses}
          onInput={clearStatus}
        />
      </div>

      <div className="form-group">
        <label htmlFor="companyName" className={labelClasses}>
          Company Name <span className="text-[#c0392b]">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="e.g. Acme Inc."
          required
          autoComplete="organization"
          className={inputClasses}
          onInput={clearStatus}
        />
      </div>

      <div className="mb-[18px] grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="companySize" className={labelClasses}>
            Company Size <span className="text-[#c0392b]">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            className={`${inputClasses} cursor-pointer appearance-none bg-[right_16px_center] bg-no-repeat pr-11 [background-image:url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%20viewBox='0%200%2012%208'%3E%3Cpath%20d='M1%201l5%205%205-5'%20stroke='%233d3f4b'%20stroke-width='1.5'%20fill='none'%20stroke-linecap='round'/%3E%3C/svg%3E")]`}
            onChange={clearStatus}
          >
            <option value="">Select size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="industry" className={labelClasses}>
            Industry <span className="text-[#c0392b]">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            required
            className={`${inputClasses} cursor-pointer appearance-none bg-[right_16px_center] bg-no-repeat pr-11 [background-image:url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%20viewBox='0%200%2012%208'%3E%3Cpath%20d='M1%201l5%205%205-5'%20stroke='%233d3f4b'%20stroke-width='1.5'%20fill='none'%20stroke-linecap='round'/%3E%3C/svg%3E")]`}
            onChange={clearStatus}
          >
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bottleneck" className={labelClasses}>
          Biggest operational bottleneck right now <span className="text-[#c0392b]">*</span>
        </label>
        <textarea
          id="bottleneck"
          name="bottleneck"
          rows={3}
          placeholder="Describe your biggest ops pain point…"
          required
          className={`${inputClasses} min-h-[80px] resize-y`}
          onInput={clearStatus}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full cursor-pointer rounded-[14px] bg-[#1a1e2c] px-6 py-4 text-base font-semibold tracking-[0.01em] text-white transition hover:-translate-y-px hover:bg-[#2d3346] hover:shadow-[0_8px_24px_rgba(26,30,44,0.15)] active:scale-[0.98] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block h-[18px] w-[18px] animate-spin rounded-full border-[2.5px] border-white/25 border-t-white"
              aria-hidden="true"
            />
            Submitting…
          </span>
        ) : (
          "Reserve My Seat + Get Free Audit"
        )}
      </button>

      <div className="mt-[18px] flex flex-wrap items-center justify-between gap-2.5">
        <p
          role="status"
          aria-live="polite"
          className={`min-h-[1.6em] text-sm font-medium transition-opacity duration-200 ${
            status
              ? `opacity-100 ${status.error ? "text-[#c0392b]" : "text-[#2b7a4b]"}`
              : "opacity-0"
          }`}
        >
          {status?.msg ?? ""}
        </p>
        <span className="text-xs text-[#8a8d9a]">🔒 No spam · 1-click unsubscribe</span>
      </div>
    </form>
  );
}
