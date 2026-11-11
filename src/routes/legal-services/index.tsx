import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";

export const Route = createFileRoute("/legal-services/")({
  head: () => ({
    meta: [
      { title: "Legal Services Directory | Urmika Juris & Associates" },
      {
        name: "description",
        content:
          "Explore our directory of 19 legal practice areas from criminal defense and property disputes to corporate advisory across Delhi courts and tribunals.",
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
          "Explore our directory of 19 legal practice areas from criminal defense and property disputes to corporate advisory across Delhi courts and tribunals.",
      },
      {
        name: "twitter:title",
        content: "Legal Services Directory | Urmika Juris & Associates",
      },
      {
        name: "twitter:description",
        content:
          "Explore our directory of 19 legal practice areas from criminal defense and property disputes to corporate advisory across Delhi courts and tribunals.",
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
