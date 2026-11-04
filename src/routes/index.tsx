import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/hero-advocate.jpg";
import court from "@/assets/court.jpg";
import portrait from "@/assets/advocate-portrait.jpg";
import { ConsultationSection, TeamSection, GlimpsesSection, FaqSection } from "@/components/site/Sections";
import { PracticeAreasSection } from "@/components/site/PracticeAreas";
import { SiteShell, SectionTitle } from "@/components/site/Layout";
import { FIRM, STATS } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urmika Juris & Associates | Advocates & Legal Consultants" },
      { name: "description", content: "Expert legal counsel in criminal, family, property, civil and corporate law. Led by Advocate Aashish Choudhary." },
      { property: "og:title", content: "Urmika Juris & Associates | Advocates & Legal Consultants" },
      { property: "og:description", content: "Expert legal counsel in criminal, family, property, civil and corporate law." },
    ],
  }),
  component: Index,
});

const WHY = [
  "Confidential, client-first consultation",
  "Experienced in District, High Court & Supreme Court",
  "Transparent fees, no hidden charges",
  "Regular case updates at every stage",
];

const TESTIMONIALS = [
  { name: "Rohit Sharma", text: "Handled my property dispute with great clarity and dedication. Highly recommended." },
  { name: "Priya Verma", text: "Very supportive during my family matter. Professional, patient and honest advice." },
  { name: "Amit Gupta", text: "Got bail within days. The team was responsive and always kept me updated." },
];

function Index() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
        <img src={hero} alt="Advocate in chambers" width={1280} height={1024} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy/60 px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-gold" /> {FIRM.tagline}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Welcome to <span className="text-gold-gradient">Urmika Juris</span> & Associates
          </h1>
          <p className="mt-5 font-serif text-2xl text-gold-soft">Trusted Legal Counsel. Unwavering Commitment to Justice.</p>
          <p className="mt-4 max-w-xl text-navy-foreground/75">
            Led by Advocate {FIRM.advocate}, we provide strategic, ethical and result-driven legal representation across courts — from consultation to final verdict.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={FIRM.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold">
              <Phone className="h-4 w-4" /> Call {FIRM.phone}
            </a>
            <Link to="/practice-areas" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 font-semibold hover:bg-navy">
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-gold/20 bg-navy/60 p-4 backdrop-blur">
                <div className="font-display text-2xl text-gold">{s.value}</div>
                <div className="text-xs text-navy-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <div className="relative">
            <img src={portrait} alt={`Advocate ${FIRM.advocate}`} loading="lazy" className="mx-auto h-[560px] w-full max-w-md rounded-2xl object-cover object-top shadow-card" />
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-gold px-6 py-4 text-primary-foreground shadow-gold">
              <div className="font-display text-3xl">15+</div>
              <div className="text-xs font-semibold">Years of Excellence</div>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">About the Firm</p>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">Advocate {FIRM.advocate}</h2>
            <p className="mt-5 text-muted-foreground">
              Urmika Juris & Associates is a full-service law firm built on the timeless principle of <em>Satyamev Jayate</em> — truth alone triumphs. We represent individuals, families and businesses with diligence, discretion and deep legal insight.
            </p>
            <ul className="mt-6 space-y-3">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />{w}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-semibold text-navy-foreground">
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Practice */}
      <PracticeAreasSection limit={6} showMore subtitle="Focused counsel across every major branch of law — each area handled by advocates who appear before these forums regularly." />

      <ConsultationSection />
      <TeamSection />
      <GlimpsesSection />

      {/* Courts band */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-navy-foreground">
        <img src={court} alt="Supreme Court of India" loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <SectionTitle light eyebrow="Our Reach" title="Representing Clients Across Courts" />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Supreme Court of India", "High Courts", "District & Sessions Courts", "Family Courts", "Consumer Commissions", "Tribunals & RERA"].map((c) => (
              <div key={c} className="rounded-xl border border-gold/25 bg-navy/70 px-4 py-5 font-serif text-lg">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-card p-8 shadow-card">
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-4 text-muted-foreground">{t.text}</p>
                <p className="mt-6 font-display text-navy">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </SiteShell>
  );
}
