import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title: "Our Legal Services | Urmika Juris & Associates" },
      {
        name: "description",
        content:
          "Comprehensive legal representation across criminal, family, property, civil and corporate law before District Courts, High Courts across India, and the Supreme Court of India.",
      },
      { property: "og:title", content: "Our Legal Services | Urmika Juris & Associates" },
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
