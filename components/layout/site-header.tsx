"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";

type MenuLink = { title: string; href: string; description?: string };
type MenuItem = {
  title: string;
  href?: string;
  columns?: { heading: string; links: MenuLink[] }[];
};

const megaMenu: MenuItem[] = [
  {
    title: "Services",
    columns: [
      {
        heading: "Build",
        links: [
          { title: "Web Development", href: "/services/web-development", description: "High-performance websites & platforms" },
          { title: "App Development", href: "/services/app-development", description: "Custom apps & business tools" },
          { title: "AI Automation", href: "/services/ai", description: "Intelligent workflows & copilots" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { title: "All Services", href: "/services", description: "Everything we offer" },
          { title: "Our Process", href: "/process", description: "How we deliver" },
          { title: "Portfolio", href: "/portfolio", description: "Selected work" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    columns: [
      {
        heading: "AI Solutions",
        links: [
          { title: "AI Chatbots", href: "/services/ai/ai-chatbots" },
          { title: "Workflow Automation", href: "/services/ai/workflow-automation" },
          { title: "CRM Automation", href: "/services/ai/crm-automation" },
          { title: "AI Agents", href: "/services/ai/ai-agents" },
        ],
      },
      {
        heading: "Data & Intelligence",
        links: [
          { title: "Business Intelligence", href: "/services/ai/business-intelligence" },
          { title: "Predictive Analytics", href: "/services/ai/predictive-analytics" },
          { title: "RAG Systems", href: "/services/ai/rag-systems" },
          { title: "Computer Vision", href: "/services/ai/computer-vision" },
        ],
      },
    ],
  },
  {
    title: "Industries",
    columns: [
      {
        heading: "Sectors we serve",
        links: [
          { title: "E-commerce", href: "/industries/ecommerce" },
          { title: "Retail", href: "/industries/retail" },
          { title: "Real Estate", href: "/industries/real-estate" },
          { title: "Healthcare", href: "/industries/healthcare" },
        ],
      },
      {
        heading: "More sectors",
        links: [
          { title: "Education", href: "/industries/education" },
          { title: "Professional Services", href: "/industries/professional-services" },
          { title: "SaaS", href: "/industries/saas" },
          { title: "All Industries", href: "/industries" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { title: "Case Studies", href: "/case-studies", description: "Proven results" },
          { title: "FAQ", href: "/faq", description: "Common questions" },
        ],
      },
    ],
  },
  {
    title: "Company",
    columns: [
      {
        heading: "About us",
        links: [
          { title: "About", href: "/about" },
          { title: "Our Process", href: "/process" },
          { title: "Careers", href: "/contact" },
        ],
      },
    ],
  },
];

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="Haxxcel Solutions logo" width={36} height={36} className="h-9 w-9 object-contain" priority />
          <span className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop mega nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {megaMenu.map((item) => (
            <div key={item.title} className="relative" onMouseEnter={() => setOpenMenu(item.title)}>
              <button
                type="button"
                aria-expanded={openMenu === item.title}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.title}
                <svg
                  viewBox="0 0 24 24"
                  className={`h-3.5 w-3.5 transition-transform ${openMenu === item.title ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openMenu === item.title && item.columns ? (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                  <div className="w-[min(90vw,640px)] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {item.columns.map((column) => (
                        <div key={column.heading}>
                          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                            {column.heading}
                          </p>
                          <ul className="mt-3 space-y-1">
                            {column.links.map((link) => (
                              <li key={`${column.heading}-${link.title}`}>
                                <Link
                                  href={link.href}
                                  onClick={() => setOpenMenu(null)}
                                  className="block rounded-xl px-3 py-2 transition hover:bg-white/5"
                                >
                                  <span className="block text-sm font-medium text-white">{link.title}</span>
                                  {link.description ? (
                                    <span className="mt-0.5 block text-xs text-slate-400">{link.description}</span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-full border border-blue-500/40 bg-blue-600/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {megaMenu.map((item) => (
              <li key={item.title} className="border-b border-white/5 py-1">
                <button
                  type="button"
                  onClick={() => setMobileSection((s) => (s === item.title ? null : item.title))}
                  className="flex w-full items-center justify-between px-2 py-3 text-base font-medium text-white"
                >
                  {item.title}
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform ${mobileSection === item.title ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileSection === item.title && item.columns ? (
                  <div className="space-y-4 pb-3 pl-2">
                    {item.columns.map((column) => (
                      <div key={column.heading}>
                        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                          {column.heading}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {column.links.map((link) => (
                            <li key={`m-${column.heading}-${link.title}`}>
                              <Link
                                href={link.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileSection(null);
                                }}
                                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full border border-blue-500/40 bg-blue-600/90 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
}
