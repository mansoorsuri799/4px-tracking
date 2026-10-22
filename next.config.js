/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.trackingmore.com",
      },
      {
        protocol: "https",
        hostname: "4pxtracking.net",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/blog", destination: "/category/blog", permanent: true },
      // Legacy SpeedPAK article URLs → 4PX SERP guides
      {
        source: "/how-to-track-speedpak-package",
        destination: "/how-to-track-4px-package",
        permanent: true,
      },
      {
        source: "/speedpak-tracking-number",
        destination: "/4px-tracking-number",
        permanent: true,
      },
      {
        source: "/speedpak-tracking-not-updating",
        destination: "/4px-tracking-not-updating",
        permanent: true,
      },
      {
        source: "/speedpak-4px-tracking",
        destination: "/4px-express-tracking",
        permanent: true,
      },
      // Legacy Maersk article URLs → 4PX guides
      {
        source: "/how-to-track-maersk-shipment",
        destination: "/how-to-track-4px-package",
        permanent: true,
      },
      {
        source: "/maersk-container-tracking",
        destination: "/4px-tracking-number",
        permanent: true,
      },
      {
        source: "/maersk-bill-of-lading-tracking",
        destination: "/4px-express-tracking",
        permanent: true,
      },
      {
        source: "/maersk-tracking-not-updating",
        destination: "/4px-tracking-not-updating",
        permanent: true,
      },
      // Legacy Shein article URLs → closest 4PX guides
      {
        source: "/how-to-track-your-shein-order",
        destination: "/how-to-track-4px-package",
        permanent: true,
      },
      {
        source: "/how-long-does-shein-take",
        destination: "/4px-express-tracking",
        permanent: true,
      },
      {
        source: "/shein-tracking-statuses-explained",
        destination: "/4px-express-tracking",
        permanent: true,
      },
      {
        source: "/shein-tracking-not-updating",
        destination: "/4px-tracking-not-updating",
        permanent: true,
      },
      {
        source: "/shein-delivered-but-not-received",
        destination: "/4px-tracking-not-updating",
        permanent: true,
      },
      {
        source: "/shein-customs-clearance",
        destination: "/4px-express-tracking",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      // WordPress Yoast-style sitemap alias
      { source: "/sitemap_index.xml", destination: "/sitemap-index.xml" },
      { source: "/post-sitemap.xml", destination: "/index.xml" },
      { source: "/page-sitemap.xml", destination: "/index.xml" },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://api.17track.net https://api.trackingmore.com https://4pxtracking.net https://global.cainiao.com",
              "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
            ].join("; "),
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, must-revalidate" }],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
