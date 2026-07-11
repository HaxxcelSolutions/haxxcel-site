import Link from "next/link";
import { notFound } from "next/navigation";
import { aiServices, getAIService } from "@/content/ai-services";

export function generateStaticParams() {
  return aiServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getAIService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | AI Services | Haxxcel Solutions`,
    description: service.tagline,
  };
}

export default async function AIServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getAIService(slug);
  if (!service) notFound();

  const currentIndex = aiServices.findIndex((s) => s.slug === service.slug);
  const nextService = aiServices[currentIndex + 1];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
      <nav className="text-sm text-slate-400">
        <Link href="/services" className="hover:text-white">
          Services
        </Link>{" "}
        /{" "}
        <Link href="/services/ai" className="hover:text-white">
          AI
        </Link>{" "}
        / <span className="text-slate-200">{service.title}</span>
      </nav>

      {/* Hero */}
      <section className={`mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient}`}>
        <div className="relative p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <div className="relative">
            <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${service.accent}`}>
              AI Automation
            </span>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{service.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Discuss your project
              </Link>
              <Link
                href="/services/ai"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                All AI services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {service.intro.map((para) => (
            <p key={para} className="text-lg leading-8 text-slate-300">
              {para}
            </p>
          ))}
        </div>
        <aside className="h-fit rounded-3xl card-cream p-6">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#4b5694]/20 bg-[#111844]/5 px-3 py-1 text-xs font-medium text-[#4b5694]"
              >
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </section>

      {/* Long-form sections */}
      <section className="mt-14 space-y-12">
        {service.sections.map((block) => (
          <div key={block.heading}>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{block.heading}</h2>
            <div className="mt-4 space-y-4">
              {block.body.map((para) => (
                <p key={para} className="text-base leading-8 text-slate-300">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Capabilities + Use cases */}
      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">Capabilities</h2>
          <ul className="mt-6 space-y-3">
            {service.capabilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${service.accent}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl card-cream p-8">
          <h2 className="text-2xl font-semibold text-white">Common use cases</h2>
          <ul className="mt-6 space-y-3">
            {service.useCases.map((item) => (
              <li key={item} className="rounded-2xl card-cream-soft px-4 py-3 text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we deliver</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((item, index) => (
            <div key={item.step} className="rounded-2xl card-cream p-5">
              <span className={`text-sm font-semibold ${service.accent}`}>0{index + 1}</span>
              <h3 className="mt-2 text-lg font-medium text-white">{item.step}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Business benefits</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
              <span className="text-lg text-blue-500">✔</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {service.faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl card-cream p-5">
              <summary className="cursor-pointer list-none text-base font-medium text-white">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA + next */}
      <section className="mt-16 flex flex-col gap-6 rounded-3xl card-cream p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to explore {service.title}?</h2>
          <p className="mt-2 text-slate-300">Let&apos;s scope a practical, results-focused solution for your team.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 rounded-full bg-[#111844] px-6 py-3 text-sm font-semibold text-[#eae0cf] transition hover:bg-[#1e285a]"
        >
          Start a conversation
        </Link>
      </section>

      {nextService ? (
        <div className="mt-10 text-right">
          <Link
            href={`/services/ai/${nextService.slug}`}
            className="inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Next: {nextService.title} →
          </Link>
        </div>
      ) : null}
    </main>
  );
}
