import Reveal from "@/components/animations/reveal";
import Counter from "@/components/animations/counter";
import TextReveal from "@/components/animations/text-reveal";
import Marquee from "@/components/animations/marquee";
import TestimonialsSlider from "@/components/sections/testimonials-slider";

const stats = [
  { label: "Projects", value: 10, suffix: "+" },
  { label: "Clients", value: 10, suffix: "+" },
  { label: "Countries", value: 3, suffix: "+" },
  { label: "Developers", value: 15, suffix: "+" },
  { label: "Success Rate", value: 99, suffix: "%" },
];

const clientLogos = [
  { name: "Saudi Dropship", src: "/images/clients/saudidropship-removebg-preview.png" },
  { name: "Frosty Connections", src: "/images/clients/frostyconnections-removebg-preview.png" },
  { name: "Amazon Solutions Pro", src: "/images/clients/amazonsolutionspro-removebg-preview.png" },
  { name: "Azkandco", src: "/images/clients/azkandco-removebg-preview.png" },
  { name: "TLLC", src: "/images/clients/tllc-removebg-preview.png" },
  { name: "Aiwapure Water", src: "/images/clients/IMG_20260702_152524.jpg-removebg-preview.png" },
  { name: "Diamond D", src: "/images/clients/1782838558266-removebg-preview.png" },
];

const process = [
  "Discovery and blueprinting",
  "Rapid execution with measurable milestones",
  "Launch, optimize, and scale",
];

const trustSignals = [
  { badge: "🎯", title: "Custom-First", subtitle: "Built around your exact workflow" },
  { badge: "⏱", title: "Fixed Timelines", subtitle: "Clear scope and delivery dates" },
  { badge: "24/7", title: "Responsive Support", subtitle: "A dedicated point of contact" },
  { badge: "🔒", title: "Secure Development", subtitle: "Security-first at every step" },
  { badge: "NDA", title: "On Request", subtitle: "Your ideas stay confidential" },
  { badge: "🛠", title: "Ongoing Support", subtitle: "We stay with you after launch" },
];

const testimonials = [
  {
    rating: "★★★★★",
    quote: "They built our Aiwapure Water platform exactly the way we needed it. Smooth process and a reliable result.",
    author: "Muhammad Abeer",
    title: "Aiwapure Water",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "Our Azkandco website turned out clean, fast, and professional. The team was responsive throughout.",
    author: "Umer",
    title: "Azkandco",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "My portfolio site looks polished and represents my work perfectly. Highly recommended.",
    author: "Hassan Abbas",
    title: "Portfolio",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "The automation they built saved us hours of manual work every week. Exactly what we wanted.",
    author: "Dawood",
    title: "Automation",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "The Kraftcreatives website looks modern and loads fast. The service recommendations were a great touch.",
    author: "Kraftcreatives",
    title: "Web Development",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "The shop management system made tracking inventory, sales, and profit effortless. A real time-saver.",
    author: "Shop Management System",
    title: "Custom Software",
    location: "",
  },
  {
    rating: "★★★★★",
    quote: "Our online store is clean, responsive, and the payment flow is smooth. Customers love the experience.",
    author: "E-commerce Website",
    title: "Web Development",
    location: "",
  },
];

const featuredCaseStudies = [
  {
    title: "AI-Powered WhatsApp Chatbot",
    summary: "An intelligent WhatsApp chatbot that answers customer queries 24/7 with natural language processing, cutting response times and support workload.",
    href: "/case-studies",
  },
  {
    title: "Shop Management System",
    summary: "A comprehensive system to manage inventory, sales, and payments and track profit — all from one easy-to-use interface.",
    href: "/case-studies",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(75,86,148,0.16),_transparent_40%)]" role="main">
      <section className="relative isolate overflow-hidden" aria-labelledby="home-heading">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        {/* Gradient blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[130px]" />
          <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium tracking-[0.2em] text-blue-200 uppercase">
              Enterprise AI Automation & Custom Software
            </p>
            <h1 id="home-heading" className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <TextReveal text="Software that helps your business run smoother." />
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-white sm:text-2xl">
              We don&apos;t just build software. We build systems that work for you.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help ambitious companies modernize workflows, ship reliable software, and create premium digital experiences that earn trust.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                Book a consultation
              </a>
              <a href="/services" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore services
              </a>
            </div>
          </div>

          {/* Right side visual composition */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* AI illustration orbit */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 hidden sm:block">
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 rounded-full border border-blue-400/30" />
                <div className="absolute inset-3 rounded-full border border-indigo-400/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 shadow-lg shadow-blue-900/40">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs font-medium text-slate-400">Haxxcel Analytics</span>
              </div>

              {/* KPI row */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Tasks Automated", value: "24/7", trend: "Live" },
                  { label: "Team Hours Saved", value: "Weekly", trend: "↑" },
                  { label: "Uptime", value: "99.9%", trend: "SLA" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-slate-400">{kpi.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{kpi.value}</p>
                    <p className="mt-1 text-[11px] font-medium text-emerald-400">{kpi.trend}</p>
                  </div>
                ))}
              </div>

              {/* Analytics chart */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-wide text-slate-300 uppercase">Performance</p>
                  <p className="text-[11px] text-slate-500">Last 7 months</p>
                </div>
                <svg viewBox="0 0 320 120" className="mt-3 h-28 w-full" role="img" aria-label="Analytics performance chart">
                  <defs>
                    <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,95 L45,80 L90,88 L135,55 L180,62 L225,32 L270,40 L320,15 L320,120 L0,120 Z"
                    fill="url(#hero-area)"
                  />
                  <path
                    d="M0,95 L45,80 L90,88 L135,55 L180,62 L225,32 L270,40 L320,15"
                    fill="none"
                    stroke="rgb(96,165,250)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Floating card: AI insight */}
            <div className="animate-float absolute -left-6 top-1/2 hidden w-52 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-blue-950/40 backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/20 text-blue-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">AI Copilot</p>
                  <p className="text-[11px] text-slate-400">Live suggestions</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-5 text-slate-300">
                “Automate 3 workflows to save ~12 hrs/week.”
              </p>
            </div>

            {/* Floating card: success metric */}
            <div className="animate-float-slow absolute -bottom-6 right-2 hidden w-44 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-blue-950/40 backdrop-blur sm:block">
              <p className="text-[11px] text-slate-400">Client success</p>
              <p className="mt-1 text-2xl font-semibold text-white">99%</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl card-cream p-6 sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">By the numbers</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Growth we&apos;re proud of.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="hover-card rounded-2xl card-cream-soft p-5 text-center">
                <p className="text-3xl font-semibold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/40" aria-labelledby="trusted-heading">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <p id="trusted-heading" className="text-center text-sm font-semibold tracking-[0.25em] text-slate-400 uppercase">
            Trusted by teams around the world
          </p>
          <Marquee speed={28} className="mt-8">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className="h-12 w-auto max-w-[160px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-16" aria-labelledby="process-heading">
        <div className="rounded-3xl card-cream p-8 shadow-2xl shadow-blue-950/20 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">How we work</p>
              <h2 id="process-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Built around how your business works.
              </h2>
            </div>
            <a href="/about" className="text-sm font-semibold text-blue-300 transition hover:text-blue-200">
              Learn about our process →
            </a>
          </div>

          <div className="mt-8 relative">
            <div aria-hidden="true" className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent md:block" />
            <ol className="space-y-4">
              {process.map((step, index) => (
                <Reveal as="li" key={step} delay={index * 120} direction="left" className="relative flex items-start gap-5 md:pl-0">
                  <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-blue-400/40 bg-slate-950 text-xs font-semibold text-blue-300">
                    0{index + 1}
                  </span>
                  <div className="hover-card flex-1 rounded-2xl card-cream-soft p-5">
                    <p className="text-lg font-medium text-white">{step}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-16" aria-labelledby="case-studies-heading">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Case studies</p>
            <h2 id="case-studies-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Our work and the results it brought.
            </h2>
          </div>
          <a href="/case-studies" className="text-sm font-semibold text-blue-300 transition hover:text-blue-200">
            Explore all case studies →
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredCaseStudies.map((study, index) => (
            <Reveal as="article" key={study.title} delay={index * 120} className="hover-card rounded-3xl card-cream p-8">
              <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-400">{study.summary}</p>
              <a href={study.href} className="mt-6 inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200">
                View case study →
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-16" aria-labelledby="testimonials-heading">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Testimonials</p>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              What our clients say about working with us.
            </h2>
          </div>
          <a href="/portfolio" className="text-sm font-semibold text-blue-300 transition hover:text-blue-200">
            See our portfolio →
          </a>
        </div>

        <TestimonialsSlider testimonials={testimonials} interval={5000} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-16" aria-labelledby="trust-heading">
        <div className="rounded-3xl card-cream p-8 shadow-2xl shadow-blue-950/20 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Why teams trust us</p>
            <h2 id="trust-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Dependable work, clear communication.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((item, index) => (
              <Reveal
                as="div"
                key={item.title}
                delay={index * 100}
                className="hover-card flex items-center gap-4 rounded-2xl card-cream-soft p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-lg font-bold text-blue-300">
                  {item.badge}
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 pb-20 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-3xl card-cream p-8 shadow-2xl shadow-blue-950/20 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Ready to start?</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Have an idea? Let&apos;s build it.
              </h2>
            </div>
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#111844] px-8 py-4 text-sm font-semibold text-[#eae0cf] shadow-lg shadow-blue-950/30 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e285a] hover:shadow-xl hover:shadow-blue-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Start your project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
