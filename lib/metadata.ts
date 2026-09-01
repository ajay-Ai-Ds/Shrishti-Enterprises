import type { Metadata } from "next";
import { BUSINESS } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BUSINESS.url}${path}`;
  return {
    title: `${title} | ${BUSINESS.name}`,
    description,
    keywords: [
      ...keywords,
      "safety nets bangalore",
      "invisible grills bangalore",
      "shrishti enterprises",
    ],
    authors: [{ name: BUSINESS.name }],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BUSINESS.name}`,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BUSINESS.url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS.name}`,
      description,
      images: [`${BUSINESS.url}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
