import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Scale,
  Clock,
  CheckCircle2,
  Gavel,
  Pause,
  Play,
} from "lucide-react";
import court from "@/assets/court.jpg";
import portrait from "@/assets/advocate-portrait.jpg";
import urmikaOriginalLogo from "@/assets/urmika-original-logo.jpg";
import courtTisHazari from "@/assets/courts/court-tis-hazari.jpg";
import courtDelhiHighCourt from "@/assets/courts/court-delhi-high-court.jpg";
import courtSupremeCourt from "@/assets/courts/court-supreme-court.jpg";
import courtPatialaHouse from "@/assets/courts/court-patiala-house.jpg";
import courtSaket from "@/assets/courts/court-saket.jpg";
import courtNclt from "@/assets/courts/court-nclt.jpg";
import { SiteShell } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";
import { ConsultationMessageSection } from "@/components/site/ConsultationMessageSection";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";
import { WhyChooseSection } from "@/components/site/WhyChooseSection";
import { PromiseSection } from "@/components/site/PromiseSection";
import { FaqWithImmediateHelpSection } from "@/components/site/FaqWithImmediateHelpSection";
import { useConsultationModal } from "@/components/site/ConsultationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urmika Juris & Associates | Advocates, Tis Hazari Courts Delhi" },
      {
        name: "description",
        content:
          "Urmika Juris & Associates — Trusted advocates practicing at Tis Hazari Courts, Delhi High Court and Supreme Court. Criminal Defense, Family Law, Property Disputes, Corporate Litigation.",
      },
      {
        property: "og:title",
        content: "Urmika Juris & Associates | Advocates, Tis Hazari Courts Delhi",
      },
      {
        property: "og:description",
        content:
          "Advocates Aashish Choudhary, Satish Chand, Durga Das and Krishan Kumar representing clients across Delhi courts.",
      },
    ],
  }),
  component: IndexPage,
});

/**
 * Infinite scrolling marquee items below the hero.
 */
const MARQUEE_ITEMS = [
  { icon: MapPin, text: "Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054" },
  { icon: Scale, text: "Delhi High Court & Supreme Court Representation" },
  { icon: Clock, text: "Initial 30-Minute Structured Consultation" },
  { icon: ShieldCheck, text: "Bar Council of India Rule 36 Ethical Compliance" },
  { icon: Gavel, text: "Founder & Principal Advocate: Aashish Choudhary" },
  { icon: Gavel, text: "Advocates: Satish Chand, Durga Das, Krishan Kumar" },
  { icon: CheckCircle2, text: "Tis Hazari District & Sessions Trial Benches" },
  { icon: Scale, text: "Criminal, Civil, Matrimonial, Property & Corporate Practice" },
];

function IndexPage() {
  const { openModal } = useConsultationModal();
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  return (
    <SiteShell>
      {/* 1. HERO SECTION (High-visibility Supreme Court courtroom background + Sleek Luxury Seal Badge) */}
      <section className="relative overflow-hidden bg-[#0F1D38] text-white">
        {/* Visibly distinct Supreme Court architecture background matching VakeelSaab */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={court}
            alt="Supreme Court of India & Judicial Courtroom Architecture"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-center opacity-85 brightness-95 contrast-110 filter saturate-105"
          />
          {/* Subtle directional gradient ensuring crisp contrast for typography while keeping Supreme Court dome and pillars clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-navy-deep/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Headlines, Description & CTAs */}
            <div className="lg:col-span-8">
              {/* Architectural Bar Badge */}
              <div className="inline-flex items-center gap-2.5 border-l-2 border-gold bg-black/55 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold backdrop-blur-md mb-6">
                <Scale className="h-3.5 w-3.5 text-gold" />
                <span>{FIRM.tagline}</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300 font-normal">
                  Chamber 298A, Tis Hazari Courts, Delhi
                </span>
              </div>

              {/* H1 Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Welcome to <span className="text-gold">Urmika Juris</span> & Associates
              </h1>

              {/* Subtitle */}
              <p className="mt-4 font-serif text-xl sm:text-2xl text-amber-100/90 leading-snug">
                Strategic, Ethical & Dedicated Legal Advocacy Across Delhi Courts
              </p>

              {/* Core Description with Verified Advocate Names */}
              <p className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl drop-shadow-sm">
                Led by Founder & Principal Advocate{" "}
                <span className="text-white font-semibold">Aashish Choudhary</span> alongside
                advocates <span className="text-white font-semibold">Satish Chand</span>,{" "}
                <span className="text-white font-semibold">Durga Das</span>, and{" "}
                <span className="text-white font-semibold">Krishan Kumar</span>, delivering
                disciplined courtroom advocacy across Tis Hazari Courts, the Delhi High Court, and
                appellate tribunals.
              </p>

              {/* CTAs: Book Consultation (modal) + Call + WhatsApp */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-lg hover:bg-amber-400 hover:shadow-xl transition-[background-color,box-shadow,transform] duration-200 active:scale-95 cursor-pointer motion-reduce:transform-none"
                >
                  <span>Book 30-Minute Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={FIRM.phoneHref}
                  className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-[background-color,border-color] duration-200"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  <span>Call {FIRM.phone}</span>
                </a>

                <Link
                  to="/legal-services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-gold underline underline-offset-4 py-2 px-1 transition-colors"
                >
                  <span>Legal Services</span>
                </Link>
              </div>
            </div>

            {/* Right 4 Columns: Sleek, High-End Seal Badge */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative rounded-2xl border border-white/20 bg-[#0A1428]/85 p-7 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors duration-300 hover:border-gold/50">
                {/* Subtle gold glow accent */}
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gold/15 blur-2xl pointer-events-none" />

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Official Emblem Ring */}
                  <div className="relative mb-3">
                    <img
                      src={urmikaOriginalLogo}
                      alt="Urmika Juris and Associates official logo"
                      className="h-28 w-28 rounded-full object-cover border-2 border-gold shadow-xl ring-4 ring-gold/20"
                    />
                  </div>

                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/40 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold mt-1 mb-2">
                    <Scale className="h-3 w-3 text-gold" />
                    <span>Tis Hazari Courts • Delhi</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                    Urmika Juris & Associates
                  </h3>
                  <div className="text-xs text-gold font-serif italic mt-0.5">
                    Satyamev Jayate
                  </div>

                  {/* Divider */}
                  <div className="my-3.5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Chamber Address */}
                  <div className="text-xs text-gray-300 leading-relaxed w-full">
                    <div className="font-semibold text-white flex items-center justify-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      <span>Chamber 298A, Western Wing</span>
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Tis Hazari Courts, Delhi - 110054
                    </div>
                  </div>

                  {/* Principal Advocate Info */}
                  <div className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gold">
                      Founder & Principal Advocate
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      Advocate Aashish Choudhary
                    </div>
                    <div className="text-[10px] text-gray-300 mt-0.5">
                      Delhi Bar Council & Associates
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <button
                    type="button"
                    onClick={openModal}
                    className="mt-4 w-full rounded-lg bg-gold py-2.5 text-xs font-bold text-navy hover:bg-amber-400 transition-colors duration-200 shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={FIRM.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppLogo className="h-4 w-4" />
                    <span>WhatsApp Chamber Line</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. INFINITE MARQUEE TICKER (Below Hero Section — Chamber Presence & Trust Points) */}
        <div className="relative border-t border-b border-white/10 bg-[#0A1428] py-3.5 overflow-hidden select-none">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              aria-label={isMarqueePaused ? "Resume ticker animation" : "Pause ticker animation"}
              aria-pressed={isMarqueePaused}
              className="absolute left-3 z-10 inline-flex items-center justify-center h-7 w-7 rounded bg-[#172B54]/95 border border-[#FEC556]/50 text-[#FEC556] hover:bg-[#FEC556] hover:text-[#172B54] transition-colors cursor-pointer shadow-md"
            >
              {isMarqueePaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
            <div
              className="animate-marquee flex items-center pl-12"
              style={{ animationPlayState: isMarqueePaused ? "paused" : undefined }}
            >
              {/* First sequence */}
              {MARQUEE_ITEMS.map((item, index) => (
                <div key={`m1-${index}`} className="flex items-center gap-2.5 mx-6 shrink-0">
                  <item.icon className="h-3.5 w-3.5 text-[#FEC556] shrink-0" />
                  <span className="text-xs font-semibold tracking-wide text-gray-200">
                    {item.text}
                  </span>
                  <span className="text-amber-500/40 text-xs ml-4">✦</span>
                </div>
              ))}
              {/* Duplicated sequence for seamless infinite loop */}
              {MARQUEE_ITEMS.map((item, index) => (
                <div key={`m2-${index}`} className="flex items-center gap-2.5 mx-6 shrink-0">
                  <item.icon className="h-3.5 w-3.5 text-[#FEC556] shrink-0" />
                  <span className="text-xs font-semibold tracking-wide text-gray-200">
                    {item.text}
                  </span>
                  <span className="text-amber-500/40 text-xs ml-4">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE FIRM & ADVOCATES (Advocate Aashish Choudhary Portrait & Legal Team) */}
      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Approved Photograph of Advocate Aashish Choudhary */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={portrait}
                  alt="Advocate Aashish Choudhary — Founder & Principal Advocate, Urmika Juris & Associates"
                  loading="lazy"
                  width={600}
                  height={750}
                  className="w-full h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B54]/95 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#FEC556] font-bold">
                    Founder & Principal Advocate
                  </div>
                  <div className="font-heading text-xl font-bold mt-0.5">
                    Advocate Aashish Choudhary
                  </div>
                  <div className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FEC556]" />
                    <span>Chamber 298A, Tis Hazari Courts, Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Firm Introduction & Verified Advocate Details */}
            <div className="lg:col-span-7">
              <div className="border-l-2 border-navy pl-3 mb-3">
                <span className="text-xs font-semibold tracking-wide text-navy">
                  Firm Leadership & Practitioners
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-1">
                  About Urmika Juris & Associates
                </h2>
              </div>
              <div className="mt-3 h-1 w-16 rounded bg-gold" />

              <p className="mt-5 text-base text-gray-700 leading-relaxed">
                Urmika Juris & Associates is a full-service litigation and legal advisory law firm
                anchored by the constitutional ethos of <em>Satyamev Jayate</em> — Truth Alone
                Triumphs. Founded and led by{" "}
                <strong className="text-navy">Advocate Aashish Choudhary</strong>, the firm
                operates its primary chamber at Tis Hazari Courts in Delhi, handling contentious
                courtroom trials, appellate matters, and strategic advisory.
              </p>

              {/* Verified Advocates List */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Advocates Representing the Firm:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FIRM.advocates.map((adv) => (
                    <div
                      key={adv.name}
                      className="rounded-xl border border-gray-200 bg-surface-cream p-4 shadow-sm hover:border-gold transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Gavel className="h-4 w-4 text-navy" />
                        <div className="font-heading text-sm font-bold text-navy">
                          {adv.name}
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-navy/85">{adv.role}</div>
                      <div className="text-[11px] text-gray-600 mt-1">{adv.forum}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Principles */}
              <ul className="mt-6 space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-whatsapp shrink-0 mt-0.5" />
                  <span>
                    <strong>Ethical Advocacy:</strong> Strict compliance with Rule 36 of the Bar
                    Council of India standards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-whatsapp shrink-0 mt-0.5" />
                  <span>
                    <strong>Documentary Diligence:</strong> Thorough pre-litigation scrutiny to
                    avert procedural delays.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-whatsapp shrink-0 mt-0.5" />
                  <span>
                    <strong>Privileged Communication:</strong> Confidentiality protected under
                    Section 126 of the Evidence Act.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded bg-navy px-6 py-3 text-xs font-bold text-white hover:bg-navy-hover transition-colors duration-200 shadow-md"
                >
                  <span>Read Full About Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold" />
                </Link>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold-dark transition-colors cursor-pointer"
                >
                  <span>Book Consultation Terms</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BIG CONSULTATION NARRATIVE MESSAGE (Matching Image 3 — Placed before Legal Services) */}
      <ConsultationMessageSection />

      {/* 5. LEGAL SERVICES SECTION (Homepage displays 4 core services in a clean single 4-col row, remaining in Explore All) */}
      <LegalServicesSection limit={4} showCategoryFilters={true} showViewAll={true} />

      {/* 6. HOW WE WORK SECTION (Matching Image 4 — Globe & Scales left card + 4 yellow roadmap cards) */}
      <HowWeWorkSection />

      {/* 7. WHY CHOOSE SECTION (Matching VakeelSaab — 6 feature cards) */}
      <WhyChooseSection />

      {/* 8. PROMISE SECTION ("The Urmika Juris Promise: A Hybrid Path to Justice" with 3 pillars) */}
      <PromiseSection />

      {/* 9. JUDICIAL FORUMS & COURT COVERAGE (With Authentic Court Building Photographs) */}
      <section className="relative overflow-hidden bg-navy-deep py-20 md:py-24 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block border-l-2 border-gold bg-black/40 px-3.5 py-1 text-xs font-semibold tracking-wide text-gold mb-3">
              Jurisdictional Practice
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Representing Matters Across Courts in Delhi
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Our advocates maintain active presence and direct filing privileges across the Supreme
              Court, High Court of Delhi, Tis Hazari, and specialized commercial tribunals.
            </p>
          </div>

          {/* 6-Card Judicial Coverage Grid with Real Court Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                name: "Tis Hazari District Courts",
                jurisdiction: "Headquarters & Primary Chamber (Ch. 298A)",
                desc: "Trial court representation in Sessions, Civil Judge, and ADJ benches for Central and West Delhi.",
                photo: courtTisHazari,
                badge: "Permanent Chamber",
              },
              {
                name: "High Court of Delhi",
                jurisdiction: "Sher Shah Road, New Delhi",
                desc: "Original civil suits, criminal quashing petitions (BNSS/CrPC), writ petitions (Art 226), and commercial appeals.",
                photo: courtDelhiHighCourt,
                badge: "Appellate & Writs",
              },
              {
                name: "Supreme Court of India",
                jurisdiction: "Tilak Marg, New Delhi",
                desc: "Special Leave Petitions (SLP under Art 136), transfer petitions, and constitutional writs (Art 32).",
                photo: courtSupremeCourt,
                badge: "Apex Court",
              },
              {
                name: "Patiala House Courts",
                jurisdiction: "India Gate / New Delhi District",
                desc: "Special CBI, ED, and economic offences trial courts, along with New Delhi district civil & criminal litigation.",
                photo: courtPatialaHouse,
                badge: "District & Sessions",
              },
              {
                name: "Saket District Courts",
                jurisdiction: "South & South East Delhi",
                desc: "Trial defense in South Delhi criminal cases, family court custody/matrimonial matters, and motor accident claims.",
                photo: courtSaket,
                badge: "District & Sessions",
              },
              {
                name: "NCLT & Appellate Tribunals",
                jurisdiction: "CGO Complex & Delhi Benches",
                desc: "Insolvency and Bankruptcy Code (IBC) litigation, company disputes, RERA Delhi, and consumer commissions.",
                photo: courtNclt,
                badge: "Specialized Benches",
              },
            ].map((courtItem) => (
              <div
                key={courtItem.name}
                className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 bg-navy/90 shadow-xl hover:border-gold transition-[transform,border-color] duration-300 hover:-translate-y-1.5 motion-reduce:transform-none"
              >
                {/* Court Photo Container */}
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  <img
                    src={courtItem.photo}
                    alt={courtItem.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-navy-deep/85 border border-gold/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm rounded">
                    {courtItem.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {courtItem.name}
                    </h3>
                    <div className="text-xs font-semibold text-amber-200/90 mt-1 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span>{courtItem.jurisdiction}</span>
                    </div>
                    <p className="mt-3 text-xs text-gray-300 leading-relaxed">{courtItem.desc}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <Scale className="h-3.5 w-3.5 text-gold" />
                      <span>Active Appearance</span>
                    </span>
                    <a
                      href={`https://wa.me/918802487291?text=${encodeURIComponent(`Hello Urmika Juris, I would like to enquire regarding legal representation before ${courtItem.name} (${courtItem.jurisdiction}).`)}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire regarding representation before ${courtItem.name}`}
                      className="font-bold text-gold hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Enquire Forum</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS & IMMEDIATE LEGAL HELP (Matching Image 5) */}
      <FaqWithImmediateHelpSection />

      {/* 11. PRE-FOOTER CONSULTATION PROMISE */}
      <section className="bg-surface-cream border-t border-amber-200 py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block border-l-2 border-navy bg-white px-3 py-1 text-xs font-semibold tracking-wide text-navy">
            Confidential Consultation Booking
          </div>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-navy">
            Consult With Our Advocates on Your Matter
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            Review our 30-minute consultation terms and connect directly with our chamber at Tis
            Hazari Courts.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded bg-navy px-7 py-3.5 text-sm font-bold text-gold shadow-md hover:bg-navy-hover transition-colors duration-200 cursor-pointer"
            >
              Book 30-Minute Consultation
            </button>
            <Link
              to="/contact"
              className="rounded border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
