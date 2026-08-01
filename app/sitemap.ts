import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { aiServices } from "@/content/ai-services";
import { getAllPostSlugs } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/ai",
    "/services/web-development",
    "/services/app-development",
    "/services/custom-software",
    "/industries",
    "/process",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const aiServiceRoutes = aiServices.map((service) => ({
    url: `${SITE_URL}/services/ai/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogSlugs = await getAllPostSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...aiServiceRoutes, ...blogRoutes];
}
