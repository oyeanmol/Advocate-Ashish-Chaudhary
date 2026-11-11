import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";

export const Route = createFileRoute("/legal-services/")({
  head: () => ({
    meta: [
      { title: "Legal Services Directory | Urmika Juris & Associates — Delhi Advocates" },
      {
        name: "description",
        content:
          "Comprehensive legal directory across 19 practice domains including criminal defense, property disputes, divorce & family law, corporate advisory, and writ petitions before Indian courts.",
      },
      {
        name: "keywords",
        content:
          "legal services Delhi, law firm practice areas, criminal lawyer, property disputes, divorce lawyer Tis Hazari, corporate law Delhi, High Court writ advocate",
      },
      { property: "og:title", content: "Legal Services Directory | Urmika Juris & Associates" },
      {
        property: "og:description",
        content:
          "Strategic legal counsel and courtroom representation across 19 specialized domains before District Courts, High Courts & Supreme Court of India.",
      },
      {
        name: "twitter:title",
        content: "Legal Services Directory | Urmika Juris & Associates",
      },
      {
        name: "twitter:description",
        content:
          "Full directory of 19 legal practice areas with experienced trial advocates at Chamber 298A Tis Hazari Courts.",
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
