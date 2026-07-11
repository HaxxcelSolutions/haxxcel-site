export function serviceSchema({
  name,
  description,
  provider = {
    "@type": "Organization",
    name: "Haxxcel Solutions",
  },
  areaServed,
}: {
  name?: string;
  description?: string;
  provider?: { "@type": string; name: string };
  areaServed?: string | string[];
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider,
    areaServed,
  };
}
