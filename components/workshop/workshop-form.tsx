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
  "w-full rounded-2xl border border-[#4b5694]/25 bg-[#111844]/[0.04] px-4 py-3 text-[0.95rem] text-[#111844] outline-none transition placeholder:text-[#7288ae] focus:border-blue-500/60";

const labelClasses = "mb-2 block text-sm font-semibold text-[#3d4675]";

const selectArrow =
  "appearance-none bg-[right_16px_center] bg-no-repeat pr-11 [background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%20viewBox='0%200%2012%208'%3E%3Cpath%20d='M1%201l5%205%205-5'%20stroke='%233d4675'%20stroke-width='1.5'%20fill='none'%20stroke-linecap='round'/%3E%3C/svg%3E\")]";

export default function WorkshopForm() {
  const [status, setStatus] = useState<{ msg: string; error: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus(null);

    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"),
    );
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
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
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

      <div>
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

      <div>
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

      <div>
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="companySize" className={labelClasses}>
            Company Size <span className="text-[#c0392b]">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            className={`${inputClasses} cursor-pointer ${selectArrow}`}
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
            className={`${inputClasses} cursor-pointer ${selectArrow}`}
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

      <div>
        <label htmlFor="website" className={labelClasses}>
          Company website <span className="text-[#7288ae]">(optional)</span>
        </label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://company.com"
          autoComplete="url"
          className={inputClasses}
          onInput={clearStatus}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full cursor-pointer rounded-full bg-[#111844] px-6 py-4 text-sm font-semibold text-[#eae0cf] transition hover:bg-[#1e285a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block h-[18px] w-[18px] animate-spin rounded-full border-[2.5px] border-[#eae0cf]/25 border-t-[#eae0cf]"
              aria-hidden="true"
            />
            Submitting…
          </span>
        ) : (
          "Reserve my seat"
        )}
      </button>

      <div className="flex flex-wrap items-center gap-2.5 pt-1">
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
      </div>
    </form>
  );
}
