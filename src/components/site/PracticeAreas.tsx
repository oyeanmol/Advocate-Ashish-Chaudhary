import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionTitle } from "./Layout";
import { FIRM, PRACTICE, type PracticeArea } from "./data";

/** Vakeelsaab-style service card: icon, title, summary, bulleted sub-services, "Know More". */
export function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-gold">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-navy">
        <area.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl text-navy">{area.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{area.desc}</p>
      <ul className="mt-5 space-y-2.5">
        {area.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5 text-sm">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="text-foreground/80">{pt}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/practice-areas/$slug"
        params={{ slug: area.slug }}
        className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
        style={{ marginTop: "1.75rem" }}
      >
        Know More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function PracticeAreasSection({
  eyebrow = "What We Do",
  title = "Our Practice Areas",
  subtitle,
  limit,
  showMore = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  showMore?: boolean;
}) {
  const areas = limit ? PRACTICE.slice(0, limit) : PRACTICE;
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow={eyebrow} title={title} />
        {subtitle && <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-muted-foreground">{subtitle}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <PracticeCard key={area.slug} area={area} />
          ))}
        </div>
        {showMore && (
          <div className="mt-12 text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 font-semibold text-navy-foreground transition hover:bg-navy-deep"
            >
              More Legal Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/** "Core Legal Areas Covered" — horizontal pill cards with a gold shield icon. */
export function CoreAreasGrid({ area }: { area: PracticeArea }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {area.core.map((c) => (
        <div key={c} className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4 shadow-card">
          <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
          <span className="text-sm font-semibold text-navy">{c}</span>
        </div>
      ))}
    </div>
  );
}

/** Navy pill grid of the other practice areas, used at the foot of a detail page. */
export function ExploreAreasGrid({ current }: { current: string }) {
  const others = PRACTICE.filter((p) => p.slug !== current);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {others.map((p) => (
        <Link
          key={p.slug}
          to="/practice-areas/$slug"
          params={{ slug: p.slug }}
          className="rounded-xl border border-gold/25 bg-navy px-4 py-4 text-center font-serif text-base transition hover:bg-gold hover:text-primary-foreground"
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}

export function PracticeCta() {
  return (
    <section className="bg-navy-deep py-20 text-navy-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Need Legal Help?</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Talk to an Advocate About Your Matter</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={FIRM.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold">
            Call {FIRM.phone}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 font-semibold hover:bg-navy">
            Send Your Details
          </Link>
        </div>
      </div>
    </section>
  );
}
