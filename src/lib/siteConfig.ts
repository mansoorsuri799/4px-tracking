/** Central brand / domain config for Maersk Tracking */
export const SITE_ORIGIN = "https://maersktracking.com";

export const BRAND = {
  name: "Maersk Tracking",
  shortName: "Maersk Tracking",
  keyword: "maersk tracking",
  domain: "maersktracking.com",
  email: "contact@maersktracking.com",
  twitter: "@maersktracking",
  tagline: "Track Maersk Containers, Shipments & Parcels",
  description:
    "Track Maersk containers, shipments, and parcels worldwide. Enter a container number, bill of lading, or booking reference for live status and milestone updates.",
} as const;

/** Official Maersk site (optional outbound link) */
export const OFFICIAL_URL = "https://www.maersk.com";

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/maersk-tracking.webp",
  favicon: "/maersk-tracking.webp",
  brandLogo: "/maersk-tracking.webp",
  banner: "/maersk-tracking-website.webp",
  og: "/feature/og-image-1200x630.png",
  ogSquare: "/feature/og-square-1200x1200.png",
  twitter: "/feature/twitter-card-1200x600.png",
  website: "/maersk-tracking-website.webp",
  tool: "/maersk-tracking-shipment.webp",
  container: "/maersk-tracking-container.webp",
  parcel: "/maersk-tracking-parcel.webp",
  shipment: "/maersk-tracking-shipment.webp",
  heroAlt: "/maersk-tracking-container.webp",
} as const;

export const ARTICLES = [
  {
    slug: "how-to-track-maersk-shipment",
    title: "How to Track a Maersk Shipment: Step-by-Step Guide",
    metaTitle: "How to Track a Maersk Shipment | Step-by-Step Guide",
    description:
      "Learn how to track a Maersk shipment with a container number, bill of lading, or booking reference — on maersktracking.com and on Maersk’s own tools.",
    date: "2026-10-22",
    image: "/blog/how-to-track-maersk-shipment.webp",
  },
  {
    slug: "maersk-container-tracking",
    title: "Maersk Container Tracking: Find Your Container by Number",
    metaTitle: "Maersk Container Tracking by Container Number",
    description:
      "Use Maersk container tracking to follow ISO container numbers (e.g. MAEU…), vessel milestones, port events, and estimated arrival windows.",
    date: "2026-10-20",
    image: "/blog/maersk-container-tracking.webp",
  },
  {
    slug: "maersk-bill-of-lading-tracking",
    title: "Maersk Bill of Lading Tracking: Track by B/L or Booking",
    metaTitle: "Maersk Bill of Lading & Booking Tracking Guide",
    description:
      "Track Maersk cargo with a bill of lading or booking reference when you do not have the container number yet — and know which ID to use.",
    date: "2026-10-18",
    image: "/blog/maersk-bill-of-lading-tracking.webp",
  },
  {
    slug: "maersk-tracking-not-updating",
    title: "Maersk Tracking Not Updating? Causes and What to Do",
    metaTitle: "Maersk Tracking Not Updating? Causes & Fixes",
    description:
      "Maersk tracking not updating for days? Learn why ocean and inland scans pause, how long to wait, and proven ways to check your shipment correctly.",
    date: "2026-10-16",
    image: "/blog/maersk-tracking-not-updating.webp",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "How do I track a Maersk shipment?",
    a: "Enter your container number, bill of lading, or booking reference in the tracker on maersktracking.com. You can also track on maersk.com by choosing Ocean, Air, LCL, or Parcel and pasting the same reference.",
  },
  {
    q: "What numbers work for Maersk tracking?",
    a: "Common references include ISO container numbers (often starting with MAEU or other owner prefixes), Maersk bill of lading numbers, booking references, and parcel tracking numbers for Maersk parcel products.",
  },
  {
    q: "Where do I find my Maersk tracking number?",
    a: "Check your booking confirmation, bill of lading, shipping instructions, or the email/portal message from your freight forwarder or shipper. Container numbers are also stamped on the container doors.",
  },
  {
    q: "What is the difference between a container number and a B/L?",
    a: "A container number identifies one physical box. A bill of lading covers the contractual shipment and may include one or more containers. Booking references identify the booking before or alongside the B/L.",
  },
  {
    q: "Why isn’t my Maersk tracking number working yet?",
    a: "Tracking often activates after the booking is confirmed and the first terminal or carrier event is recorded. Wrong reference type, typos, or shipments still with the shipper can delay the first scan.",
  },
  {
    q: "Why does Maersk tracking stop updating for several days?",
    a: "Quiet gaps are common while a vessel is at sea, during transshipment, or between inland handoffs. Ocean legs may go days without a new event even when the cargo is moving as planned.",
  },
  {
    q: "Can I track Maersk parcels the same way as containers?",
    a: "Parcel products use parcel tracking numbers and a parcel flow, while ocean cargo uses container, B/L, or booking IDs. Use the number printed on your parcel label or booking confirmation.",
  },
  {
    q: "How accurate are Maersk estimated arrival dates?",
    a: "ETAs are planning estimates. Weather, port congestion, customs holds, and vessel schedule changes can move the real arrival later or earlier than the estimate shown.",
  },
  {
    q: "What should I do if I cannot track my Maersk container?",
    a: "Confirm you are using the correct reference type, check for transposed characters, try again later, and contact your shipper or Maersk support with the booking details if the number still fails.",
  },
  {
    q: "Is maersktracking.com affiliated with Maersk?",
    a: "No. MaerskTracking.com is an independent multi-carrier tracking site. We are not affiliated with A.P. Moller - Maersk. For bookings, claims, and account issues, contact Maersk or your freight partner through official channels.",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/Maersk/",
  twitter: "https://x.com/Maersk",
  instagram: "https://www.instagram.com/maersk/",
  youtube: "https://www.youtube.com/user/MaerskLine",
} as const;
