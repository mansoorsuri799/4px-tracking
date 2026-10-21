import Link from "next/link";
import Image from "next/image";
import { ARTICLES, BRAND, IMAGES, ROUTES, SOCIAL } from "@/lib/siteConfig";

const socialLinks = [
  { href: SOCIAL.facebook, label: "Facebook" },
  { href: SOCIAL.instagram, label: "Instagram" },
  { href: SOCIAL.twitter, label: "X" },
  { href: SOCIAL.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <Image
                src={IMAGES.logo}
                alt=""
                width={36}
                height={36}
                className="rounded-lg ring-1 ring-white/15"
              />
              <span className="font-display text-lg font-bold text-white">
                Shein Tracking
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Independent package tracking for Shein orders and multi-carrier shipments. Real-time
              updates so you always know where your package is.
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Not affiliated with SHEIN or its parent companies.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition-colors hover:border-white/40 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href={ROUTES.home} className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blog} className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={ROUTES.about} className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.privacy} className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={ROUTES.disclaimer} className="transition-colors hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Guides
            </h2>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {ARTICLES.slice(0, 4).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.slug}`}
                    className="line-clamp-1 transition-colors hover:text-white"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-400">
              <a
                href={`mailto:${BRAND.email}`}
                className="transition-colors hover:text-white"
              >
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. |{" "}
            <Link href="/" className="transition-colors hover:text-white">
              {BRAND.domain}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
