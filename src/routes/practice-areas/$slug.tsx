import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { SiteShell, SectionTitle } from "@/components/site/Layout";
import { CoreAreasGrid, ExploreAreasGrid, PracticeCta } from "@/components/site/PracticeAreas";
import { FIRM, PRACTICE } from "@/components/site/data";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const area = PRACTICE.find((p) => p.slug === params.slug);
    if (!area) throw notFound();
    return { slug: area.slug };
  },
  head: ({ params }) => {
    const area = PRACTICE.find((p) => p.slug === params.slug);
    const title = area ? `${area.title} Advocates | Urmika Juris & Associates` : "Practice Area | Urmika Juris & Associates";
    const desc = area ? `${area.short}. Expert legal counsel from Urmika Juris & Associates.` : "Legal services by Urmika Juris & Associates.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: PracticeDetail,
});

function PracticeDetail() {
  const { slug } = Route.useParams();
  const area = PRACTICE.find((p) => p.slug === slug);
  if (!area) return null;

  return (
    <SiteShell>
      <section className="bg-navy-deep py-20 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <Link to="/practice-areas" className="inline-flex items-center gap-2 text-sm text-navy-foreground/70 transition hover:text-gold">
            <ArrowLeft className="h-4 w-4" /> Back to Practice Areas
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold sm:flex">
              <area.icon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">{FIRM.name}</p>
              <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">Expert Advocates for {area.title}</h1>
              <p className="mt-4 font-serif text-2xl text-gold-soft">{area.short}</p>
              <p className="mt-4 max-w-2xl text-navy-foreground/75">{area.blurb}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={FIRM.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold">
                  <Phone className="h-4 w-4" /> Call {FIRM.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 font-semibold hover:bg-navy">
                  Send Your Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="What We Handle" title={`${area.title} — Core Areas Covered`} />
          <CoreAreasGrid area={area} />
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="Our Approach" title="How We Work On Your Matter" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Detailed study of your documents and facts", "Clear written advice on options, risk and timelines", "Filing, drafting and appearances before the right forum", "Regular updates at every hearing and stage", "Transparent fees discussed before we begin", "Confidential handling of every detail"].map((s) => (
              <div key={s} className="rounded-2xl border bg-card p-6 shadow-card">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="mt-3 font-serif text-lg text-navy">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light eyebrow="Explore" title="Other Practice Areas" />
          <ExploreAreasGrid current={area.slug} />
        </div>
      </section>

      <PracticeCta />
    </SiteShell>
  );
}
