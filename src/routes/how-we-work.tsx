import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionTitle } from "@/components/site/Layout";
import { HOW_WE_WORK_STEPS, FIRM } from "@/components/site/data";
import { HowWeWorkSection } from "@/components/site/HowWeWorkSection";
import { useConsultationModal } from "@/components/site/ConsultationModal";
import { ShieldCheck, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work | Urmika Juris & Associates — Structured Legal Methodology" },
      {
        name: "description",
        content:
          "Explore our disciplined 3-stage legal methodology: confidential document intake, structured 30-minute chamber advisory, and ethical courtroom litigation before Indian courts.",
      },
      {
        name: "keywords",
        content:
          "how lawyers work India, legal process Delhi, litigation methodology, lawyer consultation procedure, court filing stages, Urmika Juris process",
      },
      { property: "og:title", content: "How We Work | Urmika Juris & Associates — 3-Stage Process" },
      {
        property: "og:description",
        content:
          "Disciplined case analysis from preliminary confidential intake to structured consultation and decisive courtroom advocacy across District Courts, High Courts & Supreme Court.",
      },
      {
        name: "twitter:title",
        content: "How We Work | Urmika Juris & Associates",
      },
      {
        name: "twitter:description",
        content:
          "A transparent 3-stage legal journey: confidential intake, structured 30-minute advisory, and disciplined courtroom litigation.",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/how-we-work" }],
  }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  const { openModal } = useConsultationModal();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Process"
        title="How We Work"
        subtitle="A Transparent 3-Stage Path from Initial Document Examination to Decisive Courtroom Representation"
      />

      {/* Main 3-Step Section (VakeelSaab reference architecture) */}
      <HowWeWorkSection showHeading={false} className="py-20" />

      {/* Deep-Dive Operational Standards */}
      <section className="py-20 bg-white text-[#111827]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Procedural Standards"
            title="What Clients Can Expect at Every Stage"
            subtitle="Clear commitments to transparency, confidentiality, and procedural diligence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-[#FEFBF3] p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#172B54]">
                1. Prior to Consultation
              </h3>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>Prompt appointment scheduling within 24 business hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>Checklist of required statutory documents, court summons, or notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>Strict protection under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 Evidence Act).</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#FEFBF3] p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#172B54]">
                2. During & After Litigation
              </h3>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>
                    Transparent communication of professional terms and agreed milestones.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>Certified copy acquisition and prompt reporting of judicial orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                  <span>
                    Systematic hearing preparation with client briefings before appearances.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-14 rounded-2xl bg-[#172B54] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase font-bold text-[#FEC556] tracking-wider">
                Tis Hazari Courts Chamber 298A
              </div>
              <h4 className="mt-1 font-heading text-xl sm:text-2xl font-bold">
                Ready to Schedule Your 30-Minute Consultation?
              </h4>
              <p className="mt-1 text-xs text-gray-300">
                Review our consultation terms and connect directly with our advocates.
              </p>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg bg-[#FEC556] px-6 py-3.5 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition shrink-0"
            >
              Book 30-Minute Consultation
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
