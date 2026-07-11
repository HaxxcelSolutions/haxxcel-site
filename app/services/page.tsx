import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Haxxcel Solutions' services — web development, custom software, app development, and AI automation built for performance, scale, and real business results.",
};

const services = [
  {
    title: "Web Development",
    description: "Premium websites, growth-focused platforms, and scalable digital experiences built for performance and conversion.",
    href: "/services/web-development",
  },
  {
    title: "Custom Software",
    description: "Management systems, internal dashboards, and business platforms built around your exact operational needs — no compromises.",
    href: "/services/custom-software",
  },
  {
    title: "App Development",
    description: "Custom applications and business tools designed for usability, reliability, and long-term growth.",
    href: "/services/app-development",
  },
  {
    title: "AI",
    description: "Practical AI automation and intelligent workflows that remove friction and accelerate business operations.",
    href: "/services/ai",
  },
];

const whyChooseUs = [
  "Enterprise Architecture",
  "Agile Development",
  "Dedicated Team",
  "Fast Delivery",
  "Security First",
  "SEO Optimized",
  "Cloud Deployment",
  "Lifetime Support",
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "Laravel",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "Firebase",
  "Flutter",
  "Kubernetes",
  "Tailwind",
  "TypeScript",
  "GraphQL",
  "Redis",
  "OpenAI",
  "LangChain",
  "n8n",
  "Make.com",
  "WhatsApp API",
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          What we can build for your business.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Every engagement is shaped around measurable business outcomes, whether you need a polished digital presence, a custom application, or intelligent AI automation.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="flex h-full flex-col rounded-3xl card-cream p-8">
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 flex-1 text-base leading-8 text-slate-400">{service.description}</p>
            <Link href={service.href} className="mt-6 inline-flex text-sm font-semibold text-blue-500 transition hover:text-blue-600">
              Explore service →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Why Choose Us</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl card-cream-soft px-4 py-3 text-[#3d4675]">
              <span className="text-lg text-blue-500">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Technologies</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech} className="rounded-2xl card-cream-soft px-5 py-4 text-center text-sm font-semibold tracking-[0.16em] text-[#4b5694] uppercase">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl card-cream p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Flexible delivery model</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          From short consulting sprints to long-term product partnerships, we adapt to your roadmap and delivery expectations.
        </p>
      </section>
    </main>
  );
}
