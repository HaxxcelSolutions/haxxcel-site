import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Haxxcel Solutions to discuss your web, software, or AI automation project. We respond within one business day.",
};

const officeHours = [
  { day: "Monday - Friday", time: "Full-time" },
  { day: "Saturday - Sunday", time: "Closed" },
];

const faqs = [
  {
    question: "What types of projects do you handle?",
    answer: "We work on websites, custom applications, AI automation, and digital transformation projects for growing teams and enterprises.",
  },
  {
    question: "Do you support international clients?",
    answer: "Yes. We collaborate with clients across Pakistan, the UAE, the UK, and the USA.",
  },
  {
    question: "How quickly can we start?",
    answer: "We usually schedule a discovery call within one business day after your inquiry.",
  },
];

const mapQuery = encodeURIComponent(siteConfig.address);

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Let’s talk about what you want to build.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share what you are building and where you need momentum. We will follow up with a tailored recommendation.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl card-cream">
            <iframe
              title="Haxxcel office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl card-cream p-6">
              <h2 className="text-xl font-semibold text-white">Contact details</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>📧 contact@haxxcelsolutions.com</li>
                <li>📞 +92 339 0770019</li>
                <li>📍 {siteConfig.address}</li>
              </ul>
            </div>

            <div className="rounded-3xl card-cream p-6">
              <h2 className="text-xl font-semibold text-white">Office hours</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {officeHours.map((item) => (
                  <li key={item.day} className="flex items-center justify-between gap-3">
                    <span>{item.day}</span>
                    <span className="text-[#4b5694] font-medium">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300">
              Response time: Usually within 1 business day
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl card-cream-soft p-5">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
