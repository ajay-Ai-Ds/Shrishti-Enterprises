import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.url;
  const now = new Date();

  // Core pages
  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  // Blog posts
  const blogPosts = [
    "/blog/best-safety-nets-bangalore",
    "/blog/invisible-grills-vs-traditional",
    "/blog/balcony-safety-nets-price",
    "/blog/benefits-of-invisible-grills",
    "/blog/protect-children-safety-nets",
    "/blog/bird-net-installation-guide",
    "/blog/cloth-hangers-installation-guide",
  ];

  return [
    ...coreRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${baseUrl}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${baseUrl}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((p) => ({
      url: `${baseUrl}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
