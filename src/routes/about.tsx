import { createFileRoute } from "@tanstack/react-router";
import { Scale, ShieldCheck, Handshake, MapPin, Gavel } from "lucide-react";
import portrait from "@/assets/advocate-portrait.jpg";
import urmikaOriginalLogo from "@/assets/urmika-original-logo.jpg";
import { SiteShell, PageHero, SectionTitle } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { useConsultationModal } from "@/components/site/ConsultationModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Urmika Juris & Associates — Advocates in India" },
      {
        name: "description",
        content:
          "Learn about Urmika Juris & Associates, Founder & Principal Advocate Aashish Choudhary, Senior Advocates Satish Chand, Durga Das, and Krishan Kumar, practicing across District Courts, High Courts across India, and the Supreme Court of India.",
      },
      { property: "og:title", content: "About Us | Urmika Juris & Associates" },
      {
        property: "og:description",
        content:
          "Dedicated legal advocacy founded on Satyamev Jayate. Practicing before District Courts, High Courts across India, and the Supreme Court of India.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    icon: Scale,
    title: "Truth & Legal Integrity",
    desc: "We adhere strictly to factual truth and transparent advice, counseling clients honestly on legal merits, procedural viability, and risks.",
  },
  {
    icon: ShieldCheck,
    title: "Privileged Confidentiality",
    desc: "Advocate-client communication is sacred. All documents, discussions, and strategic records remain strictly privileged under Section 126 of the Evidence Act.",
  },
  {
    icon: Handshake,
    title: "Procedural Discipline",
    desc: "From initial draft to final execution, we maintain systematic tracking of court listings, counter-affidavits, and limitation schedules.",
  },
];

function AboutPage() {
  const { openModal } = useConsultationModal();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Firm Profile"
        title="About Urmika Juris & Associates"
        subtitle="Anchored in Satyamev Jayate — Committed to Disciplined Advocacy and Ethical Legal Practice"
      />

      {/* Main Narrative & Advocate Profile */}
      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Approved Photograph of Advocate Aashish Choudhary */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 max-w-md mx-auto">
                <img
                  src={portrait}
                  alt="Advocate Aashish Choudhary — Founder & Principal Advocate"
                  loading="lazy"
                  width={600}
                  height={750}
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="bg-[#172B54] p-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FEC556]">
                    Founder & Principal Advocate
                  </div>
                  <div className="text-base font-bold mt-0.5">Advocate Aashish Choudhary</div>
                  <div className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FEC556] shrink-0" />
                    <span>Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7">
              <div className="border-l-2 border-[#172B54] pl-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#172B54]">
                  Our Legal Ethos
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#172B54] tracking-tight mt-1">
                  Advocacy Built on Discipline and Due Diligence
                </h2>
              </div>
              <div className="mt-3 h-1 w-16 rounded bg-[#FEC556]" />

              <p className="mt-5 text-base text-gray-700 leading-relaxed">
                Urmika Juris & Associates is an established Indian law practice headquartered in the
                historic Tis Hazari Courts complex of Delhi, representing matters across India before
                District Courts, State High Courts, and the Supreme Court of India. Founded by{" "}
                <strong className="text-[#172B54]">Advocate Aashish Choudhary</strong>, the firm was
                established to provide transparent, fearless, and ethically grounded legal
                representation across trial courts and appellate tribunals nationwide.
              </p>
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                We believe that successful legal outcomes are won long before entering the courtroom
                through exhaustive documentary verification, rigorous statutory study, and precise
                pleadings. Whether defending against criminal prosecution, navigating sensitive
                matrimonial separation, or contesting commercial disputes, our team approaches every
                brief with meticulous preparation.
              </p>

              {/* Verified Advocates Panel */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#172B54]">
                    Advocates Representing the Firm:
                  </div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    4 Practicing Advocates
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {FIRM.advocates.map((adv) => (
                    <div
                      key={adv.name}
                      className="rounded-xl border border-gray-200 bg-[#FEFBF3] p-4 shadow-sm hover:border-[#172B54] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <Gavel className="h-4 w-4 text-[#172B54] shrink-0" />
                          <div className="font-heading text-sm font-bold text-[#172B54]">
                            Adv. {adv.name}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#172B54] text-[#FEC556]">
                          {adv.role === "Founder & Principal Advocate" ? "Principal" : adv.role}
                        </span>
                      </div>
                      <div className="text-[11px] font-medium text-gray-700 mt-1 flex items-start gap-1">
                        <Scale className="h-3.5 w-3.5 text-[#172B54]/70 shrink-0 mt-0.5" />
                        <span>{adv.forum}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded bg-[#172B54] px-6 py-3 text-xs font-bold text-[#FEC556] shadow-md hover:bg-[#1f386e] transition cursor-pointer"
                >
                  Book 30-Minute Consultation
                </button>
                <a
                  href={FIRM.phoneHref}
                  className="text-xs font-bold text-[#172B54] hover:underline"
                >
                  Direct Call: {FIRM.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-[#FEFBF3] border-y border-amber-200 text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Foundational Values"
            title="The Principles That Guide Our Advocacy"
            subtitle="Adhering strictly to Bar Council of India standards of professional conduct and advocacy ethics."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-200/80 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EDF3FA] text-[#172B54] mb-5">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#172B54]">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber Presence & Jurisdictional Reach */}
      <section className="py-20 bg-white text-[#111827]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <SectionTitle
            eyebrow="Chamber Presence"
            title="Permanent Chamber at Tis Hazari Courts"
            subtitle="Central Delhi location providing direct physical proximity to district judicial benches and registrar counters."
          />

          <div className="rounded-xl border border-gray-200 bg-[#EDF3FA] p-8 text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#172B54]">
                <MapPin className="h-4 w-4 text-[#FEC556]" />
                <span>Physical Chamber Location</span>
              </div>
              <h3 className="mt-2 font-heading text-2xl font-bold text-[#172B54]">
                Ch. 298A, Western Wing, Tis Hazari Courts
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Tis Hazari Courts Complex, Delhi – 110054.
                <br />
                Chamber hours: Monday through Saturday, 10:00 AM – 6:00 PM (By prior appointment).
              </p>
              <div className="mt-5 space-y-1.5 text-xs text-gray-600">
                <div>• Primary Registry & Bail Filings</div>
                <div>• District & Sessions Trial Benches</div>
                <div>• Metropolitan Magistrate Special Courts (NI Act)</div>
              </div>
            </div>

            <div className="bg-white rounded border border-gray-200 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Consultation Protocol:
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Initial consultations are conducted for up to 30 minutes to review facts and examine
                papers. Both in-person chamber meetings and virtual conference sessions are
                available by appointment.
              </p>
              <button
                type="button"
                onClick={openModal}
                className="w-full rounded bg-[#172B54] py-3 text-xs font-bold text-[#FEC556] shadow hover:bg-[#1f386e] transition"
              >
                Review 30-Minute Consultation Terms
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
