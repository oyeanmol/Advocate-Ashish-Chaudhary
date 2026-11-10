import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionTitle } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { ShieldCheck, Scale, Award, HeartHandshake, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Feedback & Ethics Policy | Urmika Juris & Associates" },
      {
        name: "description",
        content:
          "Our commitment to client confidentiality, ethical legal representation, and compliance with Bar Council of India Rule 36.",
      },
      {
        property: "og:title",
        content: "Client Feedback & Ethics Policy | Urmika Juris & Associates",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/reviews" }],
  }),
  component: ReviewsPage,
});

export function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Ethical Standards & Feedback"
        title="Professional Conduct & Legal Ethics"
        subtitle="Commitment to Advocate-Client Privilege, Procedural Diligence, and Compliance with Bar Council of India Rule 36"
      />

      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Statutory Bar Council Compliance Banner */}
          <div className="rounded-2xl border-2 border-amber-300 bg-[#FEFBF3] p-8 shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#172B54] text-[#FEC556]">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#172B54]">
                  Compliance with Bar Council of India Rule 36
                </h3>
                <p className="text-xs text-amber-800 font-semibold">
                  Standards of Professional Conduct and Etiquette
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Under Rule 36 of the Bar Council of India Rules, advocates are strictly prohibited
              from soliciting work or advertising, either directly or indirectly, through boastful
              claims, case statistics, fabricated reviews, or commercial ratings.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              In strict adherence to these legal ethics, Urmika Juris & Associates does not publish
              promotional testimonials or commercial endorsement rankings. We believe that true
              professional credibility is built upon courtroom competence, honest legal advice, and
              rigorous procedural preparation.
            </p>
          </div>

          <SectionTitle
            eyebrow="Client Commitments"
            title="The Pillars of Our Client Relationship"
            subtitle="The fundamental standards upheld by Founder Advocate Aashish Choudhary, Satish Chand, Durga Das, and Krishan Kumar in every brief."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF3FA] text-[#172B54] mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#172B54]">
                Strict Confidentiality
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Every conversation, factual disclosure, and legal document shared with our chamber
                remains privileged under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 Evidence Act).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF3FA] text-[#172B54] mb-3">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#172B54]">
                Honest Assessment of Merits
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                We provide unbiased legal opinions on the strengths and weaknesses of each matter,
                never encouraging futile or unmerited litigation.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF3FA] text-[#172B54] mb-3">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#172B54]">
                Transparent Professional Terms
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Consultation and representation terms are discussed clearly upfront according to
                applicable professional norms, with zero hidden costs.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDF3FA] text-[#172B54] mb-3">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-[#172B54]">
                Regular Procedural Updates
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Clients receive prompt communication following court listings, order pronouncements,
                and notice filings before Tis Hazari and Delhi benches.
              </p>
            </div>
          </div>

          {/* Feedback Form / Channel */}
          <div className="mt-14 rounded-2xl bg-[#172B54] p-8 text-white text-center">
            <h3 className="font-heading text-xl font-bold">Client Communication Channel</h3>
            <p className="mt-2 text-xs text-gray-300 max-w-lg mx-auto">
              If you are an existing client and wish to share confidential feedback or discuss
              matter progress, please write directly to our advocates.
            </p>
            <div className="mt-5">
              <a
                href={FIRM.emailHref}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FEC556] px-6 py-3 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
              >
                <Mail className="h-4 w-4" /> Email: {FIRM.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
