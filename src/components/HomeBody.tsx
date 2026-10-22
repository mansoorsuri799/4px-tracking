"use client";

import Image from "next/image";
import MarkdownContent from "@/components/MarkdownContent";
import FaqAccordion from "@/components/FaqAccordion";
import { FeatureCards, StepCards } from "@/components/FeatureCards";
import { FadeIn } from "@/components/motion/Motion";
import { BRAND, HOME_FAQS, IMAGES } from "@/lib/siteConfig";

export default function HomeBody({
  beforeSteps,
  afterSteps,
}: {
  beforeSteps: string;
  afterSteps: string;
}) {
  return (
    <>
      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn>
            <p className="section-kicker">Why shoppers trust us</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Why Choose Us?
            </h2>
            <p className="mt-2 max-w-2xl text-ink-mute">
              Built for 4PX packages — clear milestones, multi-carrier support, and a simple tracking flow.
            </p>
          </FadeIn>
          <div className="mt-10">
            <FeatureCards />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#FD6B26]/15 bg-gradient-to-br from-[#151848] via-[#1A1D5C] to-[#0F1238] py-14 text-white md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <FadeIn>
            <p className="section-kicker !text-white/60">Built for cross-border visibility</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              One tracker for every 4PX number
            </h2>
            <p className="mt-3 max-w-md text-white/75">
              Paste your 4PX tracking number on {BRAND.domain} and follow warehouse,
              customs, and last-mile milestones without jumping between portals.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift ring-1 ring-white/15">
              <Image
                src={IMAGES.website}
                alt={`${BRAND.name} website preview`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 560px"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 hidden w-40 overflow-hidden rounded-xl shadow-lift ring-1 ring-white/20 sm:block md:w-48">
              <Image
                src={IMAGES.shipment}
                alt={`${BRAND.name} shipment tracking visual`}
                width={384}
                height={240}
                className="h-auto w-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
          <MarkdownContent content={beforeSteps} />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-4 md:px-6">
          <FadeIn className="mb-8 text-center md:mb-10">
            <p className="section-kicker">Quick start</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Track in three simple steps
            </h2>
          </FadeIn>
          <StepCards />
        </div>

        {afterSteps ? (
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:pb-16">
            <MarkdownContent content={afterSteps} />
          </div>
        ) : null}
      </section>

      <section className="border-t border-slate-200 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <FadeIn>
            <p className="section-kicker">Ready to check your package?</p>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Track your 4PX shipment now
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-ink-mute">
              Paste your 4PX tracking number in the box at the top of this page for live updates.
            </p>
            <a
              href="#tracking-number"
              className="mt-6 inline-flex rounded-xl bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-dark focus-ring"
            >
              Go to tracker
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeIn>
            <p className="section-kicker">Help center</p>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              FAQs About 4PX Tracking
            </h2>
            <p className="mt-2 mb-8 text-ink-mute">
              Quick answers to the questions cross-border shoppers ask most.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FaqAccordion faqs={HOME_FAQS} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
