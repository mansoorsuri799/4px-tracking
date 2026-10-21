/** Central brand / domain config for Shein Tracking */
export const SITE_ORIGIN = "https://sheintracking.com";

export const BRAND = {
  name: "Shein Tracking",
  shortName: "Shein Tracking",
  keyword: "shein tracking",
  domain: "sheintracking.com",
  email: "contact@sheintracking.com",
  twitter: "@sheintracking",
  tagline: "Track Shein Orders & Packages Worldwide",
  description:
    "Track Shein orders worldwide: find your tracking number, check live status, delivery times, customs clearance, and fixes when Shein tracking is not updating.",
} as const;

/** Official SHEIN site (optional outbound link) */
export const OFFICIAL_URL = "https://www.shein.com";

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/shein-tracking.webp",
  favicon: "/shein-tracking.webp",
  brandLogo: "/shein-tracking.webp",
  banner: "/shein-tracking-website.webp",
  og: "/feature/og-image-1200x630.png",
  ogSquare: "/feature/og-square-1200x1200.png",
  twitter: "/feature/twitter-card-1200x600.png",
  website: "/shein-tracking-website.webp",
  tool: "/shein-tracking-tool.webp",
  heroAlt: "/shein-tracking-2.webp",
} as const;

export const ARTICLES = [
  {
    slug: "how-to-track-your-shein-order",
    title: "How to Track Your Shein Order: Step-by-Step Guide",
    metaTitle: "How to Track Your Shein Order | Step-by-Step Guide",
    description:
      "Learn how to track a Shein order with your tracking number — on sheintracking.com, in the SHEIN app, and with the last-mile carrier.",
    date: "2026-10-20",
    image: "/blog/how-to-track-your-shein-order.webp",
  },
  {
    slug: "how-long-does-shein-take",
    title: "How Long Does Shein Take to Deliver? Real Times by Shipping Type",
    metaTitle: "How Long Does Shein Take to Deliver? (2026 Times)",
    description:
      "How long does Shein take to deliver? See realistic delivery windows for standard and express shipping, plus what customs and peak seasons add.",
    date: "2026-10-18",
    image: "/blog/how-long-does-shein-take.webp",
  },
  {
    slug: "shein-tracking-statuses-explained",
    title: "Shein Tracking Statuses Explained: Customs, In Transit & Out for Delivery",
    metaTitle: "Shein Tracking Statuses Explained (What Each Means)",
    description:
      "Decode Shein tracking statuses — order placed, shipped, customs, arrived at local facility, out for delivery — and what to do at each stage.",
    date: "2026-10-16",
    image: "/blog/shein-tracking-statuses-explained.webp",
  },
  {
    slug: "shein-tracking-not-updating",
    title: 'Shein Tracking Not Updating? Causes and What to Do',
    metaTitle: "Shein Tracking Not Updating? Causes & Fixes",
    description:
      "Shein tracking not updating for days? Learn why scans pause, how long to wait, and proven ways to check your package correctly.",
    date: "2026-10-14",
    image: "/blog/shein-tracking-not-updating.webp",
  },
  {
    slug: "shein-delivered-but-not-received",
    title: "Shein Says Delivered But I Didn't Receive It? What to Do",
    metaTitle: "Shein Delivered But Not Received? What to Do",
    description:
      "Shein tracking says delivered but you got nothing? Check alternate drop spots, contact the last-mile carrier, and open a claim in time.",
    date: "2026-10-12",
    image: "/blog/shein-delivered-but-not-received.webp",
  },
  {
    slug: "shein-customs-clearance",
    title: "Shein Package Undergoing Customs Clearance: How Long It Takes",
    metaTitle: "Shein Customs Clearance: How Long & What It Means",
    description:
      "Your Shein order says undergoing customs clearance? Learn what that status means, typical wait times, and when to worry.",
    date: "2026-10-10",
    image: "/blog/shein-customs-clearance.webp",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "How do I track my Shein order?",
    a: "Open My Orders in the SHEIN app or website, open the shipped order, copy the tracking number, then paste it into the tracker on sheintracking.com. You can also follow merchant status inside SHEIN and last-mile scans on the local courier site.",
  },
  {
    q: "Where do I find my Shein tracking number?",
    a: "Sign in → Me / Account → My Orders → select the shipped order → Track or View details. Copy the shipment tracking number shown there. Order IDs are not the same as tracking numbers.",
  },
  {
    q: "How long does Shein take to deliver to the United States?",
    a: "Standard Shein shipping to the US often arrives in about 7–20 days. Express options can land in roughly 3–10 days. Customs checks, sales events, and remote addresses can add extra time.",
  },
  {
    q: "Why hasn’t my Shein tracking number started working?",
    a: "Tracking often activates only after the warehouse scans and hands the parcel to a carrier. That can take 1–5 days after the order shows as shipped. Paste the number here once it appears in My Orders.",
  },
  {
    q: "Can I track a Shein package without a tracking number?",
    a: "You can follow high-level order status inside the SHEIN app, but detailed carrier scans need the tracking number shown after the package ships.",
  },
  {
    q: "Why does Shein tracking stop updating for several days?",
    a: "Long quiet gaps are common on international legs — especially between origin hubs, air freight, and customs. Official guidance often notes that updates can take 3–5 days between checkpoints.",
  },
  {
    q: "What does “undergoing customs clearance” mean on Shein tracking?",
    a: "It means border officials are processing the parcel before local delivery. Most clearances finish in a few days, but busy seasons or inspections can take longer.",
  },
  {
    q: "How do I track Shein orders after they enter my country?",
    a: "After customs release, many parcels move to a local postal or courier network. Use the same tracking number here and on the last-mile carrier’s site for the freshest scans.",
  },
  {
    q: "What should I do if Shein says delivered but I didn’t get the package?",
    a: "Check neighbors, building staff, lockers, and porches; confirm the delivery address; then contact the last-mile carrier and SHEIN support. Open a claim if you still cannot locate it.",
  },
  {
    q: "Why did my Shein order split into multiple tracking numbers?",
    a: "SHEIN often ships items from different warehouses or stock types separately. Each package gets its own number and may arrive on a different day — track every shipped line item.",
  },
  {
    q: "Which carriers does Shein use?",
    a: "Routes vary by destination and shipping method. Common partners include Cainiao-related lines, Yun Express, Yanwen, 4PX, national posts such as USPS, and express brands on faster lanes. The carrier name is usually shown next to Track in My Orders.",
  },
  {
    q: "Can I speed up Shein shipping after ordering?",
    a: "Once a shipment is in transit you usually cannot upgrade the service. Choose express at checkout when speed matters.",
  },
  {
    q: "How accurate are Shein estimated delivery dates?",
    a: "Estimated windows are helpful averages. Customs, weather, peak sales, and last-mile delays can push real delivery later than the estimate.",
  },
  {
    q: "Is sheintracking.com affiliated with SHEIN?",
    a: "No. SheinTracking.com is an independent multi-carrier tracking site. We are not affiliated with SHEIN. For refunds, returns, and account issues, contact SHEIN support through your account.",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/",
  twitter: "https://x.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
} as const;
