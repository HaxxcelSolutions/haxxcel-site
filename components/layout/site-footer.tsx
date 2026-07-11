import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96C21.4 8.75 22 11.24 22 14.4V21h-4v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V9Z" />
  ),
  Instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.07a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94Zm0 1.8a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34Zm5.16-1.16a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
  ),
  Facebook: (
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  ),
  X: (
    <path d="M17.53 3H21l-7.19 8.21L22.25 21h-6.63l-5.19-6.79L4.5 21H1l7.69-8.79L1.75 3h6.8l4.69 6.2L17.53 3Zm-1.16 16h1.84L7.71 4.9H5.74L16.37 19Z" />
  ),
  GitHub: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
};

const footerColumns = [
  {
    heading: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Careers", href: "/contact" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "App Development", href: "/services/app-development" },
      { title: "AI Automation", href: "/services/ai" },
      { title: "All Services", href: "/services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { title: "Portfolio", href: "/portfolio" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "FAQ", href: "/faq" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr] lg:px-12">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="Haxxcel Solutions logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <p className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
              {siteConfig.shortName}
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-slate-300">
            <strong>Address:</strong> {siteConfig.address}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  {socialIcons[social.name]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {column.links.map((item) => (
                <li key={`${column.heading}-${item.title}`}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for ambitious teams.</p>
        </div>
      </div>
    </footer>
  );
}
