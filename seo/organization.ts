import { SITE_URL } from "@/lib/constants";

export const organizationSchema = ({
  name = "Haxxcel Solutions",
  url = SITE_URL,
  logo = "/images/logo.png",
  sameAs = [],
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name,
  url,
  logo,
  sameAs,
});

export const websiteSchema = ({
  name = "Haxxcel Solutions",
  url = SITE_URL,
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name,
  url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const localBusinessSchema = ({
  name = "Haxxcel Solutions",
  url = SITE_URL,
  telephone = "+92 339 0770019",
  address = {
    streetAddress: "Shop number 15, near Satwaan Meel Railway Crossing, Sher Shah Road",
    addressLocality: "Multan",
    addressRegion: "Punjab",
    postalCode: "60000",
    addressCountry: "PK",
  },
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name,
  url,
  telephone,
  address,
});
