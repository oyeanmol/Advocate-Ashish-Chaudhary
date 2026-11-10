import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { ShieldAlert, Clock, Scale, FileText } from "lucide-react";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service & Consultation Norms | Urmika Juris & Associates" },
      {
        name: "description",
        content:
          "Terms of service, consultation conditions, and legal disclaimers for Urmika Juris & Associates, Chamber 298A Tis Hazari Courts, Delhi.",
      },
      { property: "og:title", content: "Terms of Service | Urmika Juris & Associates" },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/terms-of-service" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Compliance & Legal Terms"
        title="Terms of Service & Consultation Norms"
        subtitle="Governing Website Usage, 30-Minute Consultation Protocols, and Bar Council of India Compliance"
      />

      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose max-w-none space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            {/* Consultation Terms Box */}
            <div className="rounded-2xl border-2 border-amber-300 bg-[#FEFBF3] p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#172B54] mb-3">
                <Clock className="h-6 w-6 text-[#FEC556]" />
                <h3 className="font-heading text-lg font-bold">Consultation Terms & Conditions</h3>
              </div>
              <blockquote className="border-l-4 border-[#FEC556] pl-4 text-sm font-medium italic text-gray-800 leading-relaxed">
                "{FIRM.consultationTermsWording}"
              </blockquote>
              <p className="mt-4 text-xs text-gray-500">
                * Note: Initial consultation wording is provided for guidance and is subject to
                advocate confirmation upon appointment scheduling in accordance with professional
                legal ethics.
              </p>
            </div>

            {/* Section 1: Informational Purpose & BCI Disclaimer */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#FEC556]" />
                1. Bar Council of India Compliance (Rule 36)
              </h3>
              <p className="mt-2">
                In compliance with the Advocates Act 1961 and Rule 36 of the Bar Council of India
                Rules, this website is intended solely for informational purposes and should not be
                construed as legal advertising, commercial solicitation, personal invitation, or an
                inducement of any sort.
              </p>
              <p className="mt-2">
                By accessing this website, the user acknowledges that they are seeking general
                information about Urmika Juris & Associates voluntarily and of their own accord. No
                advocate-client relationship is created simply by accessing the website, viewing
                content, or utilizing the informational chatbot.
              </p>
            </div>

            {/* Section 2: Consultation Protocol */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#FEC556]" />
                2. 30-Minute Consultation Protocol
              </h3>
              <p className="mt-2">
                All preliminary consultations are structured for up to 30 minutes. During this
                session, the advocate will review documents and facts to assess procedural
                viability. Any extended consultations, subsequent court drafting, or formal
                courtroom representation will be governed by separately agreed professional terms
                and execution of a formal Vakalatnama.
              </p>
            </div>

            {/* Section 3: No Warranty or Outcome Guarantee */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-[#FEC556]" />
                3. No Outcome Guarantees
              </h3>
              <p className="mt-2">
                Legal proceedings are inherently subject to judicial discretion, statutory
                interpretation, and the evidentiary merits of each individual matter. Urmika Juris &
                Associates does not provide guarantees, warranties, or speculative assurances
                regarding any case outcome.
              </p>
            </div>

            {/* Section 4: Jurisdiction */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#FEC556]" />
                4. Governing Law & Jurisdiction
              </h3>
              <p className="mt-2">
                These terms and any disputes relating to the usage of this website shall be governed
                exclusively by the laws of India, and subject to the exclusive jurisdiction of the
                competent courts in Delhi.
              </p>
            </div>

            {/* Contact coordinates */}
            <div className="border-t border-gray-200 pt-6 text-xs text-gray-500">
              <p>For any formal inquiries regarding these terms, please contact:</p>
              <p className="mt-1 font-semibold text-gray-800">
                Urmika Juris & Associates
                <br />
                Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054
                <br />
                Email: {FIRM.email} | Phone: {FIRM.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
