import { createFileRoute } from "@tanstack/react-router";
import { Scale, ShieldCheck, Handshake } from "lucide-react";
import hero from "@/assets/hero-advocate.jpg";
import { SiteShell, PageHero, SectionTitle } from "@/components/site/Layout";
import { FIRM, STATS } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Urmika Juris & Associates" },
      { name: "description", content: "Meet Advocate Aashish Choudhary and the values behind Urmika Juris & Associates." },
      { property: "og:title", content: "About Us | Urmika Juris & Associates" },
      { property: "og:description", content: "Meet Advocate Aashish Choudhary and the values behind our firm." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Scale, title: "Integrity", desc: "Honest advice, even when it isn't what you want to hear." },
  { icon: ShieldCheck, title: "Confidentiality", desc: "Your matters stay strictly between you and your counsel." },
  { icon: Handshake, title: "Commitment", desc: "We stand by our clients at every hearing, every step." },
];

function About() {
  return (
    <SiteShell>
      <PageHero eyebrow="About Us" title="Truth Alone Triumphs" subtitle="A firm founded on ethics, expertise and an unwavering commitment to our clients." />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <img src={hero} alt={`Advocate ${FIRM.advocate}`} loading="lazy" width={1280} height={1024} className="rounded-2xl shadow-card" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Founder & Principal Advocate</p>
            <h2 className="mt-3 text-3xl text-navy md:text-4xl">{FIRM.advocate}</h2>
            <p className="mt-5 text-muted-foreground">
              Advocate {FIRM.advocate} founded Urmika Juris & Associates with a vision to make quality legal representation accessible, transparent and dependable. With extensive experience across criminal, civil, family and commercial litigation, he is known for meticulous preparation and persuasive advocacy.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team of associates brings together diverse expertise to deliver practical solutions — whether through negotiation, mediation or courtroom battle.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border bg-card p-4">
                  <div className="font-display text-2xl text-gold">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Our Values" title="The Principles We Live By" />
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-8 text-center shadow-card">
                <v.icon className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 text-xl text-navy">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
