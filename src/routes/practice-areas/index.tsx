import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title: "Our Legal Practice Areas | Urmika Juris & Associates" },
      {
        name: "description",
        content:
          "Comprehensive legal practice areas including criminal defense, matrimonial disputes, property suits, corporate compliance, and writ petitions across Indian courts.",
      },
      {
        name: "keywords",
        content:
          "practice areas Urmika Juris, legal services Delhi, courtroom representation India, Tis Hazari advocates, High Court lawyers",
      },
      { property: "og:title", content: "Our Legal Practice Areas | Urmika Juris & Associates" },
      {
        property: "og:description",
        content:
          "Full spectrum of legal representation before District Courts, High Courts across India, and the Supreme Court of India.",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/practice-areas" }],
  }),
  component: PracticeIndexPage,
});

function PracticeIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Legal Services"
        title="Our Legal Services"
        subtitle="Focused legal advocacy across every major branch of law — practicing before District Courts, High Courts across India, and the Supreme Court of India."
      />
      <LegalServicesSection showCategoryFilters={true} showViewAll={false} />
      <HowWeWorkSection />
    </SiteShell>
  );
}
