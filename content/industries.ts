export type Industry = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  tagline: string;
  intro: string;
  challenges: string[];
  solutions: { title: string; detail: string }[];
  outcomes: string[];
};

export const industryIconPaths: Record<string, string> = {
  ecommerce:
    "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
  retail:
    "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.999 2.999 0 0 0 4.5 0A3.001 3.001 0 0 0 20.25 9c.896 0 1.7-.393 2.25-1.016M6.75 4.5h10.5V9",
  realestate:
    "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
  healthcare:
    "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  education:
    "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  professional:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  saas:
    "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
};

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "ecommerce",
    description:
      "Automated order processing, inventory sync, customer support bots, and custom storefronts that turn browsers into buyers.",
    tagline:
      "Automation and custom platforms that turn browsers into buyers and take the busywork out of running an online store.",
    intro:
      "Online retail moves fast, and manual work quietly eats into your margins — orders to process, stock to reconcile, and customers waiting for answers. We build automation and custom storefronts that keep operations running smoothly so you can focus on growth.",
    challenges: [
      "Manual order processing and fulfillment delays",
      "Inventory drift across channels and warehouses",
      "Support teams buried in repetitive questions",
      "Storefronts that don't convert or scale",
    ],
    solutions: [
      {
        title: "Order & inventory automation",
        detail: "Automatic order routing, fulfillment triggers, and real-time stock sync across every channel.",
      },
      {
        title: "AI customer support",
        detail: "Chatbots that answer product, order, and returns questions instantly, around the clock.",
      },
      {
        title: "Custom store platforms",
        detail: "Fast, SEO-ready storefronts built to convert and scale with your catalog.",
      },
    ],
    outcomes: [
      "Fewer manual hours per order",
      "Accurate stock across channels",
      "Faster customer response times",
      "Higher conversion rates",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "retail",
    description:
      "Point-of-sale integrations, stock management systems, and reporting dashboards that give you real-time visibility across locations.",
    tagline:
      "Point-of-sale, stock, and reporting systems that give you real-time visibility across every location.",
    intro:
      "Running retail across multiple locations means juggling stock, sales, suppliers, and reporting. We build systems that centralize it all, so you always know what's selling, what's running low, and what it's really costing you.",
    challenges: [
      "No real-time view of stock across stores",
      "Manual, error-prone sales and payment records",
      "Slow supplier and restock processes",
      "Reporting scattered across spreadsheets",
    ],
    solutions: [
      {
        title: "Stock management systems",
        detail: "Centralized inventory with low-stock alerts and multi-location tracking.",
      },
      {
        title: "Sales dashboards",
        detail: "Real-time sales, payments, and profit visibility in a single place.",
      },
      {
        title: "Supplier automation",
        detail: "Automated restock triggers and supplier ordering workflows.",
      },
    ],
    outcomes: [
      "Real-time stock visibility",
      "Accurate sales records",
      "Faster restocking",
      "Clear profit reporting",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "realestate",
    description:
      "Property CRMs, automated lead follow-up, and listing management platforms built to close deals faster.",
    tagline: "Property CRMs, lead automation, and listing platforms built to close deals faster.",
    intro:
      "In real estate, speed of follow-up wins deals. We build CRMs and automation that capture every lead, respond instantly, and keep your listings organized so nothing slips through the cracks.",
    challenges: [
      "Leads lost to slow follow-up",
      "Listings scattered and hard to manage",
      "Manual, repetitive client communication",
      "No clear view of the deal pipeline",
    ],
    solutions: [
      {
        title: "Real estate CRMs",
        detail: "A single pipeline for leads, clients, and deals with automated stages.",
      },
      {
        title: "Lead automation",
        detail: "Instant follow-up, nurture sequences, and reminders so no lead goes cold.",
      },
      {
        title: "Listing portals",
        detail: "Searchable, always-up-to-date listing platforms for buyers and agents.",
      },
    ],
    outcomes: [
      "Faster lead response",
      "Organized listings",
      "Fewer lost deals",
      "Clear pipeline visibility",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "healthcare",
    description:
      "Clinic and hospital management systems, appointment automation, and secure patient record platforms.",
    tagline: "Clinic and hospital systems, appointment automation, and secure patient platforms.",
    intro:
      "Healthcare teams spend too much time on scheduling and paperwork. We build secure, reliable systems that automate appointments and manage patient records, freeing your staff to focus on care.",
    challenges: [
      "Manual appointment scheduling and no-shows",
      "Fragmented patient records",
      "Administrative overload on staff",
      "Concerns around data security and privacy",
    ],
    solutions: [
      {
        title: "Clinic management",
        detail: "End-to-end systems for scheduling, records, billing, and staff.",
      },
      {
        title: "Appointment automation",
        detail: "Online booking, reminders, and rescheduling that cut no-shows.",
      },
      {
        title: "Patient portals",
        detail: "Secure access to records, appointments, and communication.",
      },
    ],
    outcomes: [
      "Fewer no-shows",
      "Centralized patient records",
      "Less administrative work",
      "Secure, compliant data",
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "education",
    description:
      "School and learning management systems, student portals, and automated admissions and reporting workflows.",
    tagline: "Learning management systems, student portals, and automated admissions workflows.",
    intro:
      "Schools and institutions often run on manual processes. We build platforms that streamline admissions, learning, and student management, so staff spend less time on paperwork and more on students.",
    challenges: [
      "Manual admissions and enrollment",
      "Scattered student and course data",
      "Limited access for students and parents",
      "Time-consuming reporting",
    ],
    solutions: [
      {
        title: "School management",
        detail: "Centralized systems for students, courses, attendance, and fees.",
      },
      {
        title: "Student portals",
        detail: "Portals for students and parents to access grades, schedules, and updates.",
      },
      {
        title: "Admissions automation",
        detail: "Streamlined applications, enrollment, and reporting workflows.",
      },
    ],
    outcomes: [
      "Faster admissions",
      "Centralized records",
      "Better student and parent access",
      "Automated reporting",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "professional",
    description:
      "Custom internal tools, document automation, and workflow systems that streamline how service teams deliver work.",
    tagline: "Internal tools, document automation, and workflow systems that streamline delivery.",
    intro:
      "Service firms lose billable time to admin and repetitive tasks. We build internal tools and automation that speed up delivery, standardize output, and keep your team focused on client work.",
    challenges: [
      "Repetitive manual admin work",
      "Inconsistent documents and deliverables",
      "Disconnected tools and data",
      "Limited visibility into work and capacity",
    ],
    solutions: [
      {
        title: "Workflow automation",
        detail: "Automate approvals, handoffs, and repetitive steps end to end.",
      },
      {
        title: "Document generation",
        detail: "Generate proposals, contracts, and reports from templates instantly.",
      },
      {
        title: "Internal dashboards",
        detail: "One clear view of projects, capacity, and performance.",
      },
    ],
    outcomes: [
      "More billable hours",
      "Consistent deliverables",
      "Connected workflows",
      "Clear team visibility",
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    icon: "saas",
    description:
      "Full-stack SaaS product development, API integrations, and AI features that help you ship and scale faster.",
    tagline: "Full-stack SaaS development, integrations, and AI features to help you ship and scale faster.",
    intro:
      "Building and scaling a SaaS product takes reliable engineering and fast iteration. We help you ship features, integrate the tools your users need, and add AI capabilities — without slowing down.",
    challenges: [
      "Slow feature delivery and technical debt",
      "Complex third-party integrations",
      "Scaling reliably as users grow",
      "Adding AI features without the overhead",
    ],
    solutions: [
      {
        title: "SaaS product builds",
        detail: "Full-stack development from MVP to a scalable platform.",
      },
      {
        title: "API integrations",
        detail: "Reliable integrations with the tools your customers rely on.",
      },
      {
        title: "AI feature development",
        detail: "Practical AI features built into your product and shipped to production.",
      },
    ],
    outcomes: [
      "Faster shipping",
      "Reliable integrations",
      "Scalable architecture",
      "Differentiated AI features",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
