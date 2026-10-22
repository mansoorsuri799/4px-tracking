import Script from "next/script";
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeBody from "@/components/HomeBody";
import HomeGuides from "@/components/HomeGuides";
import { getMarkdown } from "@/lib/content";
import { BRAND, HOME_FAQS, IMAGES, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "SpeedPak Tracking | Track SpeedPAK Packages & Orders",
  },
  description: BRAND.description,
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "SpeedPak Tracking | Track SpeedPAK Packages & Orders",
    description: BRAND.description,
    url: SITE_ORIGIN,
    siteName: BRAND.name,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.og}`, width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeedPak Tracking | Track SpeedPAK Packages & Orders",
    description: BRAND.description,
    images: [`${SITE_ORIGIN}${IMAGES.twitter}`],
  },
};

function prepareHomeContent(raw: string) {
  let md = raw
    .replace(/\n## \*\*FAQs About SpeedPak Tracking\*\*[\s\S]*$/, "")
    .replace(/\n## FAQs About SpeedPak Tracking[\s\S]*$/, "")
    .replace(/^#\s+\*?\*?[^\n]+\*?\*?\s*\n+/, "")
    // Feature-card placeholders — rendered as UI cards instead
    .replace(/\n## Why Choose Us\?[\s\S]*?(?=\n## What Is SpeedPAK Tracking\?)/, "\n")
    .replace(/\n## Real-Time Updates\n*/g, "\n")
    // Closing CTA line — covered by the tracker + guides
    .replace(/\n## Stay Updated\n[\s\S]*$/, "\n")
    .trim();

  const stepsMarker = "## How to Track Your SpeedPAK Shipment Step by Step?";
  const idx = md.indexOf(stepsMarker);
  if (idx === -1) {
    return { beforeSteps: md, afterSteps: "" };
  }

  const afterHeading = md.slice(idx + stepsMarker.length);
  const nextH2 = afterHeading.search(/\n## /);
  const intro =
    nextH2 === -1 ? afterHeading.trim() : afterHeading.slice(0, nextH2).trim();
  const beforeSteps = `${md.slice(0, idx + stepsMarker.length)}\n\n${intro}`.trim();
  const afterSteps = nextH2 === -1 ? "" : afterHeading.slice(nextH2).trim();

  return { beforeSteps, afterSteps };
}

export default function HomePage() {
  const { beforeSteps, afterSteps } = prepareHomeContent(getMarkdown("home"));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeHero />
      <HomeBody beforeSteps={beforeSteps} afterSteps={afterSteps} />
      <HomeGuides />
    </>
  );
}
