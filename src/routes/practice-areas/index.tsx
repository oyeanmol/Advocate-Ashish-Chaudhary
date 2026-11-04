import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { PracticeAreasSection, PracticeCta } from "@/components/site/PracticeAreas";

export const Route = createFileRoute("/practice-areas/")({
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
      <PracticeAreasSection />
      <section className="bg-navy-deep py-24 text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl md:text-4xl">Simple, Transparent Process</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s} className="rounded-2xl border border-gold/25 bg-navy p-6">
                <div className="font-display text-4xl text-gold">0{i + 1}</div>
                <p className="mt-3 font-serif text-lg">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PracticeCta />
    </SiteShell>
  );
}
