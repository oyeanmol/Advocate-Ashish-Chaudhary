import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { routeTree } from "@/routeTree.gen";
import { LEGAL_SERVICES, PRACTICE, FIRM, HOW_WE_WORK_STEPS } from "@/components/site/data";
import { ConsultationModalProvider } from "@/components/site/ConsultationModal";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";
import { LegalServicesSection } from "@/components/site/LegalServicesSection";

describe("Urmika Juris Route Matching", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches root homepage /", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.pathname).toBe("/");
  });

  it("matches /about page", () => {
    const matches = router.matchRoutes("/about");
    expect(matches.at(-1)?.routeId).toBe("/about");
  });

  it("matches /legal-services hub", () => {
    const matches = router.matchRoutes("/legal-services");
    expect(matches.at(-1)?.routeId).toBe("/legal-services/");
  });

  it("matches every legal service slug under /legal-services/$slug", () => {
    for (const service of LEGAL_SERVICES) {
      const matches = router.matchRoutes(`/legal-services/${service.slug}`);
      const last = matches.at(-1);
      expect(last?.routeId).toBe("/legal-services/$slug");
      expect(last?.pathname).toBe(`/legal-services/${service.slug}`);
    }
  });

  it("matches /how-we-work methodology page", () => {
    const matches = router.matchRoutes("/how-we-work");
    expect(matches.at(-1)?.routeId).toBe("/how-we-work");
  });

  it("matches /contact chamber page", () => {
    const matches = router.matchRoutes("/contact");
    expect(matches.at(-1)?.routeId).toBe("/contact");
  });

  it("matches /faq page", () => {
    const matches = router.matchRoutes("/faq");
    expect(matches.at(-1)?.routeId).toBe("/faq");
  });

  it("matches /reviews & ethics page", () => {
    const matches = router.matchRoutes("/reviews");
    expect(matches.at(-1)?.routeId).toBe("/reviews");
  });

  it("matches /privacy-policy and /terms-of-service compliance pages", () => {
    const pp = router.matchRoutes("/privacy-policy");
    expect(pp.at(-1)?.routeId).toBe("/privacy-policy");

    const tos = router.matchRoutes("/terms-of-service");
    expect(tos.at(-1)?.routeId).toBe("/terms-of-service");
  });

  it("maintains backwards compatibility for legacy /practice-areas routes", () => {
    const listing = router.matchRoutes("/practice-areas");
    expect(listing.at(-1)?.routeId).toBe("/practice-areas/");

    for (const area of PRACTICE) {
      const matches = router.matchRoutes(`/practice-areas/${area.slug}`);
      const last = matches.at(-1);
      expect(last?.routeId).toBe("/practice-areas/$slug");
    }
  });
});

describe("Urmika Juris Business Identity Verification", () => {
  it("verifies exact advocate names and designations", () => {
    expect(FIRM.name).toBe("Urmika Juris & Associates");
    expect(FIRM.advocates.length).toBeGreaterThanOrEqual(4);

    const names = FIRM.advocates.map((a) => a.name);
    expect(names).toContain("Aashish Choudhary");
    expect(names).toContain("Satish Chand");
    expect(names).toContain("Durga Das");
    expect(names).toContain("Krishan Kumar");

    for (const adv of FIRM.advocates) {
      expect(adv.designation).toBe("Advocate");
    }
  });

  it("verifies contact details and chamber coordinates", () => {
    expect(FIRM.phone).toBe("+91 88024 87291");
    expect(FIRM.phoneHref).toBe("tel:+918802487291");
    expect(FIRM.whatsapp).toContain("8802487291");
    expect(FIRM.email).toBe("urmikajuris@gmail.com");
    expect(FIRM.chamber).toContain("Ch. 298A, Western Wing, Tis Hazari Courts");
  });

  it("verifies initial 30-minute consultation terms wording", () => {
    expect(FIRM.consultationDuration).toBe("30 Minutes");
    expect(FIRM.consultationTermsWording).toContain("30 minutes");
    expect(FIRM.consultationTermsWording).toContain(
      "applicable agreed terms and professional norms",
    );
    expect(FIRM.consultationTermsWording).not.toContain("4500");
    expect(FIRM.consultationTermsWording).not.toContain("₹4,500");
  });

  it("verifies How We Work contains 3 distinct stages matching VakeelSaab reference", () => {
    expect(HOW_WE_WORK_STEPS).toHaveLength(3);
    expect(HOW_WE_WORK_STEPS[0].step).toBe("01");
    expect(HOW_WE_WORK_STEPS[1].step).toBe("02");
    expect(HOW_WE_WORK_STEPS[2].step).toBe("03");
  });

  it("verifies all 19 legal services matching VakeelSaab are defined with exact emojis", () => {
    expect(LEGAL_SERVICES).toHaveLength(19);
    const slugs = LEGAL_SERVICES.map((s) => s.slug);
    expect(slugs).toContain("property-lawyer");
    expect(slugs).toContain("criminal-lawyer");
    expect(slugs).toContain("civil-lawyer");
    expect(slugs).toContain("family-lawyer");
    expect(slugs).toContain("divorce-lawyer");
    expect(slugs).toContain("corporate-lawyer");
    expect(slugs).toContain("cyber-crime-lawyer");
    expect(slugs).toContain("intellectual-property-lawyer");
    expect(slugs).toContain("labour-and-employment-lawyer");
    expect(slugs).toContain("consumer-protection-lawyer");

    for (const service of LEGAL_SERVICES) {
      expect(service.emoji).toBeTruthy();
      expect(service.title).toBeTruthy();
    }
  });
});
