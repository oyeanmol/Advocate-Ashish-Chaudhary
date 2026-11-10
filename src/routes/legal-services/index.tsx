import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";

export const Route = createFileRoute("/legal-services/")({
  head: () => ({
    meta: [
      { title: "Legal Services | Urmika Juris & Associates — Delhi Advocates" },
      {
        name: "description",
        content:
          "Explore our legal services in criminal defense, family & divorce, property disputes, civil litigation, corporate advisory, consumer protection, and high court writs.",
      },
      { property: "og:title", content: "Legal Services | Urmika Juris & Associates" },
      {
        property: "og:description",
        content:
          "Comprehensive legal representation across Delhi District Courts, Tis Hazari, and High Court.",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/legal-services" }],
  }),
  component: LegalServicesHubPage,
});

function LegalServicesHubPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Courtroom & Advisory Domains"
        title="Legal Services"
        subtitle="Strategic, Disciplined Advocacy Across Civil, Criminal, Matrimonial, Property, and Corporate Jurisdictions"
      />
      <LegalServicesSection showCategoryFilters={true} showViewAll={false} />
      <HowWeWorkSection showHeading={true} />
    </SiteShell>
  );
}
