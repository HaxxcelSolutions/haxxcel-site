import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haxxcel Solutions",
    short_name: "Haxxcel",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#111844",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
