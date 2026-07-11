// config/site.ts

export const siteConfig = {
  name: "Haxxcel Solutions Pvt Ltd",

  shortName: "Haxxcel",

  description:
    "AI automation & custom software company helping businesses in Pakistan and worldwide automate workflows, cut costs, and scale reliable, high-performing digital products.",

  url: "https://www.haxxcelsolutions.com",

  ogImage: "/images/logo.png",

  creator: "Haxxcel Solutions",

  keywords: [
    "AI Automation",
    "Artificial Intelligence",
    "Custom Software Development",
    "Web Development",
    "Enterprise Software",
    "Business Automation",
    "AI Development Company",
    "Software House Pakistan",
    "Software Company UAE",
    "Digital Transformation",
    "Workflow Automation",
    "Machine Learning",
    "Generative AI",
    "AI Consulting"
  ],

  authors: [
    {
      name: "Haxxcel Solutions"
    }
  ],

  links: {
    linkedin: "https://linkedin.com/company/haxxcel-solutions",

    github: "https://github.com/HXsolutions",

    facebook: "https://www.facebook.com/profile.php?id=61569955587200",

    instagram: "https://www.instagram.com/haxxcelsolutions",

    twitter: "https://x.com/haxxcelsolution"
  }
  ,
  address: "Shop number 15, near Satwaan Meel Railway Crossing, Sher Shah Road, Multan"
} as const;

export type SiteConfig = typeof siteConfig;