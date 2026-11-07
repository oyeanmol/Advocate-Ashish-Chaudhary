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
          "Comprehensive legal representation across criminal, family, property, civil and corporate law at Tis Hazari Courts and Delhi High Court.",
      },
      { property: "og:title", content: "Our Legal Services | Urmika Juris & Associates" },
    ],
  }),
  component: PracticeIndexPage,
});

function PracticeIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Legal Services"
        title="Our Legal Services"
        subtitle="Focused counsel across every major branch of law — practicing before Tis Hazari Courts, Delhi High Court and Supreme Court."
      />
      <LegalServicesSection showCategoryFilters={true} showViewAll={false} />
      <HowWeWorkSection />
    </SiteShell>
  );
}
