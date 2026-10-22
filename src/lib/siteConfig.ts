/** Central brand / domain config for 4PX Tracking */
export const SITE_ORIGIN = "https://4pxtracking.net";

export const BRAND = {
  name: "4PX Tracking",
  shortName: "4PX Tracking",
  keyword: "4px tracking",
  domain: "4pxtracking.net",
  email: "contact@4pxtracking.net",
  twitter: "@4PX_WrldWideExp",
  tagline: "Track 4PX Packages, Orders & Shipments",
  description:
    "Track 4PX Express packages and cross-border shipments in one place. Enter your 4PX tracking number for live status, customs milestones, and last-mile updates.",
} as const;

/** Official 4PX Tracking website */
export const OFFICIAL_URL = "https://4pxtracking.net/";

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/4px-tracking.webp",
  favicon: "/4px-tracking.webp",
  brandLogo: "/4px-tracking.webp",
  banner: "/4px-tracking-website.webp",
  og: "/feature/og-image-1200x630.png",
  ogSquare: "/feature/og-square-1200x1200.png",
  twitter: "/feature/twitter-card-1200x600.png",
  website: "/4px-tracking-website.webp",
  tool: "/4px-tracking-website.webp",
  container: "/4px-tracking-shipments.webp",
  parcel: "/4px-tracking-parcel.webp",
  shipment: "/4px-tracking-shipments.webp",
  orders: "/4px-tracking-orders.webp",
  heroAlt: "/4px-tracking-parcel.webp",
} as const;

export const ARTICLES = [
  {
    slug: "how-to-track-4px-package",
    title: "How to Track a 4PX Package: Step-by-Step Guide",
    metaTitle: "How to Track a 4PX Package | Step-by-Step Guide",
    description:
      "Learn how to track a 4PX package with your tracking number on the official 4pxtracking.net tracker and last-mile carriers after import.",
    date: "2026-10-22",
    image: "/blog/how-to-track-4px-package.webp",
  },
  {
    slug: "4px-tracking-number",
    title: "4PX Tracking Number: Formats and Where to Find Yours",
    metaTitle: "4PX Tracking Number Format Explained",
    description:
      "What a 4PX tracking number looks like, where sellers and marketplaces show it, and how to copy it correctly for a successful lookup.",
    date: "2026-10-20",
    image: "/blog/4px-tracking-number.webp",
  },
  {
    slug: "4px-tracking-not-updating",
    title: "4PX Tracking Not Updating? Causes and What to Do",
    metaTitle: "4PX Tracking Not Updating? Causes & Fixes",
    description:
      "4PX tracking stuck for days? Learn why cross-border scans pause, how long to wait, and practical ways to check your package correctly.",
    date: "2026-10-18",
    image: "/blog/4px-tracking-not-updating.webp",
  },
  {
    slug: "4px-express-tracking",
    title: "4PX Express Tracking: Statuses and Delivery Times",
    metaTitle: "4PX Express Tracking — Statuses & Delivery Times",
    description:
      "Understand common 4PX Express tracking statuses, typical delivery windows, and what each milestone means on your shipment timeline.",
    date: "2026-10-16",
    image: "/blog/4px-express-tracking.webp",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "How do I track a 4PX package?",
    a: "Paste your 4PX tracking number into the official tracker on 4pxtracking.net. After import, you can also follow a last-mile carrier once a local tracking number appears.",
  },
  {
    q: "What does a 4PX tracking number look like?",
    a: "4PX numbers are usually long alphanumeric codes printed on the shipping label or listed in your order confirmation. Formats vary by service product, so always copy the full string from the seller or marketplace — never use the order ID alone.",
  },
  {
    q: "Where do I find my 4PX tracking number?",
    a: "Open your order details or shipping confirmation email from the seller or marketplace. The tracking number is listed under shipping / tracking. Copy it exactly — do not use the invoice ID or payment reference.",
  },
  {
    q: "How long does 4PX shipping take?",
    a: "Many cross-border 4PX Express shipments land in roughly 1–3 weeks depending on origin, destination, service level, and customs. Peak seasons and import exams can extend that window. Reddit and buyer forums often note 3–4 weeks for some routes — treat estimates as planning ranges, not guarantees.",
  },
  {
    q: "Why isn’t my 4PX tracking number working yet?",
    a: "Tracking usually activates after the seller hands the parcel to 4PX and the first warehouse or export scan posts. Typos, truncated codes, or a number that has not been activated yet all return “not found.”",
  },
  {
    q: "Why does 4PX tracking stop updating for several days?",
    a: "Quiet gaps are common during international transit, export/import customs, and handoff to a local postal or courier network. The package can still be moving even when new scans are sparse — a frequent topic in buyer communities.",
  },
  {
    q: "Who delivers 4PX packages in the US?",
    a: "After international transit and import processing, last-mile delivery is often handled by USPS or a regional courier partner. Your 4PX timeline may show a new local tracking number at that stage.",
  },
  {
    q: "Is 4PX the same as SpeedPAK?",
    a: "They are related China-export logistics brands that sometimes appear on overlapping journeys, but they are not identical services. Use the tracking number printed on your label. Our guides focus on 4PX Express tracking.",
  },
  {
    q: "Can I track 4PX on USPS Informed Delivery?",
    a: "Sometimes a USPS number appears after import; other times you only see 4PX events until delivery. If a USPS barcode is applied, Informed Delivery may show the local leg.",
  },
  {
    q: "Is 4pxtracking.net the official 4PX Tracking website?",
    a: "Yes. 4PXTracking.net is the official 4PX Tracking website for live package lookups, status guides, and tracking help. For order claims or seller disputes, use your marketplace buyer protection or the seller’s support channels.",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/4pxgl/",
  twitter: "https://x.com/4PX_WrldWideExp",
  instagram: "https://www.instagram.com/popular/4px-tracking/",
  youtube: "https://www.youtube.com/@4px55",
} as const;
