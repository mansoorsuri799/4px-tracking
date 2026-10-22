/** Central brand / domain config for SpeedPak Tracking */
export const SITE_ORIGIN = "https://speedpaktracking.com";

export const BRAND = {
  name: "SpeedPak Tracking",
  shortName: "SpeedPak Tracking",
  keyword: "speedpak tracking",
  domain: "speedpaktracking.com",
  email: "contact@speedpaktracking.com",
  twitter: "@speedpaktracking",
  tagline: "Track SpeedPAK Packages, Orders & Shipments",
  description:
    "Track SpeedPAK packages and eBay cross-border shipments in one place. Enter your EE/ES tracking number for live status, last-mile updates, and clear milestone explanations.",
} as const;

/** Official Orange Connex / SpeedPAK tracking (optional outbound link) */
export const OFFICIAL_URL = "https://orangeconnex.cn/tracking";

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/speedpak-tracking.webp",
  favicon: "/speedpak-tracking.webp",
  brandLogo: "/speedpak-tracking.webp",
  banner: "/speedpak-tracking-tool.webp",
  og: "/feature/og-image-1200x630.png",
  ogSquare: "/feature/og-square-1200x1200.png",
  twitter: "/feature/twitter-card-1200x600.png",
  website: "/speedpak-tracking-tool.webp",
  tool: "/speedpak-tracking-tool.webp",
  container: "/speedpak-tracking-containers.webp",
  parcel: "/speedpak-tracking-orders.webp",
  shipment: "/speedpak-tracking-shipment.webp",
  orders: "/speedpak-tracking-orders.webp",
  heroAlt: "/speedpak-tracking-shipment.webp",
} as const;

export const ARTICLES = [
  {
    slug: "how-to-track-speedpak-package",
    title: "How to Track a SpeedPAK Package: Step-by-Step Guide",
    metaTitle: "How to Track a SpeedPAK Package | Step-by-Step Guide",
    description:
      "Learn how to track a SpeedPAK package with your EE or ES tracking number — on speedpaktracking.com, Orange Connex, and last-mile carriers.",
    date: "2026-10-22",
    image: "/blog/how-to-track-speedpak-package.webp",
  },
  {
    slug: "speedpak-tracking-number",
    title: "SpeedPAK Tracking Number: EE, ES Formats Explained",
    metaTitle: "SpeedPAK Tracking Number Format (EE / ES) Explained",
    description:
      "What a SpeedPAK tracking number looks like, where to find it on eBay, and how EE vs ES prefixes relate to Standard and Economy service.",
    date: "2026-10-20",
    image: "/blog/speedpak-tracking-number.webp",
  },
  {
    slug: "speedpak-tracking-not-updating",
    title: "SpeedPAK Tracking Not Updating? Causes and What to Do",
    metaTitle: "SpeedPAK Tracking Not Updating? Causes & Fixes",
    description:
      "SpeedPAK tracking stuck for days? Learn why cross-border scans pause, how long to wait, and proven ways to check your package correctly.",
    date: "2026-10-18",
    image: "/blog/speedpak-tracking-not-updating.webp",
  },
  {
    slug: "speedpak-4px-tracking",
    title: "SpeedPAK and 4PX Tracking: How They Connect",
    metaTitle: "SpeedPAK & 4PX Tracking — How the Networks Connect",
    description:
      "Understand how SpeedPAK, Orange Connex, and 4PX relate when tracking eBay packages from China, plus which number to use at each stage.",
    date: "2026-10-16",
    image: "/blog/speedpak-4px-tracking.webp",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "How do I track a SpeedPAK package?",
    a: "Paste your SpeedPAK tracking number (often starting with EE or ES) into the tracker on speedpaktracking.com. You can also check Orange Connex shipment tracking or the last-mile carrier once a local tracking number appears.",
  },
  {
    q: "What does a SpeedPAK tracking number look like?",
    a: "Most SpeedPAK numbers are long alphanumeric codes beginning with EE or ES (Standard vs Economy style prefixes). Some eBay SpeedPAK labels may also use EX or EM prefixes depending on the service uploaded by the seller.",
  },
  {
    q: "Where do I find my SpeedPAK tracking number?",
    a: "Open your eBay order details or the shipping confirmation email from the seller. The tracking number is listed under shipping / tracking. Copy it exactly — do not use the order number or invoice ID.",
  },
  {
    q: "How long does SpeedPAK shipping take?",
    a: "Standard SpeedPAK often lands in roughly 8–15 business days to many destinations; Economy can take longer. Customs, peak seasons, and last-mile networks can extend that window.",
  },
  {
    q: "Why isn’t my SpeedPAK tracking number working yet?",
    a: "Tracking usually activates after the seller hands the parcel to SpeedPAK / Orange Connex and the first warehouse or export scan posts. Typos, wrong prefix, or a number that has not been activated yet all return “not found.”",
  },
  {
    q: "Why does SpeedPAK tracking stop updating for several days?",
    a: "Quiet gaps are common during international transit, export/import customs, and handoff to a local postal or courier network. The package can still be moving even when new scans are sparse.",
  },
  {
    q: "Who delivers SpeedPAK packages in the US?",
    a: "After international transit and import processing, last-mile delivery is often handled by USPS or a regional courier (sometimes UniUni or similar partners). Your SpeedPAK timeline may show a new local tracking number at that stage.",
  },
  {
    q: "Is SpeedPAK the same as 4PX?",
    a: "They are related cross-border logistics brands that often appear on the same China-export journeys, but they are not identical labels. Use the tracking number printed on your label; our [SpeedPAK and 4PX guide](/speedpak-4px-tracking) explains how the networks connect.",
  },
  {
    q: "Can I track SpeedPAK on USPS Informed Delivery?",
    a: "Sometimes a USPS number appears after import; other times you only see SpeedPAK / Orange Connex events until delivery. If a USPS barcode is applied, Informed Delivery may show the local leg.",
  },
  {
    q: "Is speedpaktracking.com affiliated with SpeedPAK or eBay?",
    a: "No. SpeedPakTracking.com is an independent multi-carrier tracking site. We are not affiliated with Orange Connex, SpeedPAK, 4PX, or eBay. For claims and seller disputes, use eBay Buyer Protection or the seller’s official support channels.",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/",
  twitter: "https://x.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
} as const;
