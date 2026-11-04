import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionTitle } from "@/components/site/Layout";
import { FIRM, PRACTICE } from "@/components/site/data";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Urmika Juris & Associates" },
      { name: "description", content: "Criminal, family, property, corporate, civil, consumer, NI Act and constitutional law services." },
      { property: "og:title", content: "Practice Areas | Urmika Juris & Associates" },
      { property: "og:description", content: "Full-service legal practice across all major areas of law." },
    ],
  }),
  component: Practice,
});

const STEPS = ["Share your concern", "Free initial assessment", "Legal strategy & documentation", "Representation till resolution"];

function Practice() {
  return (
    <SiteShell>
      <PageHero eyebrow="Legal Services" title="Our Practice Areas" subtitle="Comprehensive legal solutions for individuals, families and businesses." />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">
          {PRACTICE.map((p) => (
            <div key={p.title} className="flex gap-5 rounded-2xl border bg-card p-7 shadow-card transition hover:border-gold">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-gold"><p.icon className="h-7 w-7" /></div>
              <div>
                <h3 className="text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-navy-deep py-24 text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle light eyebrow="How We Work" title="Simple, Transparent Process" />
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s} className="rounded-2xl border border-gold/25 bg-navy p-6">
                <div className="font-display text-4xl text-gold">0{i + 1}</div>
                <p className="mt-3 font-serif text-lg">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={FIRM.phoneHref} className="rounded-full bg-gold px-8 py-3.5 font-semibold text-primary-foreground shadow-gold">Speak to an Advocate</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
