import type { Metadata } from "next";
import { BRAND_NAME, DEFAULT_OG, SITE_URL } from "@/lib/constants";

export const seoMetadata = {
  titleTemplate: "%s | Haxxcel Solutions",
  defaultTitle: BRAND_NAME,
  description: "Digital product & marketing services by Haxxcel Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
  },
};

export function createMetadata({
  title,
  description = seoMetadata.description,
  path = "/",
  image = DEFAULT_OG,
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${BRAND_NAME}` : BRAND_NAME;
  const canonical = new URL(path, SITE_URL).toString();

  return {
    title: resolvedTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      title: resolvedTitle,
      description,
      url: canonical,
      siteName: BRAND_NAME,
      type,
      images: [{ url: image, alt: BRAND_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
